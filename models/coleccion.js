import { Model,DataTypes } from 'sequelize';
import { sequelizeFotaza } from './conexion.js';

class Coleccion extends Model {}

Coleccion.init({
id: {
type: DataTypes.INTEGER,
primaryKey: true,
autoIncrement: true
},
nombre:{
type:DataTypes.STRING,
    allowNull:false
    },
idUsuario: {
type: DataTypes.INTEGER,
allowNull: false,
references: {
      model: 'usuarios', // nombre de la tabla Usuario
      key: 'id'
    }
},
}, {
    sequelize: sequelizeFotaza,
    tableName: 'colecciones',
    timestamps: false
});

export {Coleccion};
