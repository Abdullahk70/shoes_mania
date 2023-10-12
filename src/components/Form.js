const Form=(props)=>{
return  <form class="row g-3">
<div class="col-md-6">
  <label for="inputName" class="form-label">Product Name</label>
  <input type="text" class="form-control" id="productname" placeholder="i.e This is product name"/>
</div>
<div class="col-md-6">
  <label for="Product-ID" class="form-label">Product ID</label>
  <input  class="form-control" id="productid" placeholder="i.e This is product ID" />
</div>
<div class="col-12">
  <label for="inputDescription" class="form-label">Product Description</label>
  <input type="text" class="form-control" id="inputAddress" placeholder="i.e This is product description" />
</div>
<div class="col-12">
  <label for="inputState" class="form-label">Product Type</label>
  <select id="inputState" class="form-select">
    <option selected>Choose From Categories</option>
    <option>Sports Shoes</option>
    <option>Formal Shoes</option>
    <option>Casual Shoes</option>
  </select>
</div>
<div class="col-md-6">
  <label for="PRICE" class="form-label">Price in PKR</label>
  <input type="text" class="form-control" id="PRICE" />
</div>
<div class="col-md-4">
  <label for="size" class="form-label">Size</label>
  <select id="size" class="form-select">
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
<div class="col-md-2">
  <label for="input" class="form-label">Upload Picture</label>
  <input type="file" class="form-control" id="input" />
</div>

<div class="col-12">
  <button type="submit" class="btn btn-primary "style={{backgroundColor:props.color}}>{props.type}</button>
</div>
</form>
}
export default Form;