const Sequelize = require('sequelize');


const connection = require('../database/database');


const Instrumento = connection.define(
    'tbl_roupas',
    {
        nome_roupas:{
            type: Sequelize.STRING(200),
            allowNull: false
        }
    }
);



module.exports =roupas;