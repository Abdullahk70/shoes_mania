import Carousel from "./Carousel"
import Navbar from "./Navbar"
import Sportsshoes from "./Sportsshoes"
import Casualshoes from "./Casualshoes"
import Formalshoes from "./Formalshoes"
import Footer from "./Footer"
import lg1984 from "./img/1984.png"


const Homescreen=()=>{
    return  <><Navbar/>
    <Carousel/>
    <div className=" bg-success row container-fluid" style={{padding:"1em"}}>
     <div className="col align-self-center text-danger text-lg-center fw-bold"> <p style={{font:"20px"}}>WE REDEFINE</p></div>
     <div className="col align-self-center rounded"><img className="rounded-circle" src={lg1984} alt="" /></div>
     <div className="col align-self-center text-danger text-lg-center fw-bold"> <p>COMFORT</p></div>

    </div>
    <h2 className="m-4 ">Men Sports Wear</h2>
    <Sportsshoes/>
    <h2 className="m-4">Men Casual Wear</h2>
    <Casualshoes/>
    <h2 className="m-4">Men Formal Wear</h2>
    <Formalshoes/>
    <Footer/> 
    </>
    
}
export default Homescreen;