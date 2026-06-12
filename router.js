import rutaUsuario from './routes/rutaUsuario.js';
import rutaPublicacion from './routes/rutaPublicacion.js';
import rutaImagen from './routes/rutaImagen.js';
import rutaSigue from './routes/rutaSigue.js';
import express from 'express';
import session from 'express-session';
import path from 'path';
import { fileURLToPath } from 'url';
import {Voto} from './models/voto.js';
import {Comenta} from './models/comenta.js';
import {Denuncia} from './models/denuncia.js';
import { Etiqueta } from './models/etiqueta.js';
import { Publicacion } from './models/publicacion.js';
import { EtiquetaPublicacion } from './models/etiquetaPublicacion.js';
import {Sigue} from './models/sigue.js';
import './models/relaciones.js';
import { Imagen } from './models/imagen.js';
import { sequelizeFotaza } from './models/conexion.js';
const app = express();
app.set('view engine', 'pug');
app.set('views', './vistas');
app.use(session({
  secret: 'mi_secreto',
  resave: false,
  saveUninitialized: false
}));
// __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // importante que esté antes de las rutas internas

// Archivos públicos
app.use(express.static('public'));
// Rutas
app.use(rutaUsuario);
app.use(rutaPublicacion);
app.use(rutaImagen);
app.use(rutaSigue);
app.use('/uploads', express.static('uploads'));
// Vistas
app.get('/', async (req, res) => {
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
    where: { licencia: 'Default' },
    attributes: {
        include: [
            [
                sequelizeFotaza.literal(`(
                    SELECT COUNT(*)
                    FROM votos v
                    WHERE v.idImagen = Imagen.id
                )`),
                'cantidadVotos'
            ]
        ]
    },
    order: [[sequelizeFotaza.literal('cantidadVotos'), 'DESC']]
    });
    res.render('Home/inicio',{etiquetas, imagenes});
});

app.get('/registro', (req, res) => {
  res.render('Home/registro');
});

app.get('/ingreso', (req, res) => {
 const ok = req.query.ok;
  res.render('Home/ingreso', {ok});
});


app.listen(3000, () => {
  console.log("corriendo");
});