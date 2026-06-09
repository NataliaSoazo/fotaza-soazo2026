import { Publicacion } from './publicacion.js';
import { Etiqueta } from './etiqueta.js';
import { EtiquetaPublicacion } from './etiquetaPublicacion.js';
import { Usuario } from './usuario.js';
import { Imagen } from './imagen.js';
import { Voto } from './voto.js';
import { Denuncia } from './denuncia.js';
import { Comenta } from './comenta.js';
import { Sigue } from './sigue.js';

Usuario.hasMany(Publicacion,{
 foreignKey:'idUsuario'
});

Publicacion.belongsTo(Usuario,{
 foreignKey:'idUsuario'
});


Publicacion.hasMany(Imagen,{
foreignKey:'idPublicacion'
});

Imagen.belongsTo(Publicacion,{
foreignKey:'idPublicacion'
});

Publicacion.hasMany(EtiquetaPublicacion,{
foreignKey:'idPublicacion'
});

Etiqueta.hasMany(EtiquetaPublicacion,{
foreignKey:'idEtiqueta'
});

EtiquetaPublicacion.belongsTo(Publicacion,{
foreignKey:'idPublicacion'
});

EtiquetaPublicacion.belongsTo(Etiqueta,{
 foreignKey:'idEtiqueta'
});


Usuario.hasMany(Voto,{
foreignKey:'idUsuario'
});

Voto.belongsTo(Usuario,{
foreignKey:'idUsuario'
});

Imagen.hasMany(Voto,{
foreignKey:'idImagen'
});

Voto.belongsTo(Imagen,{
foreignKey:'idImagen'
});
Usuario.hasMany(Denuncia,{
foreignKey:'idUsuario'
});

Denuncia.belongsTo(Usuario,{
foreignKey:'idUsuario'
});

Imagen.hasMany(Denuncia,{
foreignKey:'idImagen'
});

Denuncia.belongsTo(Imagen,{
foreignKey:'idImagen'
});



Usuario.hasMany(Comenta,{
foreignKey:'idUsuario'
});

Comenta.belongsTo(Usuario,{
foreignKey:'idUsuario'
});

Imagen.hasMany(Comenta,{
foreignKey:'idImagen'
});

Comenta.belongsTo(Imagen,{
foreignKey:'idImagen'
});
/*
los alias son distintos: están describiendo la misma relación 
pero vista desde lados diferentes. belongsTo devuelve un único usuario, 
mientras que hasMany devuelve muchas relaciones de seguimiento.*/
Sigue.belongsTo(Usuario, { foreignKey:'idSeguidor', as:'Seguidor' });
Sigue.belongsTo(Usuario, { foreignKey: 'idSeguido', as:'Seguido' });

Usuario.hasMany(Sigue, {foreignKey:'idSeguidor', as:'Siguiendo' });
Usuario.hasMany(Sigue, {foreignKey: 'idSeguido', as:'Seguidores' });
