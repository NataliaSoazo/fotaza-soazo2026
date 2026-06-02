import { Model,DataTypes } from 'sequelize';
import { sequelizeFotaza } from './conexion.js';
import { Publicacion } from './publicacion.js';
import { EtiquetaPublicacion } from './etiquetaPublicacion.js';
  class Etiqueta extends Model {
    
  }
  Etiqueta.init({
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    nombre:{
    type:DataTypes.STRING,
    allowNull:false
    },
    createdBy:{
      type:DataTypes.INTEGER,
    }
  }, {
    sequelize: sequelizeFotaza,
    modelName: 'Etiqueta',
    tableName:'etiquetas',
    timestamps: false
  });

export{Etiqueta};