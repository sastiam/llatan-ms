const { Sequelize } = require('sequelize');

let {DB_TYPE, DB_HOST, DB_PORT, DB_DATABASE, DB_USERNAME, DB_PASSWORD} = process.env

let sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
    host: DB_HOST,
    dialect: DB_TYPE,
    port: DB_PORT
});

module.exports = {
    conn: sequelize,
    Sequelize
};