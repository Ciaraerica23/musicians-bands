const {Sequelize, sequelize} = require('./db');

// TODO - define the Musician model
let Musician= sequelize.define('musician',{
    name:Sequelize.STRING,
    genre:Sequelize.STRING
});

module.exports = {
    Musician
};