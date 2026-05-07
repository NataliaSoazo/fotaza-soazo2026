
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

// 🔥 Esto reemplaza __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
//app.use(express.static('vistas'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'vistas', 'Home', 'inicio.html'));
});
app.get('/registro', (req, res) => {
  res.sendFile(path.join(__dirname, 'vistas', 'Home', 'registro.html'));
});
app.get('/ingreso', (req, res) => {
  res.sendFile(path.join(__dirname, 'vistas', 'Home', 'ingreso.html'));
});
app.listen(3030, () => { console.log("corriendo") });