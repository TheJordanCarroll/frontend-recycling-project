import React from "react";

function FavSiteCard({ fav, fav_sites, set_fav_sites }) {
  const { id } = fav;
  console.log("helloooo", fav.id);
  function deleteFav() {
    const requestOptions = {
      method: "DELETE",
    };
    fetch(`http://localhost:3000/user_sites/${id}`, requestOptions);
    set_fav_sites(fav_sites.filter((fav) => fav.id !== id));
  }

  return (
    <div className="col-md-4">
      <div className="card">
        <img
          className="card-img-top"
          src={fav.site.image}
          // style={{ width: "50px", height: "auto" }}
        />
        <div className="card-body">
          <h4 className="card-title">{fav.site.name}</h4>
          <p className="card-text">
            {fav.site.address}, {fav.site.borough}
          </p>
          {/* <a href="#" className="btn btn-outline-secondary">
            View More Information
          </a> */}
          <button className="btn btn-outline-secondary" onClick={deleteFav}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default FavSiteCard;
