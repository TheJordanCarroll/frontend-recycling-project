import React, { useState } from "react";
// import Header from "./Header";
// import Footer from "./Footer";

function SiteCard({ site }) {
  const { id, name, borough, image, address } = site;

  return (
    // <li className="card">
    // <div className="container-fluid padding">
    //   <div className="row padding">
    <div className="col-md-4">
      <div className="card">
        <img
          className="card-img-top"
          src={image}
          style={{ width: "50px", height: "auto" }}
        />
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <p className="card-text">
            {address}, {borough}
          </p>
          <a href="#" class="btn btn-outline-secondary">
            View More Information
          </a>
        </div>
      </div>
      {/* </div>
      </div> */}
    </div>
    // </li>
  );
}

export default SiteCard;
