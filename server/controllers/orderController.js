const Order = require('../models/Order');
const OrderItem = require('../models/OrderItem');

exports.createOrder = async (req, res) => {
  const { customerName, phoneNumber, cartItems } = req.body;

  if (!customerName || !phoneNumber || !cartItems || !cartItems.length) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    let totalAmount = 0;
    cartItems.forEach(item => {
      totalAmount += item.price * item.quantity;
    });

    const order = await Order.create({ customerName, phoneNumber, totalAmount });

    const orderItems = cartItems.map(item => ({
      orderId: order.id,
      itemName: item.name,
      quantity: item.quantity,
      price: item.price,
    }));

    await OrderItem.bulkCreate(orderItems);
    console.log('orderCreated' , orderItems)

    res.status(201).json({ message: 'Order placed successfully', orderId: order.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to place order' });
  }
};

exports.getOrdersByPhoneNumber = async (req, res) => {
const {phone} = req.params
console.log(phone)
  try {
    console.log('reached to the getOrder')
    const orders = await Order.findAll({
      where: { phoneNumber: phone },
      include: 'OrderItems'
    });

    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
};

exports.getOrder = async (req, res) => {

    try {
      console.log('reached to the getOrder')
      const orders = await Order.findAll({
        include: 'OrderItems'
      });
  
      res.json(orders);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch orders' });
    }
  };
   