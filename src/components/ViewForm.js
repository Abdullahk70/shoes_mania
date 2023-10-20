import React, { useRef, useState } from 'react'

export default function ViewForm() {
  const inputref=useRef("");

  const [view,setView]=useState({
    name:"",
    id:"",
  })


   const onChange=(event)=>{
    let nme=event.target.name;
    setView((prevValue)=>{
        if(nme=="Name"){
          return{
            name:event.target.value,
            id:prevValue,
          }
        }
        else if(nme=="id"){
          return{
            name:prevValue,
            id:event.target.value,
          }
        }
    });

   

   }
   const handleClick=()=>{
    // console.log=(inputref.current);
    
    inputref.current.focus();
    alert("Kindly fill in the required fields");
    inputref.current.style.backgroundColor="yellow";
  }
  
  return (
    <form className="row g-3">
    <div className="col-md-6">
      <label for="inputName" className="form-label">Product Name</label>
      <input type="text" ref={inputref} className="form-control"name="Name" value={view.name} id="productname "onChange={onChange} placeholder="i.e This is product name"/>
    </div>
    <div className="col-md-6">
      <label for="Product-ID" className="form-label">Product ID</label>
      <input  className="form-control" name="id" value={view.id} id="productid" onChange={onChange} placeholder="i.e This is product ID" />
    </div>
    
    
    <div className="col-12">
      <button type="submit" onClick={handleClick} className="btn btn-primary "style={{backgroundColor:"#4C2E9F"}}>View</button>
    </div>
    </form>
  )
}
