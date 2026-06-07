import { DataTypes } from 'sequelize';
import { sequelizeFotaza } from '../config/db.js';

const Sigue = sequelizeFotaza.define('Sigue', {
id: {
type: DataTypes.INTEGER,
primaryKey: true,
autoIncrement: true
},
idSeguidor: {
type: DataTypes.INTEGER,
allowNull: false
},
idSeguido: {
type: DataTypes.INTEGER,
allowNull: false
},
fecha: {
type: DataTypes.DATE,
allowNull: false
}
}, {
tableName: 'sigue',
timestamps: false
});

export default Sigue;
