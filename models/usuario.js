import { Model,DataTypes } from 'sequelize';
import { sequelize } from './conexion.js';

  class Usuario extends Model {
    
  }
  Usuario.init({
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
      nombre:{
      type:DataTypes.STRING,
      allowNull:false,
     
    },
    apellido:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    nick:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    clave:{
      type:DataTypes.STRING,
      allowNull:false,
    
    },
    tipoUsuario:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    telefono:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    clave:{
      type:DataTypes.STRING,
      allowNull:false,
    
    },
    mail:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    urlAvatar:{
      type:DataTypes.STRING,
      allowNull:false,
    
    },
    anulado:{
      type:DataTypes.BOOLEAN,
      allowNull:false
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
    modelName: 'Usuario',
    tableName:'usuario',
    timestamps: true
  });
export{Usuario};