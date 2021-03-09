import React from "react";

function SitePage({ site }) {
  console.log(site);
  return (
    // <>
    //   {/* <h1>{site}</h1> */}
    //   <h1>Site Page!!!!</h1>
    // </>

    <div>
      <div className="container-fluid padding">
        <div className="row padding">
          <div className="col-lg-6">
            <h2>If you built...</h2>
            <p>
              The columns will automatically stack on top of each other when the
              screen is less than 576px wide.
            </p>
            <p>
              Resize the browser window to see the effect. Responsive web design
              has become more important as the amount of mobile traffic now
              accounts for more than half of total internet traffic.
            </p>
            <p>
              It can also display the web page differently depending on the
              screen size or viewing device.
            </p>
            <br />
            <a href className="btn btn-primary">
              Learn More
            </a>
          </div>
          <div className="col-lg-6">
            <img
              src="https://images.squarespace-cdn.com/content/v1/59a706d4f5e2319b70240ef9/1515439618701-5CRY7QH6NCBR8Q9VK6ZJ/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/AdobeStock_101333792.jpeg"
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
