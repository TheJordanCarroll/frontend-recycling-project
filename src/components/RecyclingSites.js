import React from "react";
import SiteCard from "./SiteCard.js";
import SiteType from "./SiteType.js";
import { Link } from "react-router-dom";

function RecyclingSites({ sites, fav_sites, set_fav_sites, site }) {
  return (
    <div className="container-fluid padding">
      <a href="#" className="btn btn-outline-secondary search">
        <Link to={"/site-type"}> Search By Site Type</Link>
      </a>
      <div className="row padding">
        {sites.map((site) => {
          return (
            <SiteCard
              key={site.id}
              site={site}
              favs={fav_sites}
              set={set_fav_sites}
            />
          );
        })}
      </div>
    </div>
  );
}

export default RecyclingSites;
