import { Router } from 'express';
import { Imagen } from '../models/imagen.js';
import { Denuncia } from '../models/denuncia.js';
import { Usuario } from '../models/usuario.js';
import { Publicacion } from '../models/publicacion.js';

const router = Router();

router.get('/imagenesDenunciadas', async (req, res) => {
    try {
         const user = req.session.user;
         if (!user) {
            return res.redirect('/');
        }

        const usuario =  await Usuario.findByPk(user.id);

        const imagenes = await Imagen.findAll({
            include: [{
                model: Denuncia
            }]
        });

        const imagenesDenunciadas = imagenes.filter(
            imagen => imagen.Denuncia.length > 0
        );

        res.render('Denuncia/listarImagenesDenunciadas', {
            imagenesDenunciadas, user
        });

    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});
router.get('/imagenesDenunciadasMasDe3', async (req, res) => {
    try {
         const user = req.session.user;
         if (!user) {
            return res.redirect('/');
        }

        const usuario =  await Usuario.findByPk(user.id);

        const imagenes = await Imagen.findAll({
            include: [{
                model: Denuncia
            }]
        });

        const imagenesDenunciadas = imagenes.filter(
            imagen => imagen.Denuncia.length > 3
        );

        res.render('Denuncia/listarImagenesDenunciadas', {
            imagenesDenunciadas, user
        });

    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});
router.get('/publicacionesBajadas', async (req, res) => {
    try {
         const user = req.session.user;
         if (!user) {
            return res.redirect('/');
        }
        const pBajadas = await  Publicacion.findAll({where: {bajada:true},
         include: [{
                model: Usuario
            }]}
            
        );
        res.render('Denuncia/listarPublicacionesBajadas', { pBajadas, user});

    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});
router.get('/darDeBaja/:id', async (req, res) => {
    try {
        const user = req.session.id;
        const usuario = await Usuario.findByPk(user.id);
        const publicacion = await Publicacion.findByPk(req.params.id);
        if (usuario.tipoUsuario == 'Validador') {
            await Publicacion.update({ bajada: true }, { where: { id: req.params.id } });
            const cantidadBajadasDelUsuario = await Publicacion.count({ where: { idUsuario: publicacion.idUsuario, bajada: true } });
            if(cantidadBajadasDelUsuario > 2){
                await Usuario.update({anulado:true}, {where:{ id: publicacion.idUsuario}});
            }
            req.session.mensaje= "La publicacion han sido dados de baja";
            res.redirect("back");
        }
        req.session.mensaje= "No tienes permisos para dar de baja";
        res.redirect("back");
           
    } catch (error) {
             console.log(error);
            res.status(500).send(error);
    }
})
router.get('/usuariosDesactivados', async (req, res) => {
    try {
        const user = req.session.user;

        if (!user) {
            return res.redirect('/');
        }
        const usuario = await Usuario.findByPk(user.id);
        if (usuario.tipoUsuario !== 'Validador') {
            req.session.mensaje = "No tienes permisos para ver esta información.";
            return res.redirect('/HomeUsuario');
        }

        const usuariosAnulados = await Usuario.findAll({
            where: { anulado: true }
        });

        res.render('Denuncia/usuariosAnulados', { usuariosAnulados, user });

    } catch (error) {
          console.log(error);
            res.status(500).send(error);
    }
})
export default router;