import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

function SitePage() {
  const { id } = useParams();

  const [ individualSite, setIndividualSite ] = useState([])

  // useEffect(() => {
  //   fetch(`http://localhost:3000/sites/${id}`)
  //     .then((r) => r.json())
  //     .then((site) => setIndividualSite(site));
  // }, []);
    // fetch(`http://localhost:3000/sites/${id}`)
    //   .then((r) => r.json())
    //   .then((site) => console.log("hellur", site));

      fetch(`http://localhost:3000/sites/${id}`)
      .then((r) => r.json())
      .then((site) => setIndividualSite(site));
  // useEffect(() => {
  //   fetch(`http://localhost:3000/sites/${id}`)
  //     .then((r) => r.json())
  //     .then((site) => console.log(site));
  // }, []);

  // useEffect(() => {
  //   fetch("http://localhost:3000/comments")
  //     .then((r) => r.json())
  //     .then((data) => setComments(data));
  // }, []);
  
  // console.log("hihihi", individualSite)

  return (
    // <>
    //   {/* <h1>{site}</h1> */}
    //   <h1>Site Page!!!!</h1>
    // </>

    <div>
      <div className="container-fluid padding">
        <div className="row padding">
          <div className="col-lg-6">
            <h2>Site Information</h2>
            <p>
              Site Name: {individualSite.name}
            </p>
            <p>
              Address: {individualSite.address}, {individualSite.borough}
            </p>
            <p>
              Hours: {individualSite.hours}
            </p>
            <p>
              Accepted Items: {individualSite.accepted_items}
            </p>
            <br />
            <a target="_blank" href={individualSite.website}>
              Website
            </a>
            <div className="container-fluid padding">
        <div className="row text-center padding">
          <div className="col-12">
            <h3>Connect</h3>
          </div>
          <div className="col-12 social padding">
            <a target="_blank" href={individualSite.facebook}><i className="fab fa-facebook" /></a>
            <a target="_blank" href={individualSite.twitter}><i className="fab fa-twitter" /></a>
            <a target="_blank" href={individualSite.ig}><i className="fab fa-instagram" /></a>
          </div>
        </div>
      </div>
          </div>
          <div className="col-lg-6">
            <img
              src={individualSite.image}
              className="img-fluid"
            />
          </div>
        </div>
      </div>
      <hr className="my-4" />
    </div>
  );
}

export default SitePage;
