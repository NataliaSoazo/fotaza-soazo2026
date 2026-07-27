import { Model,DataTypes } from 'sequelize';
import { sequelizeFotaza } from './conexion.js';

class Notificacion extends Model {}

Notificacion.init({

    id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    fecha:{
      type:DataTypes.DATEONLY,
      allowNull:false
    },
    idUsuarioReceptor:{
      type:DataTypes.INTEGER,
      references: {
      model: 'usuarios', // nombre de la tabla Usuario
      key: 'id'
    },
    allowNull:false
    },
    tipo:{
      type:DataTypes.STRING,
      allowNull:false
    },
    mensaje:{
      type:DataTypes.STRING,
      allowNull:false
    },
    URL:{
      type:DataTypes.STRING,
      allowNull:false
    },
    leido:{
      type:DataTypes.BOOLEAN,
      allowNull:false
    },
    idUsuarioEmisor:{
      type:DataTypes.INTEGER,
      references: {
      model: 'usuarios', // nombre de la tabla Usuario
      key: 'id'
    },
    allowNull:false
    },
},{
    sequelize: sequelizeFotaza,
    modelName:'Notificacion',
    tableName:'notificaciones',
    timestamps:true
});
export { Notificacion };