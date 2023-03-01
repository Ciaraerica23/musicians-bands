const {Sequelize, sequelize} = require('./db');


// TODO - define the Band model
let Band= sequelize.define("band",{
    name:Sequelize.STRING,
    instrument:Sequelize.STRING
});


module.exports = {
    Band
};