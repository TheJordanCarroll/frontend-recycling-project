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
                Recycle better with RecycleNYC.
              </h3>
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
      <div class="container-fluid padding">
        <div class="row welcome text-center">
          <div class="col-12">
            <h1 class="display-4">FAQ</h1>
          </div>
        <hr/>
        <div class="col-12">
          <p class="lead"><em>How can I support recycling initiatives?</em> One way you can support recycling initiatives is by signing petitions at the link <a target="_blank" href="https://www.change.org/t/recycling-en-us">here.</a></p>
          <p class="lead"><em>How should I sort my recycling?</em> New Yorkers must separate recyclables into two categories. The first category is mixed paper and cardboard. The second category is metal, glass, plastic, and cartons. Once separated, they need to be placed in clear plastic bags or recycling bins. </p>
          <p class="lead"><em>How do I know what category an item belongs in?</em> If you're not sure what category an item belongs in, you can learn more about recycling categories by clicking the Categories tab on the nav bar above.</p>
          <p class="lead"><em>How do I know which day to put the recycling out?</em> The day that you should put your recycling out varies by neighborhood. You can find out which day you should put the recyling out in your neighborhood by clicking the link <a target="_blank" href="https://www1.nyc.gov/assets/dsny/site/collectionSchedule/">here.</a></p>
          <p class="lead"><em>Can I recycle unusual items like textiles, electronics, and batteries?</em> Yes! You can find electronics or textile drop-off sites in your borough by clicking the Recycling Sites tab in the nav bar above. You can find information about how to recycle batteries and other miscellaneous items by clicking the Categories tab in the nav bar above.</p>
        </div>
	    </div>
      </div>
    </div>
  );
}

export default HomePage;
