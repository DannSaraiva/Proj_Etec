//IMPORTAÇÃO DOS PACOTES.
const Sequelize = require('sequelize');

//CONEXÃO AO BANCO DE DADOS.
const connection = new Sequelize(
    'bd_malit_pw',
    'root',
    '',
    {
        host: 'localhost',
        port: '3306',
        dialect: 'mysql',
        timezone: '-03:00'
    }
);

module.exports = connection;


