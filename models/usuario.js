import { Model,DataTypes } from 'sequelize';
import { sequelizeFotaza } from './conexion.js';

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
      unique: true
    },
    password:{
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
      unique: true,
    },
    mail:{
      type:DataTypes.STRING,
      allowNull:false,
      unique: true,
    },
    urlAvatar:{
      type:DataTypes.STRING,
      allowNull:false,
    
    },
    anulado:{
      type:DataTypes.BOOLEAN,
      allowNull:false
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
    sequelize: sequelizeFotaza,
    modelName: 'usuario',
    tableName:'usuario',
    timestamps: false
  });
export{Usuario};