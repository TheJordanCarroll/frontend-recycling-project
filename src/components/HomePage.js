import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function HomePage() {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <img src="https://tclf.org/sites/default/files/thumbnails/image/NY_NYC_CentralPark_02_Barrett%20Doherty_2015_sig.jpg" />
            <div className="carousel-caption">
              <h1 className="display-2">RecycleNYC</h1>
              <h3>
                Although 75% of America’s waste is recyclable, we only recycle
                around 30%.
              </h3>
              <h3>We hope RecycleNYC helps you recycle better.</h3>
              {/* <button type="button" className="btn btn-outline-light btn-lg">
              VIEW DEMO
            </button>
            <button type="button" className="btn btn-primary btn-lg">
              Get Started
            </button> */}
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://www.jetsetter.com/wp-content/uploads/sites/7/2019/08/GettyImages-937598098-1-1380x690.jpg"
              // alt=""
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://imgs.6sqft.com/wp-content/uploads/2017/06/19174904/prospectpark-1024x654.jpg"
              // alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
