import { Model,DataTypes } from 'sequelize';
import { sequelizeFotaza } from './conexion.js';

class Favorito extends Model {}

Favorito.init({
id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    idColeccion:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    idPublicacion:{
        type:DataTypes.INTEGER,
        allowNull:false
    }

}, {
    indexes:[
        {
            unique:true,
            fields:["idColeccion","idPublicacion"]
        }
    ],
    sequelize: sequelizeFotaza,
    tableName: 'favoritos',
    timestamps: false
});

export {Favorito};
