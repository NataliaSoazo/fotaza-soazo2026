import { Model,DataTypes } from 'sequelize';
import { sequelizeFotaza } from './conexion.js';

class Denuncia extends Model {}

Denuncia.init({

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
      references:{
        model:'imagenes',
        key:'id'
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
      model: 'usuarios', // nombre de la tabla Usuario
      key: 'id'
    }
    },
},{
    sequelize: sequelizeFotaza,
    modelName:'Denuncia',
    tableName:'denuncias',
    timestamps:true
});

export { Denuncia };