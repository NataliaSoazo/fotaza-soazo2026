import { Model,DataTypes } from 'sequelize';
import { sequelize } from './conexion.js';

  class Denuncia extends Model {
    
  }
  Denuncia.init({
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    fecha:{
    type: DATEONLY,
    allowNull:false
    },
    idImagen:{
    type:DataTypes.INTEGER,
    allowNull:false, 
      references: {
      model: 'Imagen', // nombre de la tabla Imagen
      key: 'id'  
        },
      },
    motivo:{
    type:DataTypes.STRING,
    allowNull:false
    },
    descripcion:{
    type:DataTypes.STRING,
    allowNull:false
    },
    idUsuario:{
      type:DataTypes.INTEGER,
      references: {
      model: 'Usuario', // nombre de la tabla Usuario
      key: 'id'
     },
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
    modelName: 'Denuncia',
    tableName:'denuncia',
    timestamps: true
  });
export{Denuncia};