import React from "react";

function FavSiteCard({ fav }) {
  return (
    <div className="col-md-4">
      <div className="card">
        <img
          className="card-img-top"
          src={fav.site.image}
          style={{ width: "50px", height: "auto" }}
        />
        <div className="card-body">
          <h4 className="card-title">{fav.site.name}</h4>
          <p className="card-text">
            {fav.site.address}, {fav.site.borough}
          </p>
          <a href="#" class="btn btn-outline-secondary">
            View More Information
          </a>
        </div>
      </div>
    </div>
  );
}

export default FavSiteCard;
