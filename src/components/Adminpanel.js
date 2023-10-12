import Navbar from "./Navbar"; 
import Sidebar from "./Sidebar"
import Form from "./Form";
const Adminpanel=(props)=>{
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
              <Form type={props.type} color={props.color}/>
            </div>
          </div>
        </div>
        </>
      );
}
export default Adminpanel;