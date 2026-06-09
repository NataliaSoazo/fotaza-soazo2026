import { Router } from 'express';
import {Sigue } from '../models/sigue.js';
import { Model } from 'sequelize';
import { Usuario } from '../models/usuario.js';

const router = Router();

router.get('/seguir/:id/:idImagen', async(req, res)=>{
  try {
    const user = req.session.user;
    if(!user){
        return res.redirect('/');
    }
    const idSeguir = req.params.id;
    const existe= await Sigue.findOne({where:{idSeguidor:user.id, idSeguido:idSeguir}});
    if(!existe){
        const datos= {
            idSeguidor: user.id,
            idSeguido: idSeguir,
            fecha: new Date()
        }
    await Sigue.create(datos);
     res.redirect(`/imagen/${req.params.idImagen}?mensaje:"Ahora sigues a este usuario`);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.get('/dejar-seguir/:idUsuario/:idImagen',async(req ,res)=>{
    try {
        const user = req.session.user;
        if(!user){
            return res.redirect('/');
        }
        await Sigue.destroy({where:{idSeguido:req.params.idUsuario, idSeguidor:user.id}});
        res.redirect(`/imagen/${req.params.idImagen}?mensaje:"Dejaste de seguir a este usuario`);
    } catch (error) {
        console.log(error);
    res.status(500).send(error);
    }
});

router.get('/meSiguen', async( req, res)=>{
    try {
        const user = req.session.user;
    if(!user){
        return res.redirect('/');
    }
    const meSiguen = await Sigue.findAll({
        where:{ idSeguido: user.id},
        include:[
            {
                model: Usuario,
                as: 'Seguidor'
            }
        ]
        });


    res.render('Usuario/meSiguen', {meSiguen});

    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});




router.get('/usuariosQueSigo', async( req, res)=>{
    try {
        const user = req.session.user;
        if(!user){
        return res.redirect('/');
      }
    
     const yoSigo=  await Sigue.findAll({
         where:{ idSeguidor: user.id},
        include: [
            {
                model: Usuario,
                as:'Seguido'
            }
        ]}
    );
    
    console.log(JSON.stringify(yoSigo, null, 2));
    res.render('Usuario/yoSigo', {yoSigo});
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});
export default router;