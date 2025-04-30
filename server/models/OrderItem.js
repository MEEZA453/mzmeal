const { DataTypes } = require('sequelize');
const sequelize = require('../config/postgres');
const Order = require('./Order');

const OrderItem = sequelize.define('OrderItem', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  orderId: { type: DataTypes.INTEGER, references: { model: 'Orders', key: 'id' } },
  itemName: { type: DataTypes.STRING, allowNull: false },
  quantity: { type: DataTypes.INTEGER, allowNull: false },
  price: { type: DataTypes.FLOAT, allowNull: false }
}, { timestamps: true });

Order.hasMany(OrderItem, { foreignKey: 'orderId' });
OrderItem.belongsTo(Order, { foreignKey: 'orderId' });

module.exports = OrderItem;
