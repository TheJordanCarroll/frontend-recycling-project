import React, { useState } from "react";
// import Header from "./Header";
// import Footer from "./Footer";
import SiteCard from "./SiteCard";

function RecyclingSites({ sites }) {
  //  allSites = {sites.map((site) => {
  return (
    // <div className="cards">
    <div className="container-fluid padding">
      <div className="row padding">
        {/* <div className="col-md-4"> */}
        {sites.map((site) => {
          return <SiteCard key={site.id} site={site} />;
        })}
        {/* </div> */}
      </div>
    </div>

    // <h1>RecyclingSites!!!!</h1>
    //       <h5>Recycling Schedule in NYC</h5>
    //       <p>
    //         <li>
    //           {" "}
    //           The trash and recycling schedule for your home is based on your
    //           address.
    //         </li>
    //         <li>
    //           Place your items curbside on the curb between 4 PM and midnight the
    //           evening before your scheduled pickup.
    //         </li>
    //         <li>
    //           If your pickup is before 4 PM, you must retrieve trash and recycling
    //           bins by 9 PM.
    //         </li>
    //         <li>
    //           If your pickup is after 4 PM, you must retrieve bins by 9 AM the
    //           following morning.
    //         </li>
    //         <li>Suspensions may occur for a City holiday or during a snowstorm.</li>
    //         <li>
    //           {" "}
    //           Trinity Church: MWF Garbage, W Recycling SoulCycle Tribeca: T, Th, S
    //           Garbage, S Recyling Tenement Museum: T, Th, S Garbage, Th Recycling
    //         </li>
    //       </p>
    //       <iframe
    //         width="560"
    //         height="315"
    //         src="https://www.youtube.com/embed/Y6LzB6rMDtA"
    //         frameborder="0"
    //         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    //         allowfullscreen
    //       ></iframe>
  );
}

// return (
<>
  {/* <Header /> */}
  {/* <h1>RecyclingSites!!!!</h1>
      <h5>Recycling Schedule in NYC</h5>
      <p>
        <li>
          {" "}
          The trash and recycling schedule for your home is based on your
          address.
        </li>
        <li>
          Place your items curbside on the curb between 4 PM and midnight the
          evening before your scheduled pickup.
        </li>
        <li>
          If your pickup is before 4 PM, you must retrieve trash and recycling
          bins by 9 PM.
        </li>
        <li>
          If your pickup is after 4 PM, you must retrieve bins by 9 AM the
          following morning.
        </li>
        <li>Suspensions may occur for a City holiday or during a snowstorm.</li>
        <li>
          {" "}
          Trinity Church: MWF Garbage, W Recycling SoulCycle Tribeca: T, Th, S
          Garbage, S Recyling Tenement Museum: T, Th, S Garbage, Th Recycling
        </li>
      </p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Y6LzB6rMDtA"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe> */}
  {/* {sites.map((site) => {
        return (
          <div>
            <p>{site.name}</p>;
          </div>
        );
      })} */}
  {/* {allSites} */}
</>;
// );
// }

export default RecyclingSites;
