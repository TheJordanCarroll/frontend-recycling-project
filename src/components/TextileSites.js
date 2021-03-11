import React from "react";
import TextileCard from "./TextileCard.js";

function TextileSites({ textileSites }) {
  console.log("finale", textileSites);

  // const allDaTextileSites = textileSites.map((textile) => textile.ig);

  return (
    <div className="container-fluid padding">
      <h1>Textiles</h1>

      <div className="row padding">
        {textileSites.map((textile) => {
          return <TextileCard key={textile.id} textile={textile} />;
        })}
      </div>
    </div>
  );
}
export default TextileSites;
