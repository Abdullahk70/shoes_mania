import React from 'react';
import sportsIntro from '../sportsIntro.mp4';
import casualIntro from '../casual.mp4.mp4'
import { useState } from 'react';
import Card from './Card';
import Footer from './Footer';

export default function CasualScreen(props) {
  const [casualshoes, setCasualShoes] = useState([
    { title:"Air Jordan 1 Low OG",pic:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e6c104e8-6726-4140-8838-0703c5ed4fe9/air-jordan-1-low-og-shoes-v0FbJt.png",price:23899.00},
    { title:"Air Jordan 1 Retro High OG",pic:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/5927b4c8-6f28-4334-a174-20edb76c3c29/air-jordan-1-retro-high-og-mens-shoes-JHpxkn.png",price:30900.00},
    { title:"Air Jordan 1 Mid SE",pic:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/6ba9d6f4-1967-40c3-8642-9641c4bb0539/air-jordan-1-mid-se-womens-shoes-wkMdft.png",price: 15999.00},
    { title:"Air Jordan 1 High MM",pic:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/93799087-66a2-4ebc-886f-f6f2ead477f1/air-jordan-1-high-mm-womens-shoes-hCCcBh.png",price:13499.00},
]);


  return (
    <div className={`bg-${props.mde.bg}`}>
      <div className="container-fluid mt-5">
        <div style={{ marginTop: '2rem' }}>
          <video autoPlay loop muted src={casualIntro} style={{ width: '100%', height: 'auto' }}></video>

          <h2 style={{ marginLeft: '1rem', marginTop: '20px' }} className={`text-${props.mde.bg=="light"?"dark":"light"}`}>Trendy Sneakers for You</h2>
          <div className="row container-fluid mt-4">
            {casualshoes.map((item, index) => (
              <div className="col-md-3" key={index}>
                <Card title={item.title} pic={item.pic} description={`${item.price}`} />
              </div>
            ))}
          </div>

          <h2  className={`my-5 text-${props.mde.bg=="light"?"dark":"light"}`} style={{ marginLeft: '2rem' }} >Discover Your Style</h2>
          <div className="row container-fluid mt-4">
            {casualshoes.map((item, index) => (
              <div className="col-md-3" key={index}>
                <Card title={item.title} pic={item.pic} description={`${item.price}`} />
              </div>
            ))}
          </div>

          <h2  className={`my-5 text-${props.mde.bg=="light"?"dark":"light"}`} style={{ marginLeft: '2rem' }}>Upgrade Your Footwear</h2>
          <div className="row container-fluid mt-4">
            {casualshoes.map((item, index) => (
              <div className="col-md-3" key={index}>
                <Card title={item.title} pic={item.pic} description={`${item.price}`} />
              </div>
            ))}
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}





