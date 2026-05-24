import rutaUsuario from './routes/rutaUsuario.js';
import rutaPublicacion from './routes/rutaPublicacion.js';
import express from 'express';
import session from 'express-session';
import path from 'path';
import { fileURLToPath } from 'url';
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
// Vistas
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'vistas', 'Home', 'inicio.html'));
});

app.get('/registro', (req, res) => {
  res.render('Home/registro');
});

app.get('/ingreso', (req, res) => {
 const ok = req.query.ok;
  res.render('Home/ingreso', {ok});
});


app.listen(3030, () => {
  console.log("corriendo");
});