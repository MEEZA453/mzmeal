import { useState } from 'react';
import { useCart } from '../CartContext';
import { placeOrder } from '../api';
import { Link } from 'react-router-dom';

function Checkout() {
  const { cartItems, clearCart } = useCart();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await placeOrder({
        customerName: name,
        phoneNumber: phone,
        cartItems,
      });
      setMessage('Order placed successfully!');
      clearCart();
    } catch (error) {
      console.error(error);
      setMessage('Failed to place order.');
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl  mb-6">Checkout</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <input 
          type="text" 
          placeholder="Your Name" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border rounded p-2"
          required
        />
        <input 
          type="tel" 
          placeholder="Phone Number" 
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full border rounded p-2"
          required
        />
        <button 
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white w-full py-2 rounded"
        >
          Place Order
        </button>
      </form>
      {message && <p className="mt-4 text-lg">{message}</p>}
      {message === 'Order placed successfully!'? <a className='text-blue-500 underline' href='http://localhost:5000/api/orders'>View all orders as Admin</a>: null} <br />
      {message === 'Order placed successfully!'? <a className='text-blue-500 underline' href={`http://localhost:5000/api/orders/${phone}`}>View this order as Admin</a>: null}
    </div>
  );
}

export default Checkout;
