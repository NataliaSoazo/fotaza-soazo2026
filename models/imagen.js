import { Model,DataTypes } from 'sequelize';
import { sequelizeFotaza } from './conexion.js';

  class Imagen extends Model {
    
  }
  Imagen.init({
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    urlImagen:{
    type:DataTypes.STRING,
    allowNull:false
    },
    licencia:{
    type:DataTypes.STRING,
    allowNull:false
    },
    idPublicacion:{
      type:DataTypes.INTEGER,
      references: {
      model: 'publicaciones', // nombre de la tabla Usuario
      key: 'id'
    }
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
    modelName: 'Imagen',
    tableName:'imagenes',
    timestamps: true,
  });
export{Imagen};