const { Sequelize } = require('sequelize');
  const env = require('dotenv').config().parsed;
  



  const dataConnection = new Sequelize({
    dialect: 'mysql',
    host: env.dbhost,
    username: env.dbuser,
    password: env.dbpassword,
    database: env.dbdatabase,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    idleTimeout: 16200,
  })


  const existTable=async (a) => {
    try {
      await dataConnection.authenticate();
      const tableExists = await a.sync();
      if (tableExists) {
        console.log('La tabla ya existe. No es necesario crearla.');
      } else {
        console.log('La tabla no existe. Creando...');
        await a.sync({ force: true }); // Crea la tabla si no existe
      }
    } catch (error) {
      console.error('Error al conectar a la base de datos:', error);
    }
  };


  module.exports = {dataConnection, existTable}; 