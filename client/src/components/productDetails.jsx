import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`/api/menu/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!product) {
    return <div className="p-6 text-center text-xl">Loading...</div>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-cover rounded-lg mb-6" />
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="text-gray-700 mb-4">{product.description}</p>
      <p className="text-lg mb-2 font-semibold">Price: ₹{product.price}</p>
      <p className="text-lg mb-6">Category: {product.category}</p>
      
      {product.ingredients?.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Ingredients:</h2>
          <ul className="list-disc list-inside">
            {product.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
