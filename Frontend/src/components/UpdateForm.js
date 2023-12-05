import React, { useState } from 'react'
import { connectToAxios, delProduct, getProducts } from '../services/api';


export default function UpdateForm() {
  const [view,setView]=useState({
    id:"",
  });

  const onChange=(e)=>{
setView({id:e.target.value});

  }
  const onClickk=()=>{
    delProduct(prod._id);
    connectToAxios(prod);
  }

  const onChangee=(e)=>{
    setProd({...prod,[e.target.name]:e.target.value});
    
  }

  const onClick=async()=>{
    let res=await getProducts();
    res=res.data.filter((itm)=>itm.id===view.id)
    
    setProd(res[0]);
    
  }
  const onSubmit=(e)=>{
    e.preventDefault();
  }

  const [prod,setProd]=useState("k");
  return (
    <div>
    <form className="row g-3" onSubmit={onSubmit}>

<div className="col-md-6">
  <label for="Product-ID" className="form-label" >Product ID</label>
  <input  className="form-control" id="productid" placeholder="i.e This is product ID" onChange={onChange}/>
</div>

{prod!=="k" && <div>
<div className="col-md-6">
  <label for="inputName" className="form-label" >Product Name</label>
  <input type="text" className="form-control" name="name" onChange={onChangee} id="productname" value={prod.name} placeholder="i.e This is product name"/>
</div>
<div className="col-md-6">
  <label for="Product-ID" className="form-label">Product ID</label>
  <input  className="form-control" id="productid" name="id" onChange={onChangee} value={prod.id} placeholder="i.e This is product ID" />
</div>
<div className="col-12">
  <label for="inputDescription" className="form-label ">Product Description</label>
  <input type="text" className="form-control" value={prod.description} name="description" onChange={onChangee} id="inputAddress" placeholder="i.e This is product description" />
</div>
<div className="col-12">
  <label for="inputState" className="form-label">Product Type</label>
  <select id="inputState" value={prod.category} name="category" onChange={onChangee} className="form-select">
    <option selected>Choose From Categories</option>
    <option>Sports Shoes</option>
    <option>Formal Shoes</option>
    <option>Casual Shoes</option>
  </select>
</div>
<div className="col-md-6">
  <label for="PRICE" className="form-label">Price in PKR</label>
  <input type="text" className="form-control" name="price" onChange={onChangee} id="PRICE" value={prod.price}/>
</div>
<div className="col-md-4">
  <label for="size" className="form-label">Size</label>
  <select id="size" onChange={onChangee} name="size" value={prod.size} className="form-select">
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
  <input type="text" onChange={onChangee} name="pic" value={prod.pic} className="form-control" id="input" />
</div>
<div className="col-12">
  <button type="submit" className="btn btn-primary bg-warning" onClick={onClickk}>Update Now</button>
</div>
</div>


}


<div className="col-12">
  <button type="submit" className="btn btn-primary bg-warning" onClick={onClick}>Search</button>
</div>
</form>
</div>
  )
}
