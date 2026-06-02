import { Model, DataTypes } from 'sequelize';
import { sequelizeFotaza } from './conexion.js';

class EtiquetaPublicacion extends Model {}

EtiquetaPublicacion.init({

    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },

    idPublicacion:{
        type:DataTypes.INTEGER,
        references:{
            model:'publicaciones',
            key:'id'
        },
    allowNull: false
    },

    idEtiqueta:{
        type:DataTypes.INTEGER,
        references:{
            model:'etiquetas',
            key:'id'
        },
    allowNull: false
    }

},{
    sequelize: sequelizeFotaza,
    modelName: 'EtiquetaPublicacion',
    tableName:'etiquetapublicacions',
    timestamps:false
});

export { EtiquetaPublicacion };
