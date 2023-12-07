import { useState,useEffect } from "react";
import Card from "./Card";
import { getProducts } from "../services/api";
const Sportsshoes=()=>{
   const [sportsShoes, setSportsShoes] = useState([]);

   useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProducts(); 
 
        const sportProducts = products.data.filter((product) => product.category === "Sports Shoes");
 
        setSportsShoes(sportProducts);
      
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
 
    fetchProducts();
  }, []);

 return <div className="row container-fluid ">
    {
   sportsShoes.map((itm)=><div className="col-md-3">
      <Card  title={itm.name} pic={itm.pic}  description={itm.price}/>
      
   </div>)
    }
  
 </div>

}
export default Sportsshoes;

 // return <div className="row container-fluid ">
    // <div className="col-md-3">
    // <Card  title="Men's Comfy Sports Shoes" pic="https://sunsports.pk/wp-content/uploads/2022/09/RBK-G55863...webp"  description="PKR 9999.00"/>
    // </div>
    // <div className=" col-md-3">
    // <Card  title="Rebook Lite 2" pic="https://sunsports.pk/wp-content/uploads/2022/09/RBK-FW8025..webp" description="PKR 5599.00"/>
    // </div>
    // <div className=" col-md-3">
    // <Card  title="Calza Sports pro" pic="https://www.calza.com.pk/cdn/shop/products/1_be26f02a-4d0d-40f8-a4dd-bcb390665b59_800x.jpg?v=1667285475" description="PKR 5699.00"/>
    // </div>
    // <div className=" col-md-3">
    // <Card  title="Calza Comfy 2" pic="https://www.calza.com.pk/cdn/shop/products/1_845c5590-874e-4fd0-b64e-60f4ad5fdfba.jpg?v=1666171330" description="PKR 7899.00"/>
    // </div>
    // </div>