import Carousel from "./Carousel"
import Navbar from "./Navbar"
import Sportsshoes from "./Sportsshoes"
import Casualshoes from "./Casualshoes"
import Formalshoes from "./Formalshoes"
import Footer from "./Footer"
import Motto from "./motto"



const Homescreen=()=>{
    return  <><Navbar/>
    <Carousel/>
    
    <h2 className="m-4 ">Men Sports Wear</h2>
    <Sportsshoes/>
    <h2 className="m-4">Men Casual Wear</h2>
    <Casualshoes/>
    <h2 className="m-4">Men Formal Wear</h2>
    <Formalshoes/>
    <Motto/>
    <Footer/> 
    </>
    
}
export default Homescreen;