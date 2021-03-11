import React from "react";
import GeneralCard from "./GeneralCard.js";

function GeneralSites({ generalSites }) {
  // console.log("finale", generalites);

  // const allDageneralites = generalites.map((textile) => textile.ig);

  return (
    <div className="container-fluid padding">
      <h1>General</h1>

      <div className="row padding">
        {generalSites.map((general) => {
          return <GeneralCard key={general.id} general={general} />;
        })}
      </div>
    </div>
  );
}
export default GeneralSites;
