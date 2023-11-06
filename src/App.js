import { createContext,useState } from "react";
import Adminpanel from "./components/Adminpanel"
import Homescreen from "./components/Homescreen";
import {Routes, Route} from "react-router-dom";
import SportsShoesScreen from "./components/SportsShoesScreen";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import Checkout from "./components/Checkout";

export const typeContext=createContext();

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems,setCartItems]=useState(null);
  const [mode,setMode]=useState({
    bg:"light"
    
   });

   const[alert,setAlert]=useState(null);
   
   const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      tpe:type,
    }
    );
    setTimeout(()=>{
      setAlert(null);
    },1300)

   }

function toggleMode(){

  if(mode.bg=="light"){
    setMode({bg:"secondary"})
    showAlert("Background set to Dark","success");
  }
  else{
    setMode({bg:"light"})
    showAlert("Background set to Light","danger");
  }
}


  return (
    <div>
      <Navbar tggleMode={toggleMode} cartCount={cartCount} setCartCount={setCartCount} />
      <Alert Alert={alert}></Alert>

          <Routes>
        
        <Route path="/adminpanel/create" element={<typeContext.Provider value={"create"}><Adminpanel/></typeContext.Provider>} />
        <Route path="/adminpanel/update" element={<typeContext.Provider value={"update"}><Adminpanel/></typeContext.Provider>} />
        <Route path="/adminpanel/delete" element={<typeContext.Provider value={"delete"}><Adminpanel/></typeContext.Provider>} />
        <Route path="/adminpanel/view" element={<typeContext.Provider value={"view"}><Adminpanel/></typeContext.Provider>} />
        <Route path="" element={<Homescreen  mde={mode} showAlert={showAlert}/>} />
        <Route path="/SportsScreen" element={<SportsShoesScreen />} />
        <Route path="/Checkout" element={<Checkout items={[{image:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e6c104e8-6726-4140-8838-0703c5ed4fe9/air-jordan-1-low-og-shoes-v0FbJt.png",name:"abc",price:"10000",quantity:"3"},{image:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e6c104e8-6726-4140-8838-0703c5ed4fe9/air-jordan-1-low-og-shoes-v0FbJt.png",name:"abc",price:"10000",quantity:"5"}]} />} />

      </Routes>


    
    

    </div>
    
  );
}

export default App;
{/* <Adminpanel type="create"/> */}