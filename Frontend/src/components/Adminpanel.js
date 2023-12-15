import Navbar from "./Navbar"; 
import Sidebar from "./Sidebar"
import Form from "./Form";
import ViewForm from "./ViewForm";
import DeleteForm from "./DeleteForm";
import UpdateForm from "./UpdateForm";
import { typeContext } from "../App";
import { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';



const Adminpanel=()=>{
  const type=useContext(typeContext);
    return (
      
        <div style={{backgroundColor:"transparent"}}>
        
        <div className="container-fluid bg-white"style={{marginTop:"150px"}}>
            
          <div className="row "  >
            <div
              className="col-md-3 "
              style={{backgroundColor:"#e4e7eb",height:"33em",marginTop:"-42px",border:"none"}}
              
            >
              <Sidebar/>
            </div>
            <div
              className="col-md-9 bg-white"  style={{marginTop:"-2.5rem",marginLeft:"-0.5rem",borderTopLeftRadius: "3%",boxShadow: "5px 0 10px black" }} 
            >
              <div style={{marginTop:"1.5rem"}}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',alignContent:"center" }}>
                
                <p style={{fontWeight:"bold",fontSize:"20px"}}>DashBoard</p>
                
                <p className="text-muted" style={{marginTop:"5px",marginRight:"390px"}}>
                  Everything Here
                </p>
              
      {/* Search Bar with Search Icon */}
      <div style={{ display: 'flex', alignItems: 'center',alignContent:"center", borderBottom:"1px solid gray" }}>
        <input
          type="text"
          placeholder="Search..."
          style={{ marginRight: '10px' }}
        />
        <FontAwesomeIcon icon={faSearch} style={{ color: 'gray' }} />
      </div>

      {/* Exit Icon with "Exit Store" paragraph */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <FontAwesomeIcon icon={faSignOutAlt} style={{ marginRight: '5px', color: 'red' }} />
        <p style={{ margin: 0 }}>Exit Store</p>
      </div>
    </div>
             <div className="mt-4">
             {type=="create"&& <Form/>}
             {type=="view"&& <ViewForm/>}
             {type=="update"&& <UpdateForm/>}
             {type=="delete"&& <DeleteForm/>}
             </div>
             
              </div>
            </div>
          </div>
        </div>
        </div>
      );
}
export default Adminpanel;