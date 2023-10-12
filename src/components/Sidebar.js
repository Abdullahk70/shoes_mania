import {Link} from "react-router-dom"

const Sidebar = () => {
  return (
    <div class="card mt-5" style={{ width: "18rem"}}>
      <ul class="list-group list-group-flush"> 
        <li class="list-group-item"><Link to="/adminpanel/create" style={{marginTop: "-30px" ,textDecoration:"none"}}><p style={{marginTop:"15px"}}>Create Record</p></Link></li>
        <li class="list-group-item"><Link to="/adminpanel/update" style={{marginBottom: "10px" ,textDecoration:"none"}}><p style={{marginTop:"15px"}}>Update Record</p></Link></li>
        <li class="list-group-item"><Link to="/adminpanel/delete" style={{marginBottom: "10px" ,textDecoration:"none"}}><p style={{marginTop:"15px"}}>Delete Record</p></Link></li>
        <li class="list-group-item"><Link to="/adminpanel/view" style={{marginBottom: "10px" ,textDecoration:"none"}}><p style={{marginTop:"15px"}}>View Record</p></Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
