import { Router } from 'express';
import { Publicacion } from '../models/publicacion.js';
import { Imagen } from '../models/imagen.js';
import {Etiqueta} from '../models/etiqueta.js';
import {EtiquetaPublicacion} from '../models/etiquetaPublicacion.js';
import multer from 'multer';
import fs from 'node:fs';
import { DatabaseError, DATE } from 'sequelize';
import sharp from 'sharp';// para crear marcas de agua

const upload = multer({ dest: 'uploads/' });

const router = Router();

router.post('/nuevaPublicacion', upload.array('img', 10), async (req, res) => {

    try {
        const user = req.session.user;
        //Crear publicación
        const nuevaPublicacion = {
            fecha: new Date(),
            titulo: req.body.titulo,
            descripcion: req.body.descripcion,
            copyright: req.body.copyright === 'on',
            idUsuario: user.id
        };

        const publicacion = await Publicacion.create(nuevaPublicacion);
        const etiquetas = req.body.etiqueta;
        revisarEtiquetas(etiquetas, publicacion);

        const imagenes = req.files;

        for (const file of imagenes) {

            const rutaImagen = guardarImagen(file);

            if (nuevaPublicacion.copyright) {
                await aplicarMarcaDeAgua(rutaImagen,req.body.frase || 'FS'
                );
            }

            const nuevaImagen = {
                urlImagen: rutaImagen,
                licencia: nuevaPublicacion.copyright
                    ? 'Copyright'
                    : 'Default',
                idUsuario: user.id,
                idPublicacion: publicacion.id
            };

            await Imagen.create(nuevaImagen);
    }
            
            res.render('Usuario/Homeusuario', { user });

    } catch (error) {

        console.log(error);
        res.status(400).send("Error");
    }
});

function guardarImagen(file) {

    const newPath = `./uploads/${file.originalname}`;

    fs.renameSync(file.path, newPath);

    return newPath;
}

async function revisarEtiquetas(tags, publ){
    const etiquetas = tags
            .split(",")
            .map(e => e.trim().toLowerCase());

        for (const nombreEtiqueta of etiquetas) {

            // Buscar etiqueta
            let etiqueta = await Etiqueta.findOne({where: {nombre: nombreEtiqueta}});

            if (!etiqueta) {
                etiqueta = await Etiqueta.create({nombre: nombreEtiqueta});
            }
            await EtiquetaPublicacion.create({
                idEtiqueta: etiqueta.id,
                idPublicacion: publ.id

            });

        }

}
async function aplicarMarcaDeAgua(rutaImagen, texto) {
        const metadata = await sharp(rutaImagen).metadata();
        
        const ancho = metadata.width;       
        const alto = metadata.height;
    const svg = `
<svg width="${ancho}" height="${alto}">
    <style>
        .titulo {
            fill: rgba(255,255,255,0.15);
            font-size: ${Math.floor(ancho / 4)}px;
            font-weight: bold;
        }
    </style>

    <text
        x="50%"
        y="50%"
        text-anchor="middle"
        dominant-baseline="middle"
        transform="rotate(-45 ${ancho/2} ${alto/2})"
        class="titulo">
        ${texto}
    </text>
</svg>
`;

    const bufferSVG = Buffer.from(svg);

    await sharp(rutaImagen)
        .composite([
            {
                input: bufferSVG,
                gravity: 'center'
            }
        ])
        .toFile(rutaImagen + '.tmp');

    fs.unlinkSync(rutaImagen);
    fs.renameSync(rutaImagen + '.tmp', rutaImagen);
}

export default router;