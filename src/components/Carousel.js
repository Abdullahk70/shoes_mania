import logo from "./img/logo.jpg";

const Carousel = () => {
  return (
    <div
      id="carouselExampleRide"
      className="carousel slide container-fluid "
      data-bs-ride="true"
      
    >
      <div className="carousel-inner " style={{marginTop:5}}>
        <div className="carousel-item active">
          <img
            style={{ height: 590,width:"200" }}
            src="https://www.hdwallpapers.in/download/blue_nike_shoe_with_water_splash_in_white_background_hd_nike-1280x720.jpg"
            className="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
    <h2 className="text-dark" >Nike Air</h2>
    <p className="text-muted">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem molestiae ipsum adipisci totam, obcaecati beatae accusamus ullam quis suscipit voluptatum dolores sunt fugit tenetur distinctio, magnam quidem optio modi doloribus.</p>
  </div>
        </div>
        <div className="carousel-item" >
          <img
          style={{ height: 600,width:"200" }}
            src="https://media.cnn.com/api/v1/images/stellar/prod/nike-infinityrn-4-product-card-cnnu.jpg?c=16x9&q=h_720,w_1280,c_fill"
            className="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
    <h2 className="text-dark" >Metcons</h2>
    <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsam cum, eius maiores et ea quidem pariatur nemo corporis quis ducimus voluptatum molestias officiis tempore, eligendi deleniti fugit laudantium a.</p>
  </div>
        </div>
        <div className="carousel-item">
          <img
          style={{ height: 600,width:"200" }}
            src="https://media.wired.co.uk/photos/63727049ab57b5ecdfc2fb42/16:9/w_1280,c_limit/Nike-Swoosh-News-Gear.jpg"
            className="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
    <h2 className="text-dark">Pegasus Running shoes </h2>
    <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque rem tempora, sit odit enim quae voluptas soluta accusamus quidem fugiat, distinctio ut explicabo magni excepturi? Illum consequatur repellendus iusto quos.</p>
  </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleRide"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleRide"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
