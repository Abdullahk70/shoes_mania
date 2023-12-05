import React, { useState } from 'react'
import { delProduct } from '../services/api';

export default function DeleteForm() {

  const [data,setdata]=useState({
    id:"",
  });
  const onChange=(e)=>{
   setdata({id:e.target.value});
  };
  const formSubmit= (e)=>{
    e.preventDefault();
     
   }
   const onClick=async()=>{
    await delProduct(data.id);
   }
   
  return (
    <form className="row g-3" onSubmit={formSubmit}>

<div className="col-md-6">
  <label for="Product-ID" className="form-label" >Product ID</label>
  <input  className="form-control" value={data.id} id="productid" onChange={onChange} placeholder="i.e This is product ID" />
</div>




<div className="col-12">
  <button type="submit" className="btn btn-primary "style={{backgroundColor:"red"}} onClick={onClick}>Delete</button>
</div>
</form>
  )
}
