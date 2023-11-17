import logo from "./img/logo.jpg";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = (props) => {
  const [showUserMenu, setShowUserMenu] = useState(false); // State for user menu

  const userDropdown = (
    <div className="user-dropdown">
      <Link to="../login"><button className="dropdown-item" onClick={() => setShowUserMenu(false)}>
        Login
      </button></Link>
      <Link to="../signup"><button className="dropdown-item " onClick={() => setShowUserMenu(false)}>
        Sign Up
      </button></Link>
    </div>
  );

  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary shadow">
      <div
        className="container-fluid p-3 shadow rounded"
        style={{ backgroundColor: "#4C2E9F", marginTop: "-10px" }}
      >
        <img
          className="rounded-3"
          src={logo}
          style={{ height: 50 }}
          alt="React Image"
        />
        <a
          className="navbar-brand text-white ps-2"
          style={{ fontWeight: "bold" }}
          href="#"
        >
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
              <Link to="/" style={{ textDecoration: "none" }}>
                <p
                  className="nav-link active text-white mt-3"
                  aria-current="page"
                >
                  Home
                </p>
              </Link>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white mt-3"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/SportsScreen" className="dropdown-item">
                    Sports Shoes
                  </Link>
                </li>
                <li>
                  <Link to="/CasualScreen" className="dropdown-item">
                    Casual Shoes
                  </Link>
                </li>
                <li>
                  <Link to="/FormalScreen" className="dropdown-item">
                    Formal Wear
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link to="/AllScreen" className="dropdown-item">
                    Show all Articles
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white mt-3" href="#">
                Trending
              </a>
            </li>
            <li className="nav-item">
              <Link to="/adminpanel/create" style={{ textDecoration: "none" }}>
                <p className="nav-link text-white mt-3">Admin Panel</p>
              </Link>
            </li>
          </ul>
          <div className="form-check form-switch mx-2">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.tggleMode}
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              Dark Mode
            </label>
          </div>
          <div className="d-flex align-items-center">
            <div className="cart-icon position-relative me-3">
              <Link to="/Checkout">
                <FontAwesomeIcon icon={faShoppingCart} size="lg" />
              </Link>
              {props.cartCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {props.cartCount}
                </span>
              )}
            </div>
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
              >
                Search
              </button>
            </form>

            {/* User icon with dropdown */}
            <div
              className="user-icon mx-3"
              onClick={() => setShowUserMenu(!showUserMenu)}
            >
              <FontAwesomeIcon icon={faUser} size="lg" />
              {showUserMenu && userDropdown}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
