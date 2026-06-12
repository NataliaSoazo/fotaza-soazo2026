import { Sequelize } from 'sequelize';

const sequelizeFotaza = new Sequelize(process.env.DATABASE_URL{
   // host : 'localhost',
    dialect : 'mysql',
    pool: {
      max: 100,         
      min: 0,       
      acquire: 30000, // Tiempo máximo en milisegundos para obtener una conexión del pool
      idle: 10000     // Tiempo máximo en milisegundos que una conexión puede estar inactiva antes de ser liberada
  },
});
/*const sequelizeFotaza = new Sequelize('fotaza_soazo','root','',{
    host : 'localhost',
    dialect : 'mysql',
    pool: {
      max: 100,         
      min: 0,       
      acquire: 30000, // Tiempo máximo en milisegundos para obtener una conexión del pool
      idle: 10000     // Tiempo máximo en milisegundos que una conexión puede estar inactiva antes de ser liberada
  },
});*/
sequelizeFotaza.authenticate()
  .then(() => {
    console.log('Conectado a MySQL');

    return sequelizeFotaza.sync();
  })
  .then(() => {
    console.log('Modelos sincronizados');
  })
  .catch((error) => {
    console.error('Error de conexión:', error);
  });

export { sequelizeFotaza };