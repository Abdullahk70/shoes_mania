import { useContext } from "react";
import { setCartContext } from "../App";

const Card = (props) => {
  const setCart = useContext(setCartContext);

  const handleAddToCart = () => {
    setCart(props.pic, props.title, props.description);
  };

  return (
    <div className="card" style={{ width: "18rem", transition: "box-shadow 0.3s" }}>
      <img className="card-img-top image-fluid" src={props.pic} alt="Card image cap" />
      <div className="card-body" style={{ padding: "10px" }}>
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">PKR {props.description}</p>
        <button className="btn btn-primary" style={{ backgroundColor: "#4C2E9F" }}>
          Buy Now
        </button>
        <button className="btn btn-success" style={{ marginLeft: "10px" }} onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
