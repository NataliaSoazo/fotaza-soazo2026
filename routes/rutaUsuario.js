import { Router } from 'express';
import { Usuario } from '../models/usuario.js';
import bcrypt from "bcrypt";
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
  const datos = {
    mail: req.body.mail,
    password: req.body.password
  };
  const usuario = await Usuario.findOne({ where: { mail: datos.mail } });

  if (usuario) {
    const validPassword = await bcrypt.compare(datos.password, usuario.password);
    console.log(validPassword);
    if (validPassword) {
      req.session.user = {
        id: usuario.id,
        username: usuario.nombre,
        usermail: usuario.mail,
        role: usuario.tipoUsuario, // Asignamos un rol
      }
      const user = await req.session.user;
      req.session.save();
      if (user.role == "Usuario") {
          res.render('Usuario/HomeUsuario', { user });
      } else {
        res.render('Home/Ingreso', { user });
      }
    } else {
      res.status(400).json({ error: "Password Inválido" });
      res.render('Home/principal')
    }
  } else {
    res.status(401).json({ error: "El usuario no existe" });
    res.render('Home/ingreso');
  }
});

router.get('/nuevaPublicacion', (req, res) => {

    try {

        const user = req.session.user;

        // validar sesión
        if (!user) {
            return res.redirect('Home/registro');
        }

        res.render('Usuario/nuevaPublicacion', { user });

    } catch (error) {

        console.log(error);

        res.status(500).send("Error al cargar la página");

    }

});



export default router;