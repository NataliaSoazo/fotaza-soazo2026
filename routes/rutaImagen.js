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
import {Sigue } from '../models/Sigue.js';
import { Intereses} from '../models/meInteresa.js';
import { notificarVoto } from '../servicios/notificar.js';
import { notificarComentario } from '../servicios/notificar.js';
import { notificarInteres } from '../servicios/notificar.js';
import { Notificacion } from '../models/notificacion.js';
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
            await notificarVoto(voto);
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
            req.session.mensaje = "Comentario posteado";
            await notificarComentario(comentario);
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
        let notif = [];
        let cantNotif = 0;
        if(user){
             notif = await Notificacion.findAll({where:{idUsuarioReceptor:user.id, leido: false }});
             cantNotif = await Notificacion.count({where:{idUsuarioReceptor:user.id, leido: false }, order: [["createdAt", "DESC"]],
            limit: 10});
        }
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
        res.render('Imagen/imagenIndividual', {imagen, comentarios, promedioVotos,cantVotantes, user, usuario,mensaje, verif, notif, cantNotif  });
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
  try { let imagenes=[];
        const user = req.session.user;
        if(!user){
            imagenes = await Imagen.findAll(
            {   where:{licencia:"Default"},  
            include:[
            {model:Publicacion}
            ],
        limit:10,
        order:[['id', "DESC" ]]
        }); 
            
            return res.json(imagenes); 
        }
        imagenes = await Imagen.findAll(
        {include:[
            {model:Publicacion}
            ],
        limit:10,
        order:[['id', "DESC" ]]
             }); 
      res.json(imagenes); 
    
  } catch (error) {
    console.error(error);
    res.status(500).json({error: error.message});
  }
});

router.post("/meInteresa-imagen", async(req, res)=>{
   try {
    const user = req.session.user;
    if (!user){
        return res.redirect('/');
    }
    const interesPrevio = await Intereses.findOne({where: {idImagen: req.body.idImagen, usuarioInteresado:user.id}})
            if (interesPrevio){
               req.session.mensaje = "Ya notificaste tu interés previamente";
                return res.redirect(`/imagen/${req.body.idImagen}`);
            }
    const nuevoInteres = {
                fecha: new Date(),
                idImagen: req.body.idImagen,
                usuarioInteresado: user.id
            }
             await Intereses.create(nuevoInteres); 
             await notificarInteres(nuevoInteres);
             req.session.mensaje = "Hemos notificado correctamente tu interés";
            res.redirect(`/imagen/${req.body.idImagen}`);
   } catch (error) {
    console.error(error);
    res.status(500).json({error: error.message});
   }
})

router.get("/notificacion/:id", async (req, res) => {
    try {
        const notificacion = await Notificacion.findByPk(req.params.id);

        if (!notificacion) {
            return res.redirect("/");
        }

        await notificacion.update({
            leido: true
        });

        res.redirect(notificacion.URL);

    } catch (error) {
        console.error(error);
        res.status(500).json({error: error.message});
    }
});

router.get('/notificaciones',async  (req , res)=>{
      try {
        const user = req.session.user;
        if(!user){
            res.redirect('/');
        }
         const noLeidas = await  Notificacion.findAll({where:{idUsuarioReceptor: user.id, leido:false},
        include:[
            {
                model: Usuario,
                as: 'emisor'
            }
        ],
        limit:10,
        order:[['fecha', "DESC" ]]
                });
        const leidas = await  Notificacion.findAll({where:{idUsuarioReceptor: user.id, leido:true},
        include:[
            {
                model: Usuario,
                as: 'emisor'
            }
        ],
        limit:10,
        order:[['fecha', "DESC" ]]        });
         res.render('Notificacion/listaNotificaciones', {leidas, noLeidas});
      } catch (error) {
        res.status(500).json({error: error.message});
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