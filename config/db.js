//Dotenv
require('dotenv').config()

const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('sqlite://db.sqlite');

// Conexión a DB externa (Render)

const sequelize = 
new Sequelize({
    database: process.env.DB,
    username: process.env.USER,
    password: process.env.PASS,
    host: process.env.HOST,
    port: process.env.PORT,
    dialect: 'postgresql'
}
);


//  const sequelize = 
//  new Sequelize({
//         host: process.env.HOST,
//         port: process.env.PORT,
//         username: process.env.USER,
//         password: process.env.PASS,
//         database: process.env.DB,
//         dialect: 'postgresql'
//  });

module.exports = sequelize; 