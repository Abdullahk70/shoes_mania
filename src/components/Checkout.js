import React, { useState } from 'react';


function Checkout({ items }) {
  const [cart, setCart] = useState(
    items.map(item => ({
      ...item,
     
    }))
  );

  const handleQuantityChange = (index, newQuantity) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity = newQuantity;
    setCart(updatedCart);
  };

  const handleDeleteItem = (index) => {
    const updatedCart = cart.filter((item, i) => i !== index);
    setCart(updatedCart);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <h2 className="text-center">Checkout</h2>
        </div>
        <div className="card-body">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td>
                    <div className="d-flex align-items-center">
                      <img style={{width:"10%",}}
                        src={item.image} // Assuming you have an 'image' property in your item object
                        alt={item.name}
                        className="item-image"
                      />
                      <span className="mx-3 font-weight-bold font-italic" >{item.name}</span>
                    </div>
                  </td>
                  <td>${item.price}</td>
                  <td>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(index, parseInt(e.target.value, 10))
                      }
                    />
                  </td>
                  <td>${(item.price * item.quantity)}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDeleteItem(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-end">
            <p className="fw-bold">Grand Total: ${calculateTotal()}</p>
            <button className="btn btn-primary">Proceed to Payment</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
