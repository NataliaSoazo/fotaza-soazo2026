import { Model,DataTypes } from 'sequelize';
import { sequelizeFotaza } from './conexion.js';
import { EtiquetaPublicacion } from './etiquetaPublicacion.js';
  class Publicacion extends Model {
    
  }
  Publicacion.init({
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    fecha:{
    type: DataTypes.DATE,
    allowNull:false
    },
    titulo:{
    type:DataTypes.STRING,
    allowNull:false
    },
    descripcion:{
    type:DataTypes.STRING,
    allowNull:true
    },
    copyright: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    isClose:{
          type:DataTypes.BOOLEAN,
          allowNull:true
    },
    idUsuario:{
      type:DataTypes.INTEGER,
      references: {
      model: 'usuarios', // nombre de la tabla Usuario
      key: 'id'
    }
    },
    deletedBy:{
      type: DataTypes.INTEGER,
    allowNull: true,
    }
  }, {
    sequelize: sequelizeFotaza,
    modelName: 'Publicacion',
    tableName:'publicaciones',
    timestamps: true,
  });
export{Publicacion};


