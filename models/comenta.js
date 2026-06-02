import { Model,DataTypes } from 'sequelize';
import { sequelizeFotaza } from './conexion.js';

  class Comenta extends Model {
    
  }
  Comenta.init({
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    fecha:{
      type:DataTypes.DATEONLY,
      allowNull:false
    },
    idImagen:{
    type:DataTypes.INTEGER,
    allowNull:false,
      references: {
      model: 'imagenes', // nombre de la tabla Imagen
      key: 'id'   
        },
      },
    texto:{
    type:DataTypes.STRING,
    allowNull:false
    },
    idUsuario:{
      type:DataTypes.INTEGER,
      references: {
      model: 'usuarios', // nombre de la tabla Usuario
      key: 'id'
    }
    },
  }, {
    sequelize: sequelizeFotaza,
    modelName: 'Comenta',
    tableName:'comenta',
    timestamps: true
  });
export{Comenta};