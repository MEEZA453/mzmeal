import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',  // Backend server URL
});

export const fetchMenuItems = () => API.get('/menu');
export const placeOrder = (orderData) => API.post('/orders', orderData);
export const getOrders = (phone) => API.get(`/orders/${phone}`);
