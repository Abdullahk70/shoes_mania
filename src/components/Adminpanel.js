import Navbar from "./Navbar"; 
import Sidebar from "./Sidebar"
import Form from "./Form";
import ViewForm from "./ViewForm";
import DeleteForm from "./DeleteForm";
import UpdateForm from "./UpdateForm";
const Adminpanel=(props)=>{
  if(props.type=="view"){
    
  }
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
            >
              {props.type=="create" && <Form/>}
              {props.type=="view" && <ViewForm/>}
              {props.type=="update" && <UpdateForm/>}
              {props.type=="delete" && <DeleteForm/>}
            </div>
          </div>
        </div>
        </>
      );
}
export default Adminpanel;