const {Sequelize, DataTypes}= require('sequelize');
const sequelize = require('../config/db');

const Dino = sequelize.define('Dino', {
    name: {
        type: DataTypes.CHAR(64)
    },
    habitat: {
        type: DataTypes.CHAR(128)
    },
    historicalPeriod:{
        type: DataTypes.CHAR(128)
    },
    sizeAndWeight:{
        type: DataTypes.CHAR(128)
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
        type: DataTypes.CHAR(128)
    }
});

module.exports = Dino;