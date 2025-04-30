const express = require('express');
const { createOrder, getOrdersByPhoneNumber , getOrder } = require('../controllers/orderController');

const router = express.Router();

router.post('/', createOrder);
router.get('/:phone', getOrdersByPhoneNumber);
router.get('/', getOrder);
module.exports = router;
