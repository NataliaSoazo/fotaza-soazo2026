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
        const operacion = await secuelizeFotaza.transaction();
        let  guardarPorLasDudas = [];
    try {
        
        const user = req.session.user;

        if(!user){
            return res.redirect('/');
        }
        let imagenesGuardadas = [];
        //Crear publicación
        const nuevaPublicacion = {
            fecha: new Date(),
            titulo: req.body.titulo,
            descripcion: req.body.descripcion,
            copyright: req.body.copyright === 'on',
            idUsuario: user.id
        };

        const publicacion = await Publicacion.create(nuevaPublicacion, { transaction: operacion });
        const etiquetas = req.body.etiqueta;
         await revisarEtiquetas(etiquetas, publicacion, operacion);

        const imagenes = req.files;

        for (const file of imagenes) {
             const rutaImagen = guardarImagen(file);
             guardarPorLasDudas.push(rutaImagen);
            if (nuevaPublicacion.copyright) {
                await aplicarMarcaDeAgua(rutaImagen,req.body.frase.toUpperCase() || 'FS');
            }
            const nuevaImagen = {
                urlImagen: rutaImagen,
                licencia: nuevaPublicacion.copyright? 'Copyright': 'Default',
                idUsuario: user.id,
                idPublicacion: publicacion.id
            };

         const imagen =    await Imagen.create(nuevaImagen ,{ transaction: operacion });
         imagenesGuardadas.push(imagen);
    }
            await operacion.commit();
            res.render('Usuario/publicacionPosteada', {  publicacion, imagenesGuardadas });

    } catch (error) {
        await operacion.rollback();
        await eliminarImagenes(guardarPorLasDudas);
        console.log(error);
        res.status(400).send("Error");
    }
});

router.get('/verSusPubl/:id', async(req, res)=>{
    try {
        const user = req.session.user;
        if(!user){
            return res.redirect('/');
        }
     const pdUsuario = await Publicacion.findAll({where:{idUsuario:req.params.id}});
        res.render('Usuario/publXUsuario', {pdUsuario});
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.get('/verTodo', (req, res)=>{
    res.redirect('/HomeUsuario');
})
function guardarImagen(file) {

    const newPath = `./uploads/${file.originalname + new Date()}`;

    fs.renameSync(file.path, newPath);

    return newPath;
}

async function revisarEtiquetas(tags, publ, operacion){
    const etiquetas = tags
            .split(",")
            .map(e => e.trim().toLowerCase());

        for (const nombreEtiqueta of etiquetas) {

            // Buscar etiqueta
            let etiqueta = await Etiqueta.findOne({where: {nombre: nombreEtiqueta}});

            if (!etiqueta) {
                etiqueta = await Etiqueta.create({nombre: nombreEtiqueta}, { transaction: operacion });
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
            fill: rgba(204, 238, 9, 0.15);
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

    //eliminar fotos en upload si la publicacion catchea un rollback
  async function  eliminarImagenes(imagenesEnUpload){
     for (const ruta of imagenesEnUpload){
        try{
            await fs.unlink(ruta);
        }catch(error){
            console.log(`La publicacion no se pudo crear, la imagen no se pudo eliminar`);
        }
    }
 }
export default routfor (ruta in )