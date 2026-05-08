import { Model,DataTypes } from 'sequelize';
import { sequelize } from './conexion.js';

  class Etiqueta extends Model {
    
  }
  Imagen.init({
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    nombre:{
    type:DataTypes.STRING,
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
    modelName: 'Etiqueta',
    tableName:'etiqueta',
    timestamps: true
  });
  // metodo para que se entienda que la relación es de muchos a muchos
  Etiqueta.belongsToMany(Publicacion, {
  through: EtiquetaPublicacion,
  foreignKey: 'idEtiqueta'
});

export{Etiqueta};