import { Model,DataTypes } from 'sequelize';
import { sequelizeFotaza } from './conexion.js';

class Voto extends Model {}

Voto.init({

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
      }
    },

    estrellas:{
      type:DataTypes.INTEGER,
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
    modelName:'Voto',
    tableName:'votos',
    timestamps:true
});

export { Voto };