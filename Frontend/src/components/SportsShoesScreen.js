import sportsIntro from "../sportsIntro.mp4"

import { useState } from "react";
import Card from "./Card";
import Footer from "./Footer";

const SportsShoesScreen=(props)=>{
  const [sportsshoes,setsportsshoes]=useState([
    { title:"Calza Sports pro",pic:"https://www.calza.com.pk/cdn/shop/products/1_be26f02a-4d0d-40f8-a4dd-bcb390665b59_800x.jpg?v=1667285475",price: 5699.00},
    { title:"Calza Comfy 2",pic:"https://www.calza.com.pk/cdn/shop/products/1_845c5590-874e-4fd0-b64e-60f4ad5fdfba.jpg?v=1666171330",price: 7899.00},
]);
const [sportsshoess,setsportsshoess]=useState([ 
  { title:"Men's Comfy Sports Shoes",pic:"https://sunsports.pk/wp-content/uploads/2022/09/RBK-G55863...webp",price: 9999.00},
{ title:"Rebook Lite 2",pic:"https://sunsports.pk/wp-content/uploads/2022/09/RBK-FW8025..webp",price: 5599.00},
])

return <div className={`bg-${props.mde.bg}`}>
<div className="container-fluid mt-5">
  <div style={{ marginTop: "7rem" }}>
   
  <video autoPlay loop muted src={sportsIntro}  style={{ width: '100%', height: 'auto' }}></video>
     
    <h2 style={{marginLeft:"23rem",marginTop:"40px"}} className={` text-${props.mde.bg=="light"?"dark":"light"}`}>Sports Shoes that Suite Your Style</h2>
    <div className="row container-fluid mt-4">
      <div className="col-md-4 " style={{width:"510px"}}>
      <video autoPlay loop muted src={sportsIntro} className="rounded-5 mt-4"  style={{ width: '100%', height: '20rem' }}></video>
      </div>
      {sportsshoes.map((itm)=><div className="col-md-3 ms-5">
      <Card  title={itm.title} pic={itm.pic}  description={itm.price}/>
      
   </div>)
}
    </div>

<h2 className={`my-5 text-${props.mde.bg=="light"?"dark":"light"}`} style={{marginLeft:"37%"}} >A Style to Remember</h2>
    <div className="row container-fluid mt-4">
      
      {sportsshoess.map((itm)=><div className="col-md-3">
      <Card  title={itm.title} pic={itm.pic}  description={itm.price}/>
      
   </div>)
}

<div className="col-md-4  " style={{width:"600px"}}>
      <video autoPlay loop muted src={sportsIntro} className="rounded-5 mt-3 ms-5" style={{ width: '100%', height: '25rem' }} ></video>
      </div>
     
    </div>

    <h2 className={`my-5 text-${props.mde.bg=="light"?"dark":"light"}`} style={{marginLeft:"37%"}}>Shoes of Your Dreams</h2>
    <div className="row container-fluid mt-4">
      <div className="col-md-4 " style={{width:"510px"}}>
      <video autoPlay loop muted src={sportsIntro} className="rounded-5 mt-4"  style={{ width: '100%', height: '20rem' }}></video>
      </div>
      {sportsshoes.map((itm)=><div className="col-md-3 ms-5">
      <Card  title={itm.title} pic={itm.pic}  description={itm.price}/>
      
   </div>)
}
    </div>

<Footer/>
    </div>
</div>
</div>

}
export default SportsShoesScreen

