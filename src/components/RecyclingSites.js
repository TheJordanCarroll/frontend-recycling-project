import React from "react";
// import Header from "./Header";
// import Footer from "./Footer";
import SiteCard from "./SiteCard.js";

function RecyclingSites({ sites }) {
  return (
    <div className="container-fluid padding">
      <div className="row padding">
        {sites.map((site) => {
          return <SiteCard key={site.id} site={site} />;
        })}
      </div>
    </div>
  );
}

export default RecyclingSites;
