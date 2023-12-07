import React, { useRef, useState,useEffect } from 'react'
import { connectToAxios, getProducts } from '../services/api';
import Card from "./Card"
import viewCard from './viewCard';

export default function ViewForm() {
  const inputref=useRef("");

  const [view,setView]=useState({
    id:"",
  })
  const[prods,setProds]=useState("k");


   const onChange=(event)=>{
    setView({id:event.target.value});
   }

  
   const handleClick = async () => {
    try {
      let res = await getProducts();
      const filteredProducts = res.data.filter((itm) => itm.id === view.id);
  
      if (filteredProducts.length > 0) {
        setProds(filteredProducts[0]);
      } else {
        
        alert('Product not found');
      }
  
      setView({ id: '' });
    } catch (error) {
      console.error('Error fetching products:', error.message);
    }
  };
  
  const formSubmit= (e)=>{
   e.preventDefault();
    
  }
  
  
  return (
    <div className=''>
    <form className="row g-3" onSubmit={formSubmit}>
    
    <div className="col-md-6">
      <label for="Product-ID" className="form-label">Product ID</label>
      <input  className="form-control" name="id" value={view.id} id="productid" onChange={onChange} placeholder="i.e This is product ID" />
    </div>
    
    
    <div className="col-12">
      <button  onClick={handleClick} className="btn btn-primary "style={{backgroundColor:"#4C2E9F"}}>View</button>
    </div>
    {prods!=="k" && <div>
  <Card title={prods.name} pic={prods.pic} description={prods.price}/>
  </div>}

    </form>
   
    </div>
  )
}