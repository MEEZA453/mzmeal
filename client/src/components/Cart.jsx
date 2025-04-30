import { useCart } from '../CartContext';
import { Link } from 'react-router-dom';

function Cart() {
  const {
    cartItems,
    removeFromCart,
    incrementQuantity,
    decrementQuantity
  } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className='h-screen w-screen'>
      <h1 className='text-[6vw] mb-4 mt-2 ml-2'>Your Cart</h1>
      {cartItems.length === 0 ? <p className='ml-3 opacity-40'>Your cart is empty.</p> : (
        <div className=''>
          {cartItems.map(item => (
            <div key={item._id} className='mb-1 px-2 py-2 flex justify-between bg-zinc-100'>
              <div>
                <h4 className='leading-none mb-3'>{item.name} x {item.quantity}</h4>
                <p className='leading-none text-[5vw] font-medium'>₹{(item.price * item.quantity).toFixed(2)}</p>
              </div>
              <div className='flex flex-col gap-2'>
                <div className='flex justify-center gap-2 items-center'>
                  <button onClick={() => incrementQuantity(item._id)} className='bg-green-500 w-[6vw] h-[6vw]'>+</button>
                  <h5>{item.quantity}</h5>
                  <button onClick={() => decrementQuantity(item._id)} className='bg-green-500 w-[6vw] h-[6vw]'>-</button>
                </div>
                <button className='text-red-500' onClick={() => removeFromCart(item._id)}>Remove</button>
              </div>
            </div>
          ))}
          <div className='w-full px-2 flex justify-between absolute bottom-3 flex-row-reverse'>
          <h3 className='font-medium text-xl'>Total: ₹{total.toFixed(2)}</h3>
          <Link to="/checkout">
            <button className='px-3 bg-orange-500 rounded text-white py-1'>Order Now</button>
          </Link>
          </div>
        
        </div>
      )}
    </div>
  );
}

export default Cart;
