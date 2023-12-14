import {Link} from "react-router-dom"

const Sidebar = () => {
  return (
    <div class="card mt-5 bg-secondary" style={{ width: "18rem"}}>
      <ul class="list-group list-group-flush"> 
        <li class="list-group-item"><Link to="/adminpanel/create" style={{textDecoration:"none"}}><p style={{marginTop:"15px"}}>Create Record</p></Link></li>
        <li class="list-group-item"><Link to="/adminpanel/update" style={{textDecoration:"none"}}><p style={{marginTop:"15px"}}>Update Record</p></Link></li>
        <li class="list-group-item"><Link to="/adminpanel/delete" style={{textDecoration:"none"}}><p style={{marginTop:"15px"}}>Delete Record</p></Link></li>
        <li class="list-group-item"><Link to="/adminpanel/view" style={{ textDecoration:"none"}}><p style={{marginTop:"15px"}}>View Record</p></Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
