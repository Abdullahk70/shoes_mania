import { createContext,useState } from "react";
import Adminpanel from "./components/Adminpanel"
import Homescreen from "./components/Homescreen";
import {Routes, Route} from "react-router-dom";
import SportsShoesScreen from "./components/SportsShoesScreen";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import Checkout from "./components/Checkout";
import PaymentForm from "./components/PaymentForm";
import CasualScreen from "./components/CasualScreen";
import AllArticleScreen from "./components/AllArticlesScreen";
import FormalScreen from "./components/FormalScreen";
import Login from "./Login";
import SignUp from "./Signup";
import Test from "./test";
import Testimonials from "./components/Testimonials";

export const typeContext=createContext();
export const setCartContext=createContext();
function App() {
  const calculateTotal=(price)=>{
    
     setTotal(parseInt(total,10)+parseInt(price,10));
  }
const [total,setTotal]=useState("0");


  const [cartCount, setCartCount] = useState(0);
  const [cartItems,setCartItems]=useState([]);
  
  const addToCart = (pic, name, price) => {
    // Create a copy of the current cart items
    const updatedCartItems = [...cartItems];
    calculateTotal(price);
    // Check if the item with the given name already exists in the cart
    const existingItem = updatedCartItems.find((item) => item.name === name);
  
    if (existingItem) {
      // If the item already exists, update its quantity
      existingItem.quantity += 1;
    } else {
      // If the item is not in the cart, add it with a quantity of 1
      updatedCartItems.push({ pic, name, price, quantity: 1 });
    }
    
    // Update the cart state with the updated cart items
    setCartItems(updatedCartItems);
  
    // Update the cart count
    setCartCount(cartCount + 1);
  };

  const removeFromCart=(name,price,quantity)=>{
    // Create a copy of the current cart items
    const updatedCartItems = [...cartItems];
    calculateTotal(price*-quantity);
    // Check if the item with the given name already exists in the cart
    const existingItem = updatedCartItems.find((item) => item.name === name);
  
  
      existingItem.quantity -= quantity;
    
    
    // Update the cart state with the updated cart items
    setCartItems(updatedCartItems);
  
    // Update the cart count
    setCartCount(cartCount - quantity);

  }


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
      <Navbar tggleMode={toggleMode} cartCount={cartCount} />
      
       
      <Alert Alert={alert}></Alert>

          <Routes>
        
        <Route path="/adminpanel/create" element={<typeContext.Provider value={"create"}><Adminpanel/></typeContext.Provider>} />
        <Route path="/adminpanel/update" element={<typeContext.Provider value={"update"}><Adminpanel/></typeContext.Provider>} />
        <Route path="/adminpanel/delete" element={<typeContext.Provider value={"delete"}><Adminpanel/></typeContext.Provider>} />
        <Route path="/adminpanel/view" element={<typeContext.Provider value={"view"}><Adminpanel/></typeContext.Provider>} />
        <Route path="" element={<setCartContext.Provider value={addToCart}><Homescreen  mde={mode} showAlert={showAlert}  /></setCartContext.Provider>} />
        <Route path="/SportsScreen" element={<setCartContext.Provider value={addToCart}><SportsShoesScreen mde={mode} showAlert={showAlert}  /></setCartContext.Provider>} />
        <Route path="/CasualScreen" element={<setCartContext.Provider value={addToCart}><CasualScreen mde={mode} showAlert={showAlert}  /></setCartContext.Provider>} />
        <Route path="/AllScreen" element={<setCartContext.Provider value={addToCart}><AllArticleScreen mde={mode} showAlert={showAlert}  /></setCartContext.Provider>} />
        
        <Route path="/FormalScreen" element={<setCartContext.Provider value={addToCart}><FormalScreen mde={mode} showAlert={showAlert}  /></setCartContext.Provider>} />
        
        <Route path="/Checkout" element={<Checkout items={cartItems} addToCart={addToCart} mde={mode} removeFromCart={removeFromCart}/>} />
        <Route path="/Checkout/PaymentForm" element={<PaymentForm grandTotal={total} mde={mode}/>} />
       <Route path="/login" element={<Login/>}/>
       <Route path="/Testimonials" element={<Testimonials/>}/>
       <Route path="/signup" element={<SignUp/>}/>
      </Routes>

 
    </div>
    
  );
}

export default App;
{/* <Adminpanel type="create"/> */}