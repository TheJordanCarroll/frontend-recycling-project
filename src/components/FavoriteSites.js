import React, { useEffect, useState } from "react";
import FavSiteCard from "./FavSiteCard.js";

function FavoriteSites({ fav_sites }) {
  return (
    <div className="container-fluid padding">
      <div className="row padding">
        {fav_sites.map((fav_site) => {
          return <FavSiteCard key={fav_site.id} fav={fav_site} />;
        })}
      </div>
    </div>
  );
}

export default FavoriteSites;
