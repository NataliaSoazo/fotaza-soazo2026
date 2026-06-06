import { Router } from 'express';
import { Usuario } from '../models/usuario.js';
import { Imagen } from '../models/imagen.js';
import {Voto} from '../models/voto.js';
import{Comenta} from '../models/comenta.js';
import { Etiqueta } from '../models/etiqueta.js';
import { EtiquetaPublicacion } from '../models/etiquetaPublicacion.js';
import { Model } from 'sequelize';
import { Publicacion } from '../models/publicacion.js';



const router = Router();


router.post('/votar-imagen', async (req, res) => {
    try {
        const user = req.session.user;
        if (!user) {
           return res.redirect('/');
        }
        const existeVoto = await Voto.findOne({where: {idImagen: req.body.idVotada, idUsuario:user.id}})
            if (existeVoto){
               return res.send("Ya  votaste esta imagen");
            }
            const datos = {
                fecha: new Date(),
                idImagen: req.body.idVotada,
                estrellas: req.body.voto,
                idUsuario: user.id,
            }
            const voto = await Voto.create(datos);
           // el acvivedId permite que se vuelva cargar la imagen que se comentó
            res.redirect(`/todasLasPublicaciones?activeId=${req.body.id}`);
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
        const user = req.session.user;
        if(!user){
            return res.redirect('/');
        }
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
        const promedioVotos =
          cantVotantes > 0
        ? sumaDeVotos / cantVotantes
        : 0;
        res.render('Imagen/imagenIndividual', {imagen, comentarios, promedioVotos,cantVotantes, user, usuario });
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
export default router;