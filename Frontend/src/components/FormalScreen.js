import React from 'react'
import { Alert } from "bootstrap";
import Card from "./Card";
import { useState } from "react";
import Footer from './Footer';

import formalIntro from "../formal.mp4"

export default function FormalScreen(props) {
  const [formalshoes,setformalshoes]=useState([
    { title:"Calza Luxury pro",pic:"https://www.ndure.com/cdn/shop/products/2_fc755691-4002-4192-9d69-e981ae884857_360x.jpg?v=1677042557",price:6499.00},
    { title:"Calza Comfy 2",pic:"https://www.ndure.com/cdn/shop/files/2_38892dd4-4605-4fc4-b543-8f4cd72ecce2_360x.jpg?v=1685079583",price:9999.00},
])
const [formalshoess,setformalshoess]=useState([
  { title:"Men's Perforated Design",pic:"https://www.ndure.com/cdn/shop/products/1_a7e3c2df-2d31-43e6-85f2-19a87cc37dd3.jpg?v=1676618976",price:7899.00},
    { title:"Men's Modern Dress Shoes",pic:"https://www.ndure.com/cdn/shop/products/2_079a95a0-2614-4d87-bc86-3267c97bd2c1_360x.jpg?v=1677047902",price:5599.00},
    
])

    return <>
<div className={`container-fluid mt-5 bg-${props.mde.bg}`}>
  <div style={{ marginTop: "7rem" }}>
   
  <video autoPlay loop muted src={formalIntro}  style={{ width: '100%', height: 'auto' }}></video>
     
    <h2 style={{marginLeft:"23rem",marginTop:"40px"}} className={`text-${props.mde.bg=="light"?"dark":"light"}`}>Sports Shoes that Suite Your Style</h2>
    <div className="row container-fluid mt-4">
      <div className="col-md-4 " style={{width:"510px"}}>
      <video autoPlay loop muted src={formalIntro} className="rounded-5 mt-4"  style={{ width: '100%', height: '20rem' }}></video>
      </div>
      {formalshoes.map((itm)=><div className="col-md-3 ms-5">
      <Card  title={itm.title} pic={itm.pic}  description={itm.price}/>
      
   </div>)
}
    </div>

<h2 className={`my-5 text-${props.mde.bg=="light"?"dark":"light"}`} style={{marginLeft:"37%"}}>A Style to Remember</h2>
    <div className="row container-fluid mt-4">
      
      {formalshoess.map((itm)=><div className="col-md-3">
      <Card  title={itm.title} pic={itm.pic}  description={itm.price}/>
      
   </div>)
}

<div className="col-md-4  " style={{width:"600px"}}>
      <video autoPlay loop muted src={formalIntro} className="rounded-5 mt-3 ms-5" style={{ width: '100%', height: '25rem' }} ></video>
      </div>
     
    </div>

    <h2 className={`my-5 text-${props.mde.bg=="light"?"dark":"light"}`} style={{marginLeft:"37%"}}>Shoes of Your Dreams</h2>
    <div className="row container-fluid mt-4">
      <div className="col-md-4 " style={{width:"510px"}}>
      <video autoPlay loop muted src={formalIntro} className="rounded-5 mt-4"  style={{ width: '100%', height: '20rem' }}></video>
      </div>
      {formalshoes.map((itm)=><div className="col-md-3 ms-5">
      <Card  title={itm.title} pic={itm.pic}  description={itm.price}/>
      
   </div>)
}
    </div>

<Footer/>
    </div>
</div>
</>
}
