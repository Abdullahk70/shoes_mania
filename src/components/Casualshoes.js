import { Alert } from "bootstrap";
import Card from "./Card";
import { useState,useEffect } from "react";


const Casualshoes=()=>{
    const [casualshoes,setcasualshoes]=useState([
        { title:"Air Jordan 1 Low OG",pic:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e6c104e8-6726-4140-8838-0703c5ed4fe9/air-jordan-1-low-og-shoes-v0FbJt.png",price:"PKR 23899.00"},
        { title:"Air Jordan 1 Retro High OG",pic:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/5927b4c8-6f28-4334-a174-20edb76c3c29/air-jordan-1-retro-high-og-mens-shoes-JHpxkn.png",price:"PKR 30900.00"},
        { title:"Air Jordan 1 Mid SE",pic:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/6ba9d6f4-1967-40c3-8642-9641c4bb0539/air-jordan-1-mid-se-womens-shoes-wkMdft.png",price:"PKR 15999.00"},
        { title:"Air Jordan 1 High MM",pic:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/93799087-66a2-4ebc-886f-f6f2ead477f1/air-jordan-1-high-mm-womens-shoes-hCCcBh.png",price:"PKR 13499.00"},
    ]);


    // useEffect(() => {
    //   updateData();
    //   return () => { console.log("clearing/flushing")}
    // }, [casualshoes]);

  const updateData=()=>{
    alert("data is changed in db and being updated");
  }
  
    return <div className="row container-fluid ">
    {
        

   casualshoes.map((itm)=><div className="col-md-3">
      <Card  title={itm.title} pic={itm.pic}  description={itm.price}/>
      
   </div>)
    }
  
 </div>
}
export default Casualshoes;




  // return <div className="row container-fluid">
    // <div className="col-md-3 ">
    // <Card  title="Air Jordan 1 Low OG" pic="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e6c104e8-6726-4140-8838-0703c5ed4fe9/air-jordan-1-low-og-shoes-v0FbJt.png"  description="PKR 23899.00"/>
    // </div>
    // <div className="col-md-3 ">
    // <Card  title="Air Jordan 1 Retro High OG" pic="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/5927b4c8-6f28-4334-a174-20edb76c3c29/air-jordan-1-retro-high-og-mens-shoes-JHpxkn.png" description="PKR 30900.00"/>
    // </div>
    // <div className="col-md-3 ">
    // <Card  title="Air Jordan 1 Mid SE " pic="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/6ba9d6f4-1967-40c3-8642-9641c4bb0539/air-jordan-1-mid-se-womens-shoes-wkMdft.png" description="PKR 15999.00"/>
    // </div>
    // <div className="col-md-3">
    // <Card  title="Air Jordan 1 High MM" pic="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/93799087-66a2-4ebc-886f-f6f2ead477f1/air-jordan-1-high-mm-womens-shoes-hCCcBh.png" description="PKR 13499.00"/>
    // </div>
    // </div>