const Sequelize = require('sequelize');

const componenteSequelize = new Sequelize('dbProduto','root','123456',
{
    dialect:'mysql', host:'localhost'
});

module.exports = componenteSequelize;