import Carousel from "./Carousel"
import Navbar from "./Navbar"
import Sportsshoes from "./Sportsshoes"
import Casualshoes from "./Casualshoes"
import Formalshoes from "./Formalshoes"
import Footer from "./Footer"
import Motto from "./motto"
import Alert from "./Alert"
import { useEffect } from "react"



const Homescreen=(props)=>{
       
    return  <div className={`bg-${props.mde.bg}`}>
       
    
    
    <Carousel />
    
    <h2 className={`m-4 text-${props.mde.bg=="light"?"dark":"light"}`}>Men Sports Wear</h2>
    <Sportsshoes/>
    <h2 className={`m-4 text-${props.mde.bg=="light"?"dark":"light"}`}>Men Casual Wear</h2>
    <Casualshoes/>
    <h2 className={`m-4 text-${props.mde.bg=="light"?"dark":"light"}`}>Men Formal Wear</h2>
    <Formalshoes/>
    <Motto/>
    <Footer/> 
    </div>
    
}
export default Homescreen;