const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.POSTGRES_URI, {
  dialect: 'postgres',
});

module.exports = sequelize;
 