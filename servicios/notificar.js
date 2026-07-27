import {Notificacion} from '../models/notificacion.js';
import {Imagen} from '../models/imagen.js';

export async function  notificarVoto(voto){
    try {
        /* fecha: new Date(),
    idImagen: req.body.idVotada,
    estrellas: req.body.voto,
    idUsuario: user.id,*/
    //Buscando el receptor
   const imagen = await Imagen.findByPk(voto.idImagen, {attributes:
    ['idUsuario']});
    const datos = {
        fecha: voto.fecha,
        idUsuarioReceptor: imagen.idUsuario,
        tipo: 'Voto',
        mensaje: 'Haz recibido una nueva valoración',
        leido: false,
        URL: `/imagen/${voto.idImagen}`,
        idUsuarioEmisor: voto.idUsuario
    }
     await Notificacion.create(datos);
    return true;
    } catch (error) {
        console.log(error);
        throw new Error("No pudimos notificar tu acción");
        console.log(error);
        
    }

}

export async function notificarComentario(comentario){
    try {
        /*fecha : new Date(),
    idImagen: req.body.idComentario,
    texto : req.body.comentario,
    idUsuario: user.id,*/
    const imagen = await Imagen.findByPk(comentario.idImagen, {attributes:
    ['idUsuario']});
    const datos = {
        fecha: comentario.fecha,
        idUsuarioReceptor: imagen.idUsuario,
        tipo: 'Comentario',
        mensaje: 'Haz recibido un nuevo comentario',
        leido: false,
        URL: `/imagen/${comentario.idImagen}`,
        idUsuarioEmisor: comentario.idUsuario
    }
     await Notificacion.create(datos);
    return  true;
    } catch (error) {
        console.log(error);
         throw new Error("No pudimos notificar tu acción");
         
    }
}

export async function notificarSeguimiento(d){
    try {
            /* idSeguidor: user.id,
            idSeguido: idSeguir,
            fecha: new Date()*/
        const datos = {
        fecha: d.fecha,
        idUsuarioReceptor: d.idSeguido,
        tipo: 'Seguimiento',
        mensaje:  ' Ha comenzado a seguirte ',
        leido: false,
        URL:`/verPerfil${d.idSeguidor}`,
        idUsuarioEmisor: d.idSeguidor
        }
        await Notificacion.create(datos);
    } catch (error) {
        console.log(error);
        throw new Error("No pudimos notificar tu acción");
        
        
    }
}
export async function notificarInteres(nuevoInteres){
 /*   {
        fecha: new Date(),
        idImagen: req.body.idDeInteres,
        usuarioInteresado: user.id
            }*/
    try {
        const imagen = await Imagen.findByPk(nuevoInteres.idImagen, {attributes:
        ['idUsuario']});
        const datos = {
        fecha: nuevoInteres.fecha,
        idUsuarioReceptor: imagen.idUsuario,
        tipo: 'Me Interesa',
        mensaje:  'Hay un nuevo interesado por adquirir tu imagen ',
        leido: false,
        URL: `/imagen/${nuevoInteres.idImagen}`,
        idUsuarioEmisor: nuevoInteres.usuarioInteresado
        }
        await Notificacion.create(datos);
    } catch (error) {
        console.log(error);
        throw new Error("No pudimos notificar tu acción");
        
    }

}