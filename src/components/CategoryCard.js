import React from "react";
import ReactPlayer from "react-player"

function RecyclingCategories({ category }) {
  return (
    //   <>
    //     <h1>Metal!!!!</h1>
    //     <iframe
    //       width="560"
    //       height="315"
    //       src="https://www.youtube.com/embed/Rq1iIc9tiOw"
    //       frameborder="0"
    //       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    //       allowfullscreen
    //     ></iframe>
    //     <p>
    //       metal cans (soup, pet food, empty aerosol cans, empty paint cans, etc.)
    //       aluminum foil and foil products (wrap and trays) metal caps and lids
    //       household metal items (wire hangers, pots, tools, curtain rods, small
    //       appliances that are mostly metal, certain vehicle license plates, etc.)
    //       bulky metal items (large metal items, such as furniture, cabinets, large
    //       mostly metal appliances, DOES NOT INCLUDE electronic devices banned from
    //       disposal)
    //     </p>
    //     <h1>Glass!!!!</h1>
    //     <iframe
    //       width="560"
    //       height="315"
    //       src="https://www.youtube.com/embed/BwSlZNtN3I4"
    //       frameborder="0"
    //       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    //       allowfullscreen
    //     ></iframe>
    //     <p>glass bottles and jars ONLY</p>
    //     <h1>Plastic!!!!</h1>
    //     <iframe
    //       width="560"
    //       height="315"
    //       src="https://www.youtube.com/embed/VP_Fk8-vGVg"
    //       frameborder="0"
    //       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    //       allowfullscreen
    //     ></iframe>
    //     <p>
    //       plastic bottles, jugs, and jars rigid plastic caps and lids rigid
    //       plastic food containers (yogurt, deli, hummus, dairy tubs, cookie tray
    //       inserts, “clamshell” containers, other rigid plastic take-out
    //       containers) rigid plastic non-food containers (such as “blister-pack”
    //       and “clamshell” consumer packaging, acetate boxes) rigid plastic
    //       housewares (flower pots, mixing bowls, plastic appliances, etc.) bulk
    //       rigid plastic (crates, buckets, pails, furniture, large toys, large
    //       appliances, etc.) Note: Rigid plastic is any item that is mostly plastic
    //       resin—it is relatively inflexible and maintains its shape or form when
    //       bent.
    //     </p>
    //     <h1>Cartons!!!!</h1>
    //     <iframe
    //       width="560"
    //       height="315"
    //       src="https://www.youtube.com/embed/ZqWopILSq2o"
    //       frameborder="0"
    //       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    //       allowfullscreen
    //     ></iframe>
    //     <p>
    //       Food and beverage cartons Drink boxes Aseptic packaging (holds beverages
    //       and food: juice, milk and non-dairy milk products, soup, etc.)
    //     </p>
    //     <h1>Paper!!!!</h1>
    //     <iframe
    //       width="560"
    //       height="315"
    //       src="https://www.youtube.com/embed/RR_218EtLJU"
    //       frameborder="0"
    //       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    //       allowfullscreen
    //     ></iframe>
    //     <p>
    //       newspapers, magazines, catalogs, phone books, mixed paper white and
    //       colored paper (lined, copier, computer; staples are ok) mail and
    //       envelopes (any color; window envelopes are ok) receipts paper bags
    //       (handles ok) wrapping paper soft-cover books (phone books, paperbacks,
    //       comics, etc.; no spiral bindings) (schools should follow their school
    //       book recycling procedures)
    //     </p>
    //     <h1>Cardboard!!!!</h1>
    //     <iframe
    //       width="560"
    //       height="315"
    //       src="https://www.youtube.com/embed/ZqWopILSq2o"
    //       frameborder="0"
    //       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    //       allowfullscreen
    //     ></iframe>
    //     <p>
    //       cardboard egg cartons cardboard trays smooth cardboard (food and shoe
    //       boxes, tubes, file folders, cardboard from product packaging) pizza
    //       boxes (remove and discard soiled liner; recycle little plastic supporter
    //       with rigid plastics) paper cups (waxy lining ok if cups are empty and
    //       clean; recycle plastic lids with rigid plastics) corrugated cardboard
    //       boxes (flattened and tied together with sturdy twine)
    //     </p>
    //     <h1>Electronics!!!!</h1>
    //     <p>Bring to a dropoff location</p>
    //     <h1>Textiles!!!!</h1>
    //     <p>Bring to a dropoff location</p>
    //     <h1>Compost!!!!</h1>
    //   </>

    // <div className="container-fluid padding">
    //   <div className="row padding">
    //     <div className="col-lg-6">
    //       <h2>If you built...</h2>
    //       <p>
    //         The columns will automatically stack on top of each other when the
    //         screen is less than 576px wide.
    //       </p>
    //       <p>
    //         Resize the browser window to see the effect. Responsive web design
    //         has become more important as the amount of mobile traffic now
    //         accounts for more than half of total internet traffic.
    //       </p>
    //       <p>
    //         It can also display the web page differently depending on the screen
    //         size or viewing device.
    //       </p>
    //       <br />
    //       <a href className="btn btn-primary">
    //         Learn More
    //       </a>
    //     </div>
    //     <div className="col-lg-6">
    //       <img src="img/desk.png" className="img-fluid" />
    //     </div>
    //   </div>
    // </div>

    // <div class="container-fluid padding">
    //   <div class="row text-center padding">
    //     <div class="col-12">
    //       <h2>Connect</h2>
    //     </div>
    //     <div class="col-12 social padding">
    //       <a href="#">
    //         <i class="fab fa-facebook"></i>
    //       </a>
    //       <a href="#">
    //         <i class="fab fa-twitter"></i>
    //       </a>
    //       <a href="#">
    //         <i class="fab fa-google-plus-g"></i>
    //       </a>
    //       <a href="#">
    //         <i class="fab fa-instagram"></i>
    //       </a>
    //       <a href="#">
    //         <i class="fab fa-youtube"></i>
    //       </a>
    //     </div>
    //   </div>
    // </div>

    <div>
      <div className="container-fluid padding">
        <div className="row padding">
          <div className="col-lg-6">
            <h2>Category Information</h2>
            <p>Category: {category.name}</p>
            <p>Description:{category.description}</p>
            <p>Here's how to upcycle {category.name}... </p>
            <div>
              <ReactPlayer
                url={category.video}
              />
            </div>
            {/* <iframe
              width="560"
              height="315"
              src={category.video}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe> */}
            <br />
          </div>
          <div className="col-lg-6">
            <img src={category.image} className="img-fluid" />
          </div>
        </div>
      </div>
      <hr className="my-4" />
    </div>
  );
}

export default RecyclingCategories;
