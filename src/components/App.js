import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./HomePage";
import MyRecyclables from "./MyRecyclables";
import RecyclingSites from "./RecyclingSites";
import RecyclingCategories from "./RecyclingCategories";
import FavoriteSites from "./FavoriteSites";
import Header from "./Header";
import Footer from "./Footer";
import Login from "./Login";
import SitePage from "./SitePage";

function App({ site }) {
  const [sites, setSites] = useState([]);
  const [favSites, setFavSites] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/sites")
      .then((r) => r.json())
      .then((sites) => {
        setSites(sites);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/user_sites")
      .then((r) => r.json())
      .then((favSites) => {
        setFavSites(favSites);
      });
  }, []);

  return (
    <div className="app">
      <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Complete Bootstrap 4 Website Layout</title>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        />
        <link href="style.css" rel="stylesheet" />
      </div>
      <Header />

      <Switch>
        <Route exact path="/recyclables">
          <MyRecyclables sites={sites} />
        </Route>
        <Route exact path="/fav_sites">
          <FavoriteSites fav_sites={favSites} set_fav_sites={setFavSites} />
        </Route>
        <Route exact path="/sites">
          <RecyclingSites
            sites={sites}
            fav_sites={favSites}
            set_fav_sites={setFavSites}
          />
        </Route>
        <Route exact path="/categories">
          <RecyclingCategories />
        </Route>
        <Route exact path="/home">
          <HomePage />
        </Route>
        {/* <Route exact path="/site">
          <SitePage site={site} />
        </Route> */}
        <Route exact path="/sites/:id">
          <SitePage site={site} />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
