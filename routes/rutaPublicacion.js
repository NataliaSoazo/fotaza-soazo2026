import { Router } from 'express';
import { Publicacion } from '../models/publicacion.js';
import { Imagen } from '../models/imagen.js';

import multer from 'multer';
import fs from 'node:fs';
import { DATE } from 'sequelize';

const upload = multer({ dest: 'uploads/' });

const router = Router();

router.post( '/nuevaPublicacion',upload.array('img', 10),async (req, res) => {

        try {
            const user = req.session.user;
            //Crear publicación
            const nuevaPublicacion = {
                fecha: new Date(),
                titulo: req.body.titulo,
                descripcion: req.body.descripcion,
                idUsuario: user.id
            };

            const publicacion = await Publicacion.create(nuevaPublicacion);

            
            const imagenes = req.files;//  Procesar imágenes

            for (const file of imagenes) {
                const rutaImagen = guardarImagen(file);
                // crear imagen en bd
                const nuevaImagen = {
                    urlImagen: rutaImagen,
                    licencia: req.body.licencia || 'default',
                    marcaDeAgua: true,
                    idUsuario: user.id,
                    idPublicacion: publicacion.id
                };

                await Imagen.create(nuevaImagen);
            }

            res.send("Publicación creada correctamente", {user});

        } catch (error) {

            console.log(error);
            res.status(500).send("Error");

        }

    }
);

function guardarImagen(file) {

    const newPath = `./uploads/${file.originalname}`;

    fs.renameSync(file.path, newPath);

    return newPath;
}

export default router;