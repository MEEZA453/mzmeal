const mongoose = require('mongoose');

const MenuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  category: { type: String, enum: ['Appetizer', 'Main Course', 'Dessert', 'Drink'], required: true },
  imageUrl: String,
  ingredients: [String],
}, { timestamps: true });

module.exports = mongoose.model('MenuItem', MenuItemSchema);
