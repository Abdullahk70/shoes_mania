import React from 'react'

export default function UpdateForm() {
  return (
    <form className="row g-3">
<div className="col-md-6">
  <label for="inputName" className="form-label">Product Name</label>
  <input type="text" className="form-control" id="productname" placeholder="i.e This is product name"/>
</div>
<div className="col-md-6">
  <label for="Product-ID" className="form-label">Product ID</label>
  <input  className="form-control" id="productid" placeholder="i.e This is product ID" />
</div>
<div className="col-12">
  <label for="inputDescription" className="form-label ">Product Description</label>
  <input type="text" className="form-control" id="inputAddress" placeholder="i.e This is product description" />
</div>
<div className="col-12">
  <label for="inputState" className="form-label">Product Type</label>
  <select id="inputState" className="form-select">
    <option selected>Choose From Categories</option>
    <option>Sports Shoes</option>
    <option>Formal Shoes</option>
    <option>Casual Shoes</option>
  </select>
</div>
<div className="col-md-6">
  <label for="PRICE" className="form-label">Price in PKR</label>
  <input type="text" className="form-control" id="PRICE" />
</div>
<div className="col-md-4">
  <label for="size" className="form-label">Size</label>
  <select id="size" className="form-select">
    <option selected>Choose the size available</option>
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
  <label for="input" className="form-label">Upload Picture</label>
  <input type="file" className="form-control" id="input" />
</div>

<div className="col-12">
  <button type="submit" className="btn btn-primary bg-warning">Update</button>
</div>
</form>
  )
}
