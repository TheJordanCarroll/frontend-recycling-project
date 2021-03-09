import React from "react";
import SiteCard from "./SiteCard.js";

function RecyclingSites({ sites, fav_sites, set_fav_sites }) {
  return (
    <div className="container-fluid padding">
      <div className="row padding">
        {sites.map((site) => {
          return <SiteCard key={site.id} site={site} favs={fav_sites} set={set_fav_sites}/>;
        })}
      </div>
    </div>
  );
}

export default RecyclingSites;
