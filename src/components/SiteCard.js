import React, { useState } from "react";

function SiteCard({ site }) {
  const { id, name, borough, image, address } = site;
  const [isFavorite, setIsFavorite] = useState(false);
  const current_user_id = 1;

  function toggleFav(e) {
    setIsFavorite(!isFavorite);
    handleSubmit(e);
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/user_sites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_id: current_user_id, site_id: id }),
    })
      .then((r) => r.json())
      .then((newUserSite) => {});
  }

  function onAddUserSite() {}

  return (
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
          {isFavorite ? (
            <button
              onClick={toggleFav}
              className="emoji-button favorite active"
            >
              ★
            </button>
          ) : (
            <button onClick={toggleFav} className="emoji-button favorite">
              ☆
            </button>
          )}
        </div>
      </div>
      {/* </div>
      </div> */}
    </div>
    // </li>
  );
}

export default SiteCard;
