const MenuItem = require('../models/MenuItem');

// Controller to get all menu items
exports.getAllMenuItems = async (req, res) => {
  console.log('Reached to the menu');
  try {
    const items = await MenuItem.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch menu items' });
  }
};

// Controller to create a new menu item
exports.createMenuItem = async (req, res) => {
  try {
    const newItem = new MenuItem(req.body);
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create menu item', details: error.message });
  }
};
