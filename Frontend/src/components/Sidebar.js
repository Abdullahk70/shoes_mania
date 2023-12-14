import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEdit, faTrash, faEye, faChartBar, faEnvelope, faUser, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="mt-5 bg-secondary" style={{ width: "18rem", backgroundColor: "#e4e7eb" }}>


<div className="d-flex align-items-center justify-content-between p-3" style={{backgroundColor:"#e4e7eb"}}>

        <div className="d-flex align-items-center ms-3" >
          <div className="rounded-circle bg-white p-1 mr-2">
            <FontAwesomeIcon icon={faUser} className="text-primary" style={{ fontSize: "1.5rem" }} />
          </div>
          <div className="ms-2">
            <p className="mb-0 font-weight-bold ">Hello,</p>
            <p className="mb-0 text-muted">Ahmed</p>
          </div>
        </div>
        <div>
          <FontAwesomeIcon icon={faSignOutAlt} style={{ cursor: "pointer",marginRight:"10px" }} />
        </div>
      </div>


      <ul className="" style={{ backgroundColor: "#e4e7eb" }}>
        <li className="list-group-item d-flex">
          <Link to="/adminpanel/create" style={{ textDecoration: "none" }}>
            <div className="d-flex">
            <FontAwesomeIcon icon={faPlus} style={{marginTop:"20px"}}/> <p className="font-weight-bold text-xl" style={{ marginTop: "15px",marginLeft:"8px" }}>Create Record</p>
            </div>
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/adminpanel/update" style={{ textDecoration: "none" }}>
            <div className="d-flex">
            <FontAwesomeIcon icon={faEdit} style={{marginTop:"20px"}}/> <p style={{ marginTop: "15px",marginLeft:"5px" }}>Update Record</p>
            </div>
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/adminpanel/delete" style={{ textDecoration: "none" }}>
            <div className="d-flex">
            <FontAwesomeIcon icon={faTrash} style={{marginTop:"20px"}}/> <p style={{ marginTop: "15px",marginLeft:"7px" }}>Delete Record</p>
            </div>
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/adminpanel/view" style={{ textDecoration: "none" }}>
            <div className="d-flex">
            <FontAwesomeIcon icon={faEye} style={{marginTop:"20px"}} /> <p style={{ marginTop: "15px",marginLeft:"5px" }}>View Record</p>
            </div>
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/adminpanel/delete" style={{ textDecoration: "none" }}>
            <div className="d-flex">
            <FontAwesomeIcon icon={faChartBar} style={{marginTop:"20px"}}  /> <p style={{ marginTop: "15px",marginLeft:"7px" }}>Analytics</p>
            </div>
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/adminpanel/view" style={{ textDecoration: "none" }}>
            <div className="d-flex">
            <FontAwesomeIcon icon={faEnvelope} style={{marginTop:"20px"}} /> <p style={{ marginTop: "15px",marginLeft:"7px" }}>Messages</p>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
