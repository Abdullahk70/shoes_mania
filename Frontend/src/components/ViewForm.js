import React, {useState, useEffect } from 'react';
import { getProducts } from '../services/api';


export default function ViewForm() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let res = await getProducts();
        setProducts(res.data);
        
      } catch (error) {
        console.error('Error fetching products:', error.message);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Pic</th>
            <th scope="col">Price</th>
            <th scope="col">Category</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>
                <img src={product.pic} alt={product.name} style={{ maxWidth: '50px', maxHeight: '50px' }} />
              </td>
              <td>PKR {product.price}</td>
              <td>{product.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
