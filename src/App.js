import { createContext } from "react";
import Adminpanel from "./components/Adminpanel"
import Homescreen from "./components/Homescreen";
import {Routes, Route} from "react-router-dom";
import SportsShoesScreen from "./components/SportsShoesScreen";

export const typeContext=createContext();

function App() {


  return (
    <div>
          <Routes>
        
        <Route path="/adminpanel/create" element={<typeContext.Provider value={"create"}><Adminpanel/></typeContext.Provider>} />
        <Route path="/adminpanel/update" element={<typeContext.Provider value={"update"}><Adminpanel/></typeContext.Provider>} />
        <Route path="/adminpanel/delete" element={<typeContext.Provider value={"delete"}><Adminpanel/></typeContext.Provider>} />
        <Route path="/adminpanel/view" element={<typeContext.Provider value={"view"}><Adminpanel/></typeContext.Provider>} />
        <Route path="" element={<Homescreen />} />
        <Route path="/SportsScreen" element={<SportsShoesScreen />} />

      </Routes>


    
    

    </div>
    
  );
}

export default App;
{/* <Adminpanel type="create"/> */}