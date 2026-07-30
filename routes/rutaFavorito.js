import { Router } from 'express';
import { Coleccion } from '../models/coleccion.js';
import { Favorito } from '../models/favorito.js';
import { Usuario } from '../models/usuario.js';
import { Publicacion } from '../models/publicacion.js';
import { Imagen } from '../models/imagen.js';

const router = Router();

router.get('/misFavoritos', async(req , res)=>{
    const  user =req.session.user;
        const usuario = await Usuario.findByPk(user.id);
        if (!user) {
            return res.redirect('/');
        }
    const favoritos = await Favorito.findAll({

    include:[
        {
            model:Publicacion,
            include:[
                {
                    model:Imagen
                }
            ]
        }
    ], where:{ idColeccion:idFavoritos}

});
const colecciones = await Coleccion.findAll({where:{idUsuario:user.id}});

res.render("Usuario/favoritos",{favoritos,colecciones,user});})

router.get(`/favoritos/agregar/:id`, async (req, res) => {
    try {
        const imagen = await Imagen.findByPk(req.params.id);
        const coleccion = await Coleccion.findOne({where:{ nombre: 'Favorito'}});
        const existe = await Favorito.findOne({
            where: {
                idColeccion: coleccion.id,
                idPublicacion: imagen.idPublicacion
            }
        });

        if (existe) {
            req.session.mensaje = "La publicación ya está en tus favoritos.";
            return res.redirect(`/imagen/${req.params.id}`);
        }
        const nuevoFavorito={
            idColeccion: coleccion.id,
            idPublicacion: imagen.idPublicacion
            }
        await Favorito.create(nuevoFavorito);
        req.session.mensaje = "La publicación se agregí a tus favoritos.";
        return res.redirect(`/imagen/${req.params.id}`);
    } catch (error) {
        if (error.name === "SequelizeUniqueConstraintError") {
        return res.redirect("back");
    }
}
})

export default router;