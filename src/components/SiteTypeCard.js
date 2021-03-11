import React from "react";
import { Link } from "react-router-dom";

function SiteTypeCard() {
  return (
    <div className="container-fluid padding">
      <div className="row padding">
        <div className="col-md-4">
          <div className="card">
            {/* <img className="card-img-top" src="img/team1.png" /> */}
            <div className="card-body">
              <h4 className="card-title">General</h4>
              <p className="card-text">
                General sites are public bins where you can recycle cardboard,
                paper, metal, glass, cartons and/or plastic.
              </p>
              <a href="#" className="btn btn-outline-secondary">
                <Link to={`/sites/general`}> See Public Sites</Link>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            {/* <img className="card-img-top" src="img/team2.png" /> */}
            <div className="card-body">
              <h4 className="card-title">Textiles</h4>
              <p className="card-text">
                Textile sites are locations where you can drop off fabrics,
                clothing, shoes, blankets, towels, coats, and/or bedding to be
                recycled.
              </p>
              <a href="#" className="btn btn-outline-secondary">
                <Link to={`/sites/textiles`}> See Drop-Off Sites</Link>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            {/* <img className="card-img-top" src="img/team3.png" /> */}
            <div className="card-body">
              <h4 className="card-title">Electronics</h4>
              <p className="card-text">
                Electronic sites are locations where you can drop off computers,
                televisions, cellphones, power tools, electric razors and/or
                cameras to be recycled.
              </p>
              <a href="#" className="btn btn-outline-secondary">
                <Link to={`/sites/electronics`}> See Drop-Off Sites</Link>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SiteTypeCard;
