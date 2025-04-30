const express = require('express');
const { getAllMenuItems, createMenuItem } = require('../controllers/menuController');

const router = express.Router();

// GET all menu items
router.get('/', getAllMenuItems);

// POST (create) a new menu item
router.post('/', createMenuItem);

module.exports = router;
