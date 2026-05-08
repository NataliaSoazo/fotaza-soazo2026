import { Model,DataTypes } from 'sequelize';
import { sequelize } from './conexion.js';

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
    marcaDeAgua:{
    type:DataTypes.STRING,
    allowNull:false
    },
    idUsuario:{
      type:DataTypes.INTEGER,
      references: {
      model: 'Usuario', // nombre de la tabla Usuario
      key: 'id'
    }
    },
    createdBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    updatedBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    deletedBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    deletedAt:{
      type: DataTypes.DATE,
    allowNull: true,
    }
    
  }, {
    sequelize,
    modelName: 'Imagen',
    tableName:'imagen',
    timestamps: true
  });
export{Imagen};