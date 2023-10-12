import Adminpanel from "./components/Adminpanel"
import Homescreen from "./components/Homescreen";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
          <Routes>
        
        <Route path="/adminpanel/create" element={<Adminpanel type="Create" color="green"/>} />
        <Route path="/adminpanel/update" element={<Adminpanel  type="Update" color="#4C2E9F"/>} />
        <Route path="/adminpanel/delete" element={<Adminpanel  type="Delete" color="red"/>} />
        <Route path="/adminpanel/view" element={<Adminpanel  type="View" color="#4C2E9F"/>} />
        <Route path="" element={<Homescreen />} />

      </Routes>


    
    

    </div>
    
  );
}

export default App;
