import { Publicacion } from './publicacion.js';
import { Etiqueta } from './etiqueta.js';
import { EtiquetaPublicacion } from './etiquetaPublicacion.js';
import {Usuario} from './usuario.js';
import{Imagen} from './imagen.js';
import {Voto} from './voto.js';
import {Denuncia} from './denuncia.js';
import{Comenta} from './comenta.js';

// un usuario hace muchas publicaciones
Usuario.hasMany(Publicacion,{
    foreignKey:'idUsuario'
});
// una Publicacion pertenece a un usuario
Publicacion.belongsTo(Usuario,{
    foreignKey:'idUsuario'
});

//Una Publicacion puede tener muchas imagenes
Publicacion.hasMany(Imagen,{
 foreignKey: 'idPublicacion'
});
//Una o muchas imagenes  pertenecen  a una Publicacion
Imagen.belongsTo(Publicacion,{
    foreignKey: 'idPublicacion'
});

//etiqueta y publicacion tienen una relacion de muchoa muchos
Publicacion.hasMany(EtiquetaPublicacion,{
    foreignKey:'idPublicacion'
});

Etiqueta.hasMany(EtiquetaPublicacion,{
    foreignKey:'idEtiqueta'
});
EtiquetaPublicacion.belongsTo(Etiqueta,{
    foreignKey: 'idEtiqueta'
});
EtiquetaPublicacion.belongsTo(Publicacion,{
    foreignKey: 'idPublicacion'
}); 
//un usuario puede hacer 0 o muchos votos
Usuario.hasMany(Voto,{
    foreignKey:'idUsuario'
});
Voto.belongsTo(Usuario,{
    foreignKey:'idUsuario'
});
// un usuario puede hacer 0 ó muchas denuncias
Usuario.hasMany(Denuncia,{
    foreignKey:'idUsuario'
});
Denuncia.belongsTo(Usuario,{
    foreignKey:'idUsuario'
});

// un usuario puede hacer 0 ó muchos votos
Imagen.hasMany(Voto,{
    foreignKey:'idImagen'
});
Voto.belongsTo(Imagen,{
    foreignKey:'idImagen'
});
//asociacon de usuarios con comenta
Imagen.hasMany(Comenta,{
    foreignKey:'idImagen',
    otherKeys: 'idUsuario'
});

Comenta.belongsTo(Imagen,{
    foreignKey:'idImagen'
});
//asociacon de usuarios con comenta
Comenta.hasMany(Imagen,{
    foreignKey:'idImagen'
});

Imagen.belongsTo(Comenta,{
    foreignKey:'idImagen'
});