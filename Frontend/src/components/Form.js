import React, { useState } from "react";
import { connectToAxios } from "../services/api";

const Form = () => {
  const [product, setProduct] = useState({
    name: "",
    id: "",
    pic: "",
    price: 0,
    description: "",
    category: "",
    size: 0,
  });

  const sendData = (e) => {
    e.preventDefault();
    connectToAxios(product);
    setProduct({
      name: "",
      id: "",
      pic: "",
      price: 0,
      description: "",
      category: "",
      size: 0,
    });
  };

  const changeData = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
    print();
  };

  const print = () => {
    console.log(product);
  };

  return (
    <form className="row g-3">
      <div className="col-md-6">
        <label htmlFor="inputName" className="form-label">
          Product Name
        </label>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={changeData}
          className="form-control"
          id="productname"
          placeholder="i.e This is product name"
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="Product-ID" className="form-label">
          Product ID
        </label>
        <input
          className="form-control"
          onChange={changeData}
          name="id"
          value={product.id}
          id="productid"
          placeholder="i.e This is product ID"
        />
      </div>
      <div className="col-12">
        <label htmlFor="inputDescription" className="form-label">
          Product Description
        </label>
        <input
          type="text"
          onChange={changeData}
          value={product.description}
          className="form-control"
          name="description"
          id="inputAddress"
          placeholder="i.e This is product description"
        />
      </div>
      <div className="col-12">
        <label htmlFor="inputState" className="form-label">
          Product Type
        </label>
        <select
          id="inputState"
          onChange={changeData}
          name="category"
          value={product.category}
          className="form-select"
        >
          <option defaultValue>Choose From Categories</option>
          <option>Sports Shoes</option>
          <option>Formal Shoes</option>
          <option>Casual Shoes</option>
        </select>
      </div>
      <div className="col-md-6">
        <label htmlFor="PRICE" className="form-label">
          Price in PKR
        </label>
        <input
          type="text"
          name="price"
          value={product.price}
          className="form-control"
          onChange={changeData}
          id="PRICE"
        />
      </div>
      <div className="col-md-4">
        <label htmlFor="size" className="form-label">
          Size
        </label>
        <select
          id="size"
          name="size"
          onChange={changeData}
          value={product.size}
          className="form-select"
        >
          <option defaultValue>Choose the size available</option>
          <option>28</option>
          <option>32</option>
          <option>34</option>
          <option>36</option>
          <option>38</option>
          <option>40</option>
          <option>42</option>
        </select>
      </div>
      <div className="col-md-2">
        <label htmlFor="input" className="form-label">
          Upload Picture
        </label>
        <input
          type="text"
          name="pic"
          onChange={changeData}
          value={product.pic}
          className="form-control"
          id="input"
        />
      </div>

      <div className="col-12">
        <button
          onClick={sendData}
          className="btn btn-primary"
          style={{ backgroundColor: "green" }}
        >
          Create
        </button>
      </div>
    </form>
  );
};

export default Form;

