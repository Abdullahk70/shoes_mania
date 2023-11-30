import React, { useRef, useState } from 'react'
import { connectToAxios, getProducts } from '../services/api';

export default function ViewForm() {
  const inputref=useRef("");

  const [view,setView]=useState({
    id:"",
  })
  const[prods,setProds]=useState();


   const onChange=(event)=>{
    
    setView({id:event.target.value});

   

   }
   const handleClick=async ()=>{
    // console.log=(inputref.current);
    
    // inputref.current.focus();
    // alert("Kindly fill in the required fields");
    // inputref.current.style.backgroundColor="yellow";
    alert(JSON.stringify(view));
    const res=await getProducts(view.id);
    setProds(res);
    
  }
  const formSubmit= (e)=>{
   e.preventDefault();
    
  }
  
  return (
    <form className="row g-3" onSubmit={formSubmit}>
    
    <div className="col-md-6">
      <label for="Product-ID" className="form-label">Product ID</label>
      <input  className="form-control" name="id" value={view.id} id="productid" onChange={onChange} placeholder="i.e This is product ID" />
    </div>
    
    
    <div className="col-12">
      <button  onClick={handleClick} className="btn btn-primary "style={{backgroundColor:"#4C2E9F"}}>View</button>
    </div>
    </form>
  )
}