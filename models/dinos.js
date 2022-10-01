const {Sequelize, DataTypes}= require('sequelize');
const sequelize = require('../config/db');

const Dino = sequelize.define('Dino', {
    name: {
        type: DataTypes.CHAR(255)
    },
    habitat: {
        type: DataTypes.CHAR(255)
    },
    historicalPeriod:{
        type: DataTypes.CHAR(255)
    },
    sizeAndWeight:{
        type: DataTypes.CHAR(255)
    },
    diet:{
        type: DataTypes.CHAR(64)
    },
    characteristics:{
        type: DataTypes.CHAR(255)
    },
    description:{
        type: DataTypes.TEXT()
    },
    image:{
        type: DataTypes.CHAR(255)
    }
});

module.exports = Dino;