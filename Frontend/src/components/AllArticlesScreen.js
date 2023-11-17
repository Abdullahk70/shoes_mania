import React, { useState } from 'react';
import sportsIntro from '../sportsIntro.mp4';
import Card from './Card';
import Footer from './Footer';

export default function ArticleScreen(props) {
  const [articles, setArticles] = useState([
    { category: "Casual", title:"Air Jordan 1 Low OG", pic:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e6c104e8-6726-4140-8838-0703c5ed4fe9/air-jordan-1-low-og-shoes-v0FbJt.png", price:23899.00 },
    { category: "Casual", title:"Air Jordan 1 Retro High OG", pic:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/5927b4c8-6f28-4334-a174-20edb76c3c29/air-jordan-1-retro-high-og-mens-shoes-JHpxkn.png", price:30900.00 },
    { title:"Calza Luxury pro",pic:"https://www.ndure.com/cdn/shop/products/2_fc755691-4002-4192-9d69-e981ae884857_360x.jpg?v=1677042557",price:6499.00},
    { title:"Calza Comfy 2",pic:"https://www.ndure.com/cdn/shop/files/2_38892dd4-4605-4fc4-b543-8f4cd72ecce2_360x.jpg?v=1685079583",price:9999.00},

  ]);

  const articleStyles = {
    background: '#f0f0f0', // Set your background color
    color: 'black', // Set your text color
  
  };

  return (
    <div style={articleStyles}>
      <div className="container-fluid mt-5">
        <div style={{ marginTop: '2rem' }}>
          <video autoPlay loop muted src={sportsIntro} style={{ width: '100%', height: 'auto' }}></video>

          <h2 style={{ marginLeft: '1rem', marginTop: '20px' }} >Trendy Sneakers for You</h2>
          <div className="row container-fluid mt-4">
            {articles.map((item, index) => (
              <div className="col-md-3" key={index}>
                <Card title={item.title} pic={item.pic} description={`PKR ${item.price}`} />
              </div>
            ))}
          </div>

          <h2 className={`my-5`} style={{ marginLeft: '2rem', color: '#333' }}>Discover Your Style</h2>
          <div className="row container-fluid mt-4">
            {articles.map((item, index) => (
              <div className="col-md-3" key={index}>
                <Card title={item.title} pic={item.pic} description={`PKR ${item.price}`} />
              </div>
            ))}
          </div>

          <h2 className={`my-5`} style={{ marginLeft: '2rem', color: '#333' }}>Upgrade Your Footwear</h2>
          <div className="row container-fluid mt-4">
            {articles.map((item, index) => (
              <div className="col-md-3" key={index}>
                <Card title={item.title} pic={item.pic} description={`PKR ${item.price}`} />
              </div>
            ))}
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}
