import React from "react";
import ElectronicCard from "./ElectronicCard.js";

function ElectronicSites({ electronicSites }) {
  // console.log("finale", electronicites);

  // const allDaelectronicites = electronicites.map((textile) => textile.ig);

  return (
    <div className="container-fluid padding">
      <h1>Electronics</h1>

      <div className="row padding">
        {electronicSites.map((electronic) => {
          return <ElectronicCard key={electronic.id} electronic={electronic} />;
        })}
      </div>
    </div>
  );
}
export default ElectronicSites;
