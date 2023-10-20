import Card from "./Card";
import { useState,useEffect } from "react";

const Formalshoes=()=>{

    const [formalshoes,setformalshoes]=useState([
        { title:"Men's Perforated Design",pic:"https://www.ndure.com/cdn/shop/products/1_a7e3c2df-2d31-43e6-85f2-19a87cc37dd3.jpg?v=1676618976",price:"PKR 7899.00"},
        { title:"Men's Modern Dress Shoes",pic:"https://www.ndure.com/cdn/shop/products/2_079a95a0-2614-4d87-bc86-3267c97bd2c1_360x.jpg?v=1677047902",price:"PKR 5599.00"},
        { title:"Calza Sports pro",pic:"https://www.ndure.com/cdn/shop/products/2_fc755691-4002-4192-9d69-e981ae884857_360x.jpg?v=1677042557",price:"PKR 6499.00"},
        { title:"Calza Comfy 2",pic:"https://www.ndure.com/cdn/shop/files/2_38892dd4-4605-4fc4-b543-8f4cd72ecce2_360x.jpg?v=1685079583",price:"PKR 9999.00"},
    ])
    useEffect(() => {
      updateData();
      return () => { console.log("clearing/flushing")}
    }, [formalshoes]);


  const updateData=()=>{
     alert("data is changed in db and being updated");
  }


    return <div className="row container-fluid ">
    {
   formalshoes.map((itm)=><div className="col-md-3">
      <Card  title={itm.title} pic={itm.pic}  description={itm.price}/>

   </div>)
    }
  
 </div>

}
export default Formalshoes;


 // return <div className="row container-fluid">
    // <div className="col-md-3">
    // <Card  title="Men's Perforated Design" pic="https://www.ndure.com/cdn/shop/products/1_a7e3c2df-2d31-43e6-85f2-19a87cc37dd3.jpg?v=1676618976"  description="PKR 7899.00"/>
    // </div>
    // <div className="col-md-3">
    // <Card  title="Men's Modern Dress Shoes" pic="https://www.ndure.com/cdn/shop/products/2_079a95a0-2614-4d87-bc86-3267c97bd2c1_360x.jpg?v=1677047902" description="PKR 5599.00"/>
    // </div>
    // <div className=" col-md-3">
    // <Card  title="Men's Croc Textured" pic="https://www.ndure.com/cdn/shop/products/2_fc755691-4002-4192-9d69-e981ae884857_360x.jpg?v=1677042557" description="PKR 6499.00"/>
    // </div>
    // <div className="col-md-3">
    // <Card  title="Men's Stylish Dress Shoes" pic="https://www.ndure.com/cdn/shop/files/2_38892dd4-4605-4fc4-b543-8f4cd72ecce2_360x.jpg?v=1685079583" description="PKR 9999.00"/>
    // </div>
    // </div>