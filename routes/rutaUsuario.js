import { Router } from 'express';
import { Usuario } from '../models/usuario.js';
import { Imagen } from '../models/imagen.js';
import {Etiqueta} from '../models/etiqueta.js';
import { Publicacion } from '../models/publicacion.js';
import { Voto } from '../models/voto.js';
import { Notificacion } from '../models/notificacion.js';
import {Sigue } from '../models/Sigue.js';
import bcrypt from "bcrypt";
import { sequelizeFotaza } from '../models/conexion.js';
import { and } from 'sequelize';
import { Coleccion } from '../models/coleccion.js';
const router = Router();

router.post("/registro", async (req, res) => {
    let message;
    let datos = req.body;
  try {
    const t = await sequelizeFotaza.transaction();
    console.log(req.body);
    const password = req.body.password;
    const  nick = req.body.nick;
    const mail = req.body.mail; 
    await validarMail(mail);// para evitar usuarios duplicados
    await validarNick(nick);//para evitar duplicados
    await validarClave(password);
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

    console.log("Este es el nuevo usuario:", nuevoUsuario,{transaction:t});

    await Coleccion.create({
        nombre:"Favoritos",
        idUsuario:usuario.id
    },{transaction:t});

    await t.commit();
    res.redirect('/ingreso?ok=1');
  } catch (error) {

    await t.rollback();
    console.error( error);
    return res.render('Home/registro', {mensaje: error.message, datos});
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
async function validarMail(m){
    const yaExiste = await  Usuario.findOne({where:{mail:m}});
      if(yaExiste){
        throw  new Error("El mail ya existe en esta plataforma");  
        return error
      }
    return true;  
}
async function validarNick(n){
    const yaExiste = await  Usuario.findOne({where:{nick:n}});
      if(yaExiste){
        throw  new Error('El nick ya existe en esta plataforma');  
        return error;
      }
    return true;  
}

router.post('/login', async (req, res) => {
  try {
    const mensaje = req.session.mensaje;
    const usuario = await Usuario.findOne({ where: { mail: req.body.mail,} });
   if(!usuario){
     return res.render('Home/ingreso', {mensaje: "No encontramos tu usuario."});
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
    const notif = await Notificacion.findAll({where:{idUsuarioReceptor:user.id, leido: false }});
    const cantNotif = await Notificacion.count({where:{idUsuarioReceptor:user.id, leido: false }, order: [["createdAt", "DESC"]],
    limit: 10});
    const etiquetas = await Etiqueta.findAll();
      const imagenes = await Imagen.findAll({
    include: [
        {
            model: Publicacion,
            where: {
                bajada: false
            }
        }
    ],
    attributes: {
        include: [
            [
                sequelizeFotaza.literal(`(
                    SELECT COUNT(*)
                    FROM votos v
                    WHERE v.idImagen = Imagen.id
                )`),
                "cantidadVotos"
            ]
        ]
    },
    order: [[sequelizeFotaza.literal("cantidadVotos"), "DESC"]]
});
    res.render('Usuario/verTodos', {user, imagenes, etiquetas, notif, cantNotif})
   } catch (error) {
    console.log(error);
    res.status(500).send("Error al cargar la página");
   }
});

router.get('/nuevaPublicacion', async (req, res) => {
    try {

        const  user =req.session.user;
        const usuario = Usuario.findByPk(user.id);
        // validar sesión
        if (!user) {
            return res.redirect('/');
        }

        res.render('Usuario/nuevaPublicacion', { user , usuario});

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
    const sigo = await Sigue.count({where:{idSeguidor: user.id}});
    const meSiguen = await Sigue.count({where: {idSeguido: user.id}});
    const u = await  Usuario.count(user.id);
    res.render('Usuario/miperfil', {u, sigo,meSiguen});
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
router.get('/modoValidador', async (req, res) => {
    try {
        const user = req.session.user;
        if (!user) {
            return res.redirect('/');
        }
        const usuario = await Usuario.findByPk(user.id);
        if (usuario.tipoUsuario === 'Validador') {
            return res.render('Usuario/modoValidador');
        }
       return res.status(403).send('No tiene permisos para acceder a este espacio.');

    } catch (error) {
        console.error(error);
        return res.status(500).send('Error interno del servidor.');
    }
});

router.get('/verPerfil/:id', async (req, res) => {

  try {
    const user = req.session.user;
    if (!user) {
      return res.redirect('/');
    }

    const usuarioValidado = await Usuario.findByPk(user.id);
    const u = await Usuario.findByPk(req.params.id);
    const publicacionesBajadas = await Publicacion.count({ where: { bajada: true, idUsuario: req.params.id } });
    res.render('Usuario/verPerfil', { u, publicacionesBajadas, usuarioValidado });
  } catch (error) {
    console.log(error)
    res.status(500).send(error);
  }

});
router.get('/retornarAModoComun', (req , res)=>{
   try {
    const user = req.session.user;
    if(!user){
      res.redirect('/');
    }
    res.redirect('/HomeUsuario');
   } catch (error) {
     console.log(error)
    res.status(500).send(error);
   }
  })
export default router;