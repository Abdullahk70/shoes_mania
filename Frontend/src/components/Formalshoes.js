import Card from "./Card";
import { useState,useEffect } from "react";
import { getProducts } from "../services/api";

const Formalshoes=()=>{
   const [formalShoes, setFormalShoes] = useState([]);

   useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProducts(); 
 
        const formalProducts = products.data.filter((product) => product.category === "Formal Shoes");
 
        setFormalShoes(formalProducts);
        
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
 
    fetchProducts();
  }, []);
 
   return (
     <div className="row container-fluid">
       {formalShoes.map((item) => (
           <div className="col-md-3" key={item.title}>
             <Card title={item.name} pic={item.pic} description={item.price} />
           </div>
         ))}
     </div>
   );


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

       //  const [formalshoes,setformalshoes]=useState([
   //      { title:"Men's Perforated Design",pic:"https://www.ndure.com/cdn/shop/products/1_a7e3c2df-2d31-43e6-85f2-19a87cc37dd3.jpg?v=1676618976",price:7899.00},
   //      { title:"Men's Modern Dress Shoes",pic:"https://www.ndure.com/cdn/shop/products/2_079a95a0-2614-4d87-bc86-3267c97bd2c1_360x.jpg?v=1677047902",price:5599.00},
   //      { title:"Calza Sports pro",pic:"https://www.ndure.com/cdn/shop/products/2_fc755691-4002-4192-9d69-e981ae884857_360x.jpg?v=1677042557",price:6499.00},
   //      { title:"Calza Comfy 2",pic:"https://www.ndure.com/cdn/shop/files/2_38892dd4-4605-4fc4-b543-8f4cd72ecce2_360x.jpg?v=1685079583",price:9999.00},
   //  ])

