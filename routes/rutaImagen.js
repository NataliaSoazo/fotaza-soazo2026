import { Router } from 'express';
import { Usuario } from '../models/usuario.js';
import { Imagen } from '../models/imagen.js';
import { Voto} from '../models/voto.js'; 
import {Comenta} from '../models/comenta.js';
import { Etiqueta } from '../models/etiqueta.js';
import { EtiquetaPublicacion } from '../models/etiquetaPublicacion.js';
import { Model } from 'sequelize';
import { Publicacion } from '../models/publicacion.js';
import { Denuncia } from '../models/denuncia.js';
import {Sigue } from '../models/Sigue,js';


const router = Router();


router.post('/votar-imagen', async (req, res) => {
    try {
        const user = req.session.user;
        if (!user) {
           return res.redirect('/');
        }
        const existeVoto = await Voto.findOne({where: {idImagen: req.body.idVotada, idUsuario:user.id}})
            if (existeVoto){
               req.session.mensaje = "Ya votaste esta imagen";
                return res.redirect(`/imagen/${req.body.idVotada}`);
            }
            const datos = {
                fecha: new Date(),
                idImagen: req.body.idVotada,
                estrellas: req.body.voto,
                idUsuario: user.id,
            }
            const voto = await Voto.create(datos);
            req.session.mensaje = "Voto enviado!";
            res.redirect(`/imagen/${req.body.idVotada}`);
    } catch (error) {
        console.error(error); 
        res.status(500).send('Error al procesar el voto');
    }
});

router.post('/comentar-imagen', async (req, res) => {
        try {
            console.log("ESTE ES EL CUERPO" +req.body);
            const user = req.session.user;
            if(!user){
                return res.redirect('/');
            }
            const comentario={
                fecha : new Date(),
                idImagen: req.body.idComentario,
                texto : req.body.comentario,
                idUsuario: user.id,
            }
            await Comenta.create(comentario);
            res.redirect(`/imagen/${req.body.idComentario}`);
        } catch (error) {
           console.log(error);
           res.status(500).send('Error al procesar el comentario');
        }
        
});
router.get('/imagen/:id', async (req, res) => {
    try {
        const user = req.session.user || null;
        /*if(!user){
            return res.redirect('/');
        }*/
        const id = req.params.id;
        const imagen = await Imagen.findOne(
            {where:{
                id: id},
            
            include:[
        {
            model: Publicacion,
            }]}
        );
        const comentarios = await Comenta.findAll({
            where: { idImagen: id },
            limit: 10,             
            order: [['fecha', 'DESC']] ,
            include:[
                {model:Usuario,}
            ]
        });
        const usuario = await Usuario.findOne({where:{id: imagen.idUsuario}});
        const sumaDeVotos = await Voto.sum('estrellas', {where: {idImagen:id}});
        const cantVotantes = await Voto.count({where:{idImagen:id}});
        let promedioVotos =0;
          if(cantVotantes > 0)
          promedioVotos=  (sumaDeVotos / cantVotantes).toFixed(2);
        const mensaje = req.session.mensaje;
        let verif = null
        if (user!= null){
        verif = await verificarEstadoDeUsuarios(user.id, imagen.idUsuario);
        console.log("VERIF =", verif);
        }
        req.session.mensaje = null;
        res.render('Imagen/imagenIndividual', {imagen, comentarios, promedioVotos,cantVotantes, user, usuario,mensaje, verif  });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
   
});

router.get('/etiqueta/:id', async (req, res) => {
    try {
        const etiquetas = await Etiqueta.findAll({
            include: [{
                model: EtiquetaPublicacion,
                required: true,
                include: [{
                    model: Publicacion,
                    required: true,
                    where: {
                        copyright: false
                    }
                }]
            }]
        });
        const imagenes = await Imagen.findAll({
            include: [{
                model: Publicacion,
                include: [{
                    model: EtiquetaPublicacion,
                    include: [{
                        model: Etiqueta,
                        where: {
                            id: req.params.id
                        }
                        
                    
                    }]
                }]
            }]
        });
        
        res.render('Home/inicio', { imagenes, etiquetas });

    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.post('/denunciar-imagen', async (req, res) => {
    try {
        const user = req.session.user;
        if(!user){
            return res.redirect('/');
        }
        const denuncia ={
            fecha: new Date(),
            idImagen : req.body.idDenunciada,
            motivo : req.body.m,
            descripcion: req.body.d,
            idUsuario: user.id
        }
        Denuncia.create(denuncia);
        const imagen = await Imagen.findOne({where:{id:req.body.idDenunciada}});

        await Publicacion.update({ denunciada: true },{where: {id: imagen.idPublicacion}});

        const cantidadDenunciadas = await Publicacion.count({where: 
            {idUsuario: imagen.idUsuario,denunciada: true}});

            if (cantidadDenunciadas >= 3) {
        await Usuario.update({ anulado: true },{ where: {id:imagen.idUsuario} });
            }
        req.session.mensaje = 'Su denuncia fue registrada correctamente';
        res.redirect(`/imagen/${req.body.idDenunciada}?mensaje:"Su denuncia fué enviada correctamente`);
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.get('/vertodaPublicacion/:id', async(req ,res)=>{
    try {
        const user = req.session.user || null;
    
    const imagen =await Imagen.findOne({where:{id: req.params.id}});
    const imagenes = await Imagen.findAll({where:{idPublicacion: imagen.idPublicacion}});
    const publicacion= await Publicacion.findByPk(imagen.idPublicacion);
    const usuario = await Usuario.findByPk(publicacion.idUsuario);
    res.render('Usuario/verPublCompleta', {imagenes, publicacion, user, usuario});
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.get('/api/imagenes', async (req, res) => {
  try {
        const user = req.session.user;
        if(!user){
             const imagenes = await Imagen.findAll(
        {   where:{licencia:"Default"},  
            include:[
            {model:Publicacion}
            ],
        limit:20,
        order:[['idImagen', "DESC" ]]
  }); 
      res.json(imagenes); 
        }
      const imagenes = await Imagen.findAll(
        {include:[
            {model:Publicacion}
            ],
        limit:20,
        order:[['idImagen', "DESC" ]]
  }); 
      res.json(imagenes); 
    
  } catch (error) {
    console.error('Error al obtener datos imagenes:', error);
    res.status(500).json({ error: 'Error al buscar imagenes' });
  }
});
export default router;


async function verificarEstadoDeUsuarios(idUser, idDuenoImagen){
  const yaSigue= await Sigue.findOne({where:{idSeguidor:idUser, idSeguido:idDuenoImagen}});
   if(yaSigue){
    return true
   }
   else{
    return false;
   }
}