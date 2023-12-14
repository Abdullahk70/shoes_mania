import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEdit, faTrash, faEye, faChartBar, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="mt-5 bg-secondary" style={{ width: "18rem", backgroundColor: "#e4e7eb" }}>
      <ul className="" style={{ backgroundColor: "#e4e7eb" }}>
        <li className="list-group-item d-flex">
          <Link to="/adminpanel/create" style={{ textDecoration: "none" }}>
            <div className="d-flex">
            <FontAwesomeIcon icon={faPlus} style={{marginTop:"20px"}}/> <p className="font-weight-bold " style={{ marginTop: "15px",marginLeft:"8px" }}>Create Record</p>
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
