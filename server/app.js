const express = require('express');
const cors = require('cors');
const menuRoutes = require('./routes/menuRoutes');
const orderRoutes = require('./routes/orderRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/menu', menuRoutes);
app.use('/api/orders', orderRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to The Digital Diner API!');
});

module.exports = app;
