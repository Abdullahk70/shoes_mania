import React, { useState } from 'react'
import { delProduct } from '../services/api';
import { getProducts } from '../services/api';

export default function DeleteForm() {

  const [data,setdata]=useState({
    id:"",
  });
  const[prods,setProds]=useState();
  const onChange=(e)=>{
   setdata({id:e.target.value});
  };
  const formSubmit= (e)=>{
    e.preventDefault();
     
   }
   const onClick=async()=>{
  
    let res=await getProducts();
    res=res.data.filter((itm)=>itm.id===data.id);
    
     setProds(res[0]);
    alert(JSON.stringify(prods._id));
      

     await delProduct(prods._id);
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
