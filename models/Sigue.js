import { Model,DataTypes } from 'sequelize';
import { sequelizeFotaza } from './conexion.js';

class Sigue extends Model {}

Sigue.init({
id: {
type: DataTypes.INTEGER,
primaryKey: true,
autoIncrement: true
},
idSeguidor: {
type: DataTypes.INTEGER,
allowNull: false,
references: {
      model: 'usuarios', // nombre de la tabla Usuario
      key: 'id'
    }
},
idSeguido: {
type: DataTypes.INTEGER,
allowNull: false,
references: {
      model: 'usuarios', // nombre de la tabla Usuario
      key: 'id'
    }
},
fecha: {
type: DataTypes.DATE,
allowNull: false
}
}, {
    sequelize: sequelizeFotaza,
    tableName: 'sigue',
    timestamps: false
});

export {Sigue};
