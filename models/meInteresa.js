import { Model,DataTypes } from 'sequelize';
import { sequelizeFotaza } from './conexion.js';

  class Intereses extends Model {
    
  }
  Intereses.init({
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    fecha:{
      type:DataTypes.DATE,
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
    usuarioInteresado:{
      type:DataTypes.INTEGER,
      references: {
      model: 'usuarios', // nombre de la tabla Usuario
      key: 'id'
    }
    },
  }, {
    sequelize: sequelizeFotaza,
    modelName: 'Intereses',
    tableName:'intereses',
    timestamps: true
  });
export{Intereses};