import { Publicacion } from './publicacion.js';
import { Etiqueta } from './etiqueta.js';
import { EtiquetaPublicacion } from './etiquetaPublicacion.js';
import { Usuario } from './usuario.js';
import { Imagen } from './imagen.js';
import { Voto } from './voto.js';
import { Denuncia } from './denuncia.js';
import { Comenta } from './comenta.js';

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
