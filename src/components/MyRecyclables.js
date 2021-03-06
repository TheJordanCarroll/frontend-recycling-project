import React from "react";
// import Header from "./Header";
// import Footer from "./Footer";

function MyRecyclables({ sites }) {
  console.log("yoooooo", sites);

  // const allSites = sites.map((site) => {
  //   return <p>site.name;</p>;
  // });

  return (
    <>
      {/* {sites.map((site) => {
        return;
        <p>{address}</p>;
        <p>{name}</p>;
      })} */}
      <img
        src="https://www.grownyc.org/files/images/home_recycles.png"
        width="300px"
        height="auto"
      />
      {/* <Header /> */}
      <h1>Recyclables!!!!</h1>

      {/* {sites.map((site) => {
        return (
          <div>
            <p>{site.address}</p>
            <p>{site.name}</p>
            <p>{site.borough}</p>
          </div>
        );
      })} */}
      {/* <Footer /> */}
    </>
  );
}

export default MyRecyclables;
