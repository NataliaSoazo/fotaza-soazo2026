import { Router } from 'express';
import { Usuario } from '../models/usuario.js';
import { Imagen } from '../models/imagen.js';
import {Etiqueta} from '../models/etiqueta.js';
import { Publicacion } from '../models/publicacion.js';
import { Voto } from '../models/voto.js';
import bcrypt from "bcrypt";
import { sequelizeFotaza } from '../models/conexion.js';
const router = Router();

router.post("/registro", async (req, res) => {
  try {
    console.log(req.body);
    let password = req.body.password;
    validarClave(password);
    const hash = await encriptarClave(password);
    const nuevoUsuario = {
      nombre: req.body.nombre.toUpperCase(),
      apellido: req.body.apellido.toUpperCase(),
      nick: req.body.nick,
      password: hash,
      tipoUsuario: "Usuario",
      telefono: req.body.telefono,
      mail: req.body.mail,
      urlAvatar: "nadaporAhora",
      anulado:false,
    };

    console.log("Este es el nuevo usuario:", nuevoUsuario);
    await Usuario.create(nuevoUsuario);
    res.redirect('/ingreso?ok=1');
  } catch (error) {
    console.error('Error al cargar usuario:', error);
    res.status(500).send('Error al cargar usuario'); // Responde con un error
  }
});

function validarClave(clave) {
  const regexMayuscula = /[A-Z]/;  // Expresión regular para una letra mayúscula
  const regexEspecial = /[!@#$%^&*(),.?":{}|<>]/;  // Expresión regular para un carácter especial

  if (clave.length < 8) {
    throw new Error('La contraseña debe tener al menos 8 caracteres.');
  }
  if (!regexMayuscula.test(clave)) {
    throw new Error('La contraseña debe contener al menos una letra mayúscula.');
  }
  if (!regexEspecial.test(clave)) {
    throw new Error('La contraseña debe contener al menos un carácter especial.');
  }
  return true;  // Si pasa todas las validaciones
}

// Función para encriptar la contraseña
async function encriptarClave(clave) {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(clave, salt);
  return hash;  // Devuelve la contraseña encriptada
}

router.post('/login', async (req, res) => {
  try {
    const mensaje = req.session.mensaje;
    const usuario = await Usuario.findOne({ where: { mail: req.body.mail,} });
   if(!usuario){
     return res.render('Home/ingreso', {mensaje: "Error al loguearte."});
   }
    const validPassword = await bcrypt.compare(req.body.password, usuario.password);
    console.log(validPassword);
    if (validPassword) {
      req.session.user = {
        id: usuario.id,
        username: usuario.nombre,
        usermail: usuario.mail,
        role: usuario.tipoUsuario, // Asignamos un rol
      }
      req.session.save();
      
      return res.redirect('/HomeUsuario');
    }else{ 
      return res.render('Home/ingreso', {mensaje: "Tu usuario o contraseña no existen."});
    }   
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.get('/HomeUsuario',async(req , res)=>{
   try {
      const user = req.session.user;
      if(!user){
        return res.redirect('/');
      }
    const etiquetas = await Etiqueta.findAll();
    const imagenes = await Imagen.findAll({

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
    res.render('Usuario/verTodos', {user, imagenes, etiquetas})
   } catch (error) {
    console.log(error);
    res.status(500).send("Error al cargar la página");
   }
});

router.get('/nuevaPublicacion', async (req, res) => {
    try {

        const  user =req.session.user;

        // validar sesión
        if (!user) {
            return res.redirect('/');
        }

        res.render('Usuario/nuevaPublicacion', { user });

    } catch (error) {

        console.log(error);

        res.status(500).send("Error al cargar la página");

    }

});

router.get('/todasLasPublicaciones', async(req,res)=>{
  const user = req.session.user;
  try {
    if(user){
      const imagenes = await Imagen.findAll({attributes: ['id', 'urlImagen']});
      console.log(imagenes);
      res.render('Usuario/verTodos', {user, imagenes});
    }
  } catch (error) {
    res.send('Error al solicitar la página');
  }
})

router.get('/miPerfil', async(req ,res)=>{
  try {
    const user = req.session.user;
      if (!user){
    return res.redirect('/');
      }
    const u = await  Usuario.findByPk(user.id);
    res.render('Usuario/miperfil', {u});
  } catch (error) {
    console.log(error)
    res.status(500).send(error);
  }

});
router.get('/salir', (req, res)=>{
  try {
    req.session.destroy();
    res.redirect('/');
  } catch (error) {
    res.status(500).send('No se pudo cerrar la sesión del usuario;', error)
  }
});
export default router;