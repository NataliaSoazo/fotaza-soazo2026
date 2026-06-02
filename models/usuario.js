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
    createdBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    deletedBy:{
      type: DataTypes.INTEGER,
    allowNull: true,
    }

  }, {
    sequelize: sequelizeFotaza,
    modelName: 'Usuario', //nombre del modelo
   // schema: usuario (nombre de la tabla en la bd), wi no se le coloca, le pone el nombre del modelo + "s"
   // con todos los atributos
    tableName:'usuarios',
    timestamps: true,
  });
export{Usuario};