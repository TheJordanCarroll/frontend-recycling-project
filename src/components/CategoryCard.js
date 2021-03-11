import React from "react";
import ReactPlayer from "react-player";

function RecyclingCategories({ category }) {
  const descriptionArray = JSON.parse(category.description).map(
    (description) => {
      return <li>{description}</li>;
    }
  );

  // console.log("good mornting", descriptionArray)
  console.log("hellurrr", category.description);
  console.log("heyheyhey", category.description[2]);

  return (
    <div>
      <div className="container-fluid padding">
        <div className="row padding">
          <div className="col-lg-6">
            <h2>{category.name}</h2>
            <p>
              Here is some detailed information about recycling {category.name}{" "}
              and some examples of items that fall under this category:
            </p>
            <ul>{descriptionArray}</ul>

            <br />
          </div>
          <div className="col-lg-6">
            <img src={category.image} className="img-fluid catpic" />
          </div>
        </div>
      </div>
      <div className="video">
        <p>Here's how to upcycle {category.name}... </p>
        <ReactPlayer url={category.video} />
      </div>
      <hr className="my-4" />
    </div>
  );
}

export default RecyclingCategories;
