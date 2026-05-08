import { Model, DataTypes } from 'sequelize';
import { sequelize } from './conexion.js';

class EtiquetaPublicacion extends Model {}

EtiquetaPublicacion.init({
  
  idEtiqueta: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Etiquetas', // nombre de la tabla Etiqueta
      key: 'id'
    }
  },

  idPublicacion: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Publicacion', // nombre de la tabla Publicacion
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

  deletedAt: {
    type: DataTypes.DATE,
    allowNull: true,
  }

}, {
  sequelize,
  modelName: 'EtiquetaPublicacion',
  tableName: 'etiqueta_publicacion',
  timestamps: true,
  paranoid: true
});

export { EtiquetaPublicacion };