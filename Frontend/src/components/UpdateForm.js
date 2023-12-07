import React, { useState } from 'react';
import { connectToAxios, delProduct, getProducts } from '../services/api';

export default function UpdateForm() {
  const [view, setView] = useState({
    id: "",
  });

  const [prod, setProd] = useState({
    name: "",
    id: "",
    pic: "",
    price: 0,
    description: "",
    category: "",
    size: 0,
  });

  const onChange = (e) => {
    setView({ id: e.target.value });
  };

  const onClickk = () => {
    try {
      delProduct(prod._id);
      connectToAxios(prod);
      setView({id:""});
      // Clear the form after updating
      setProd({
        name: "",
        id: "",
        pic: "",
        price: 0,
        description: "",
        category: "",
        size: 0,
      });
    } catch (error) {
      alert("Error updating product: " + error.message);
    }
  };

  const onChangee = (e) => {
    setProd({
      ...prod,
      [e.target.name]: e.target.value,
    });
  };

  const onClick = async () => {
    try {
      let res = await getProducts();
      res = res.data.find((itm) => itm.id === view.id);

      if (res) {
        setProd(res);
      } else {
        // Product not found
        alert("Product not found");
        setProd({
          name: "",
          id: "",
          pic: "",
          price: 0,
          description: "",
          category: "",
          size: 0,
        });
      }
    } catch (error) {
      alert("Error fetching product: " + error.message);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form className="row g-3" onSubmit={onSubmit}>
        <div className="col-md-6">
          <label htmlFor="Product-ID" className="form-label">
            Product ID
          </label>
          <input
            className="form-control"
            id="productid"
            value={view.id}
            placeholder="i.e This is product ID"
            onChange={onChange}
          />
        </div>

        {prod.id && (
          <div>
            <div className="col-md-6">
              <label htmlFor="inputName" className="form-label">
                Product Name
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                onChange={onChangee}
                id="productname"
                value={prod.name}
                placeholder="i.e This is product name"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="Product-ID" className="form-label">
                Product ID
              </label>
              <input
                className="form-control"
                onChange={onChangee}
                name="id"
                value={prod.id}
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
                onChange={onChangee}
                value={prod.description}
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
                onChange={onChangee}
                name="category"
                value={prod.category}
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
                className="form-control"
                name="price"
                onChange={onChangee}
                id="PRICE"
                value={prod.price}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="size" className="form-label">
                Size
              </label>
              <select
                id="size"
                onChange={onChangee}
                name="size"
                value={prod.size}
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
                type="file"
                onChange={onChangee}
                name="pic"
                value={prod.pic}
                className="form-control"
                id="input"
              />
            </div>
            <div className="col-12">
              <button
                type="button"
                className="btn btn-primary bg-warning"
                onClick={onClickk}
              >
                Update Now
              </button>
            </div>
          </div>
        )}

        <div className="col-12">
          <button
            type="button"
            className="btn btn-primary bg-warning"
            onClick={onClick}
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
