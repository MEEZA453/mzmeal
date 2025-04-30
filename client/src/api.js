import axios from 'axios';

const API = axios.create({
  baseURL: 'https://mzmeal-1.onrender.com/api',  // Backend server URL
});

export const fetchMenuItems = () => API.get('/menu');
export const placeOrder = (orderData) => API.post('/orders', orderData);
export const getOrders = (phone) => API.get(`/orders/${phone}`);
