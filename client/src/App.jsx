import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Menu from './components/Menu';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import { CartProvider } from './CartContext';
import ProductDetails from './components/productDetails';

function App() {
  return (
    <CartProvider>
      <Router>
        <nav className="flex justify-between space-x-4 p-4 bg-green-500 text-white">
      
          <Link to="/" className="hover:underline">Menu</Link>
          <div>

          <Link to="/cart" className="hover:underline">Cart</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Menu />} />
            <Route path="/:id" element={<ProductDetails />} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
