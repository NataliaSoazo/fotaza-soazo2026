import { Model,DataTypes } from 'sequelize';
import { sequelize } from './conexion.js';

  class Publicacion extends Model {
    
  }
  Publicacion.init({
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    fecha:{
    type: DATEONLY,
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
    cantDenuncias:{
        type:DataTypes.INTEGER
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
    modelName: 'Publicacion',
    tableName:'publicacion',
    timestamps: true
  });
export{Publicacion};



Publicacion.belongsToMany(Etiqueta, {
  through: EtiquetaPublicacion,
  foreignKey: 'idPublicacion'
});