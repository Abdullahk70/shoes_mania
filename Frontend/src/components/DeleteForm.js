import React, { useState } from 'react';
import { delProduct, getProducts } from '../services/api';

export default function DeleteForm() {
  const [data, setData] = useState({
    id: "",
  });

  const [prods, setProds] = useState(null);

  const onChange = (e) => {
    setData({ id: e.target.value });
  };

  const formSubmit = (e) => {
    e.preventDefault();
   
  };

  const onClick = async () => {
    try {
      let res = await getProducts();
      const filteredProducts = res.data.filter((itm) => itm.id === data.id);
      setData({ id: "" });
      if (filteredProducts.length > 0) {
        setProds(filteredProducts[0]);
        await delProduct(filteredProducts[0]._id);
        alert('Product deleted successfully');
         // Clear the form
      } else {
        alert('Product not found');
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    }
    
  };

  return (
    <form className="row g-3" onSubmit={formSubmit}>
      <div className="col-md-6">
        <label htmlFor="Product-ID" className="form-label">
          Product ID
        </label>
        <input
          className="form-control"
          value={data.id}
          id="productid"
          onChange={onChange}
          placeholder="i.e This is product ID"
        />
      </div>

      <div className="col-12">
        <button
          type="button"
          className="btn btn-primary"
          style={{ backgroundColor: "red" }}
          onClick={onClick}
        >
          Delete
        </button>
      </div>
    </form>
  );
}

