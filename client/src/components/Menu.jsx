import { useEffect, useState } from 'react';
import { fetchMenuItems } from '../api';
import { useCart } from '../CartContext';
import { useNavigate } from 'react-router-dom';

function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();
  const navigate = useNavigate(); 

  useEffect(() => {
    fetchMenuItems()
      .then(res => {
        setMenuItems(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching menu items:", err);
        setLoading(false);
      });
  }, []);


  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className='flex flex-col items-center jusify-center'>

        <p className="text-[4vw] font-medium">Loading...</p>
        <p className="text-[4vw] opacity-40 ">This may take a few minutes</p>
        <p></p>
        </div>
      </div>
    );
  }

  return (
    <div className="px-1">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mt-5">
        {menuItems.map(item => (
          <div 
            key={item._id} 
            
            className="bg-[#FFF7EB] flex justify-between items-center pr-2 h-[20vw] w-full"
          >
            <div className="mb-4 h-[19vw] w-[25vw]">
              {item.imageUrl && (
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="h-[19vw] mt-4 object-cover transform hover:scale-110 transition duration-300"
                />
              )}
            </div>

            <div className='w-[60vw]'>
              <h3 className="font-medium leading-none mb-1">{item.name}</h3>
              <p className="text-gray-600 leading-none text-[3.5vw]">{item.description}</p>
              <h1 className="block text-lg">₹{item.price}</h1>
            </div>

            <button 
              onClick={(e) => {
                e.stopPropagation(); 
                addToCart(item);
              }}
              className="bg-green-500 hover:bg-blue-600 h-[10vw] w-[10vw] text-[8vw] leading-none active:scale-95 text-white items-center rounded-md transition-transform duration-150"
            >
              +
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
