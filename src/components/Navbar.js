import logo from "./img/logo.jpg";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary  shadow">
      <div
        className="container-fluid p-3 shadow rounded"
        style={{ backgroundColor: "#4C2E9F",textShadow:50,marginTop:-10}}
      >
        <img
          className="rounded"
          src={logo}
          style={{ height: 45 }}
          alt="React Image"
        />
        <a className="navbar-brand text-white ps-2"style={{fontWeight:"bold"}} href="#">
          {" "}
          Shoes Mania
        </a>

        <button
          className="navbar-toggler text-white bg-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse text-white"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active text-white"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Men Section
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                     Female Section
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Show all Articles
                  </a>
                </li>
              </ul>
              
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Trending
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Admin Panel
              </a>
            </li>
            
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-blue text-dark bg-white"
              type="submit"
              style={{ hover: { backgroundColor: "#9E69CD" } }}
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
