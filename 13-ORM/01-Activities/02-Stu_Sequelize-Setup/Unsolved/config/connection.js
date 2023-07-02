require('dotenv').config();
const Sequelize = require('sequelize');

//const {DB_NAME, DB_PASSWORD, DB_USER} = process.env;
const sequelize = new Sequelize(
  
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  }
);

module.exports = sequelize;
