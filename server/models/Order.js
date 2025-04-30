const { DataTypes } = require('sequelize');
const sequelize = require('../config/postgres');

const Order = sequelize.define('Order', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  customerName: { type: DataTypes.STRING, allowNull: false },
  phoneNumber: { type: DataTypes.STRING, allowNull: false },
  totalAmount: { type: DataTypes.FLOAT, allowNull: false }
}, { timestamps: true });

module.exports = Order;
 