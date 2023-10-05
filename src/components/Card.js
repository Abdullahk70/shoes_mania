const Card=(props)=>{
    return <div className="card" style={{width: "18rem",}}>
    <img className="card-img-top" src={props.pic} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.description}</p>
      <a href="#" className="btn btn-primary" style={{backgroundColor: "#4C2E9F"}}>Buy Now</a>
    </div>
  </div>
}
export default Card;