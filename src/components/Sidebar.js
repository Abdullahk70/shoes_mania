import {Link} from "react-router-dom"

const Sidebar = () => {
  return (
    <div class="card mt-5" style={{ width: "18rem", }}>
      <ul class="list-group list-group-flush"> 
        <li class="list-group-item"><Link to="/adminpanel/create" style={{textDecoration:"none"}}><p>Create Record</p></Link></li>
        <li class="list-group-item"><Link to="/adminpanel/update" style={{textDecoration:"none"}}><p>Update Record</p></Link></li>
        <li class="list-group-item"><Link to="/adminpanel/delete" style={{textDecoration:"none"}}><p>Delete Record</p></Link></li>
        <li class="list-group-item"><Link to="/adminpanel/view" style={{textDecoration:"none"}}><p>View Record</p></Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
