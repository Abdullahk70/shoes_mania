import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Checkout(props) {
  const [cart, setCart] = useState(
    props.items.map(item => ({
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
    <div style={{background:props.mde.bg}}className={`container-fluid bg-${props.mde.bg}`}>
    <div className={`container mt-5 `}>
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
                        src={item.pic}
                        alt={item.name}
                        className="item-image"
                      />
                      <span className="mx-3 font-weight-bold font-italic" >{item.name}</span>
                    </div>
                  </td>
                  <td>PKR {item.price}</td>
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
                  <td>PKR {parseInt(item.price,10) * parseInt(item.quantity,10)}</td>
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
            <p className="fw-bold">Grand Total: PKR {calculateTotal()}</p>
            <Link to="PaymentForm" > <button className="btn btn-primary">Proceed to Payment</button></Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Checkout;
