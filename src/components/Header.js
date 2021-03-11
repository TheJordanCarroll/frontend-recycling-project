import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
      <div className="container-fluid">
        <a href="" className="navbar-brand" href="#">
          <img src="img/logo.png" alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <img
            src="https://i.ibb.co/z5g62xh/Screen-Shot-2021-03-11-at-9-17-50-AM.png"
            alt="logooooo"
            width="auto"
            height="100rem"
            classname="logologo"
            border-radius="5px;"
          />
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                <Link to="/home">Home</Link>
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#">
                <Link to="/recyclables">My Recyclables</Link>
              </a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link to="/fav_sites">Favorite Recycling Sites</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link to="/sites">Recycling Sites</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link to="/categories">Recycling Categories</Link>
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#">
                <Link to="/login">Log Out</Link>
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
