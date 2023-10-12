import Adminpanel from "./components/Adminpanel"
import Homescreen from "./components/Homescreen";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
          <Routes>
        
        <Route path="/adminpanel/create" element={<Adminpanel type="create"/>} />
        <Route path="/adminpanel/update" element={<Adminpanel  type="update"/>} />
        <Route path="/adminpanel/delete" element={<Adminpanel type="delete"/>} />
        <Route path="/adminpanel/view" element={<Adminpanel type="view"/>} />
        <Route path="" element={<Homescreen />} />

      </Routes>


    
    

    </div>
    
  );
}

export default App;
