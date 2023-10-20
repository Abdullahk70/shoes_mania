import Navbar from "./Navbar"; 
import Sidebar from "./Sidebar"
import Form from "./Form";
import ViewForm from "./ViewForm";
import DeleteForm from "./DeleteForm";
import UpdateForm from "./UpdateForm";
import { typeContext } from "../App";
import { useContext } from "react";



const Adminpanel=(props)=>{
  const type=useContext(typeContext);
    return (
      
        <>
        <Navbar/>
        <div className="container-fluid"style={{marginTop:"150px"}}>
            
          <div className="row" >
            <div
              className="col-md-3"
              
            >
              <Sidebar/>
            </div>
            <div
              className="col-md-9"
            >{type=="create"&& <Form/>}
             {type=="view"&& <ViewForm/>}
             {type=="update"&& <UpdateForm/>}
             {type=="delete"&& <DeleteForm/>}
             
              {/* {props.type=="create" && <Form/>}
              {props.type=="view" && <ViewForm/>}
              {props.type=="update" && <UpdateForm/>}
              {props.type=="delete" && <DeleteForm/>} */}
            </div>
          </div>
        </div>
        </>
      );
}
export default Adminpanel;