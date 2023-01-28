const Sequelize = require('sequelize');

const connection = new Sequelize('guiapergutas','postgres','a1@a2ccc3',{
    host: 'localhost',
    dialect: 'postgres',
    logging: false
});

module.exports = connection;