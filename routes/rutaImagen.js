import { Router } from 'express';
import { Usuario } from '../models/usuario.js';
import { Imagen } from '../models/imagen.js';
import {Voto} from '../models/voto.js';
import{Comenta} from '../models/comenta.js';
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
            res.redirect(`/todasLasPublicaciones?activeId=${req.body.id}`);
        } catch (error) {
           console.log(error);
           res.status(500).send('Error al procesar el comentario');
        }
        
});
export default router;