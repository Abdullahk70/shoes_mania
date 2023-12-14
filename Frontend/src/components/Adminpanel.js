import Navbar from "./Navbar"; 
import Sidebar from "./Sidebar"
import Form from "./Form";
import ViewForm from "./ViewForm";
import DeleteForm from "./DeleteForm";
import UpdateForm from "./UpdateForm";
import { typeContext } from "../App";
import { useContext } from "react";



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
              {type=="create"&& <Form/>}
             {type=="view"&& <ViewForm/>}
             {type=="update"&& <UpdateForm/>}
             {type=="delete"&& <DeleteForm/>}
             
              </div>
            </div>
          </div>
        </div>
        </div>
      );
}
export default Adminpanel;