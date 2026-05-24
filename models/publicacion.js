import { Model,DataTypes } from 'sequelize';
import { sequelizeFotaza } from './conexion.js';

  class Publicacion extends Model {
    
  }
  Publicacion.init({
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    fecha:{
    type: DataTypes,
    allowNull:false
    },
    titulo:{
    type:DataTypes.STRING,
    allowNull:false
    },
    descripcion:{
    type:DataTypes.STRING,
    allowNull:false
    },
    isClose:{
          type:DataTypes.BOOLEAN,
          allowNull:true
    },
    idUsuario:{
      type:DataTypes.INTEGER,
      references: {
      model: 'Usuario', // nombre de la tabla Usuario
      key: 'id'
    }
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
    modelName: 'publicacion',
    tableName:'publicacion',
    timestamps: false
  });
export{Publicacion};


