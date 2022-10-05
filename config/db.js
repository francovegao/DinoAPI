//Dotenv
require('dotenv').config()

const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('sqlite://db.sqlite');

// Conexión a DB externa (Render)

const sequelize = new Sequelize(process.env['DATABASE_URL']);


//  const sequelize = 
//  new Sequelize({
//         hostname: process.env.HOST,
//         port: process.env.PORT,
//         username: process.env.USER,
//         password: process.env.PASS,
//         database: process.env.DB,
//         dialect: 'postgres',
//         port: '5432'
//  });


 sequelize.authenticate()
  .then(() => {
    console.log('SUPER Conectado')
  })
  .catch(err => {
    console.log('No se conecto')
  })


module.exports = sequelize; 