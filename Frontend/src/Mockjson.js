import Card from "./components/Card";

const Mockjson = () => {
  const shoes = [
    {
      id: 1,
      productName: "Running Shoes",
      price: 59.99,
      description:
        "High-performance running shoes designed for maximum comfort and support during your workouts.",
      image:
        "https://www.ndure.com/cdn/shop/products/1_b6eb1e84-743f-4954-952c-2d3dd2037d1c_360x.jpg?v=1678689420",
    },
    {
      id: 2,
      productName: "Athletic Sneakers",
      price: 49.95,
      description:
        "Versatile athletic sneakers suitable for various sports activities and casual wear.",
      image:
        "https://www.ndure.com/cdn/shop/products/2_68ec04d9-038a-4b3f-a75d-ee742f1fedc1_360x.jpg?v=1670325881",
    },
    {
      id: 3,
      productName: "Classic Leather Shoes",
      price: 79.99,
      description:
        "Timeless classic leather shoes that add a touch of elegance to your wardrobe.",
      image:
        "https://www.ndure.com/cdn/shop/products/2_0b064d68-fbea-4e50-a1a2-cb4053f1f4c0_360x.jpg?v=1678692444",
    },
    {
      id: 4,
      productName: "Hiking Boots",
      price: 89.99,
      description:
        "Durable hiking boots built for adventure, providing excellent traction and ankle support.",
      image:
        "https://www.ndure.com/cdn/shop/products/2_9d834d1c-b258-4b23-acc4-3e6b07512e68_360x.jpg?v=1670329399",
    },
    {
      id: 5,
      productName: "Suede Loafers",
      price: 69.95,
      description:
        "Luxurious suede loafers that combine style and comfort for a sophisticated look.",
      image:
        "https://www.ndure.com/cdn/shop/products/2_f75ec78c-fe90-4f1a-a751-a19b36759ccf_360x.jpg?v=1662982312",
    },
    {
      id: 6,
      productName: "Canvas Slip-Ons",
      price: 39.99,
      description:
        "Casual canvas slip-ons perfect for a laid-back day out with a stylish and relaxed vibe.",
      image:
        "https://www.ndure.com/cdn/shop/products/2_858946b8-bf96-4818-904e-ca916a7fd064_360x.jpg?v=1675059377",
    },
    {
      id: 7,
      productName: "Trail Running Shoes",
      price: 69.99,
      description:
        "Trail running shoes built to withstand tough terrains while keeping your feet comfortable.",
      image:
        "https://www.ndure.com/cdn/shop/products/1_dcf0b867-b27c-434a-9d2e-11896d820ff3_360x.jpg?v=1667473775",
    },
    {
      id: 8,
      productName: "Dress Oxfords",
      price: 79.95,
      description:
        "Elegant dress oxfords crafted from premium materials, ideal for formal occasions.",
      image:
        "https://www.ndure.com/cdn/shop/products/2_e637773b-137d-4c21-bf2d-fd2a94ee2ec6_360x.jpg?v=1663311609",
    },
    {
      id: 9,
      productName: "Skateboard Sneakers",
      price: 54.99,
      description:
        "Stylish skateboard sneakers designed for skateboarders and streetwear enthusiasts.",
      image:
        "https://www.ndure.com/cdn/shop/products/2_1312dd62-e32d-4884-aa9a-ad2ee5dd4990_360x.jpg?v=1679652408",
    },
    {
      id: 10,
      productName: "Rain Boots",
      price: 44.95,
      description:
        "Waterproof rain boots that keep your feet dry and stylish even on the rainiest days.",
      image:
        "https://www.ndure.com/cdn/shop/products/2_8103fd10-1d55-4115-aea4-5420fd00b2f9_360x.jpg?v=1680243832",
    },
  ];

  return (
    <div className="row">
      {shoes.map((itm) => {
        <div className="col-md-3">
          <Card
            title={itm.productName}
            description={itm.description}
            pic={itm.image}
          ></Card>
        </div>;
      })}
    </div>
  );
};
export default Mockjson;
