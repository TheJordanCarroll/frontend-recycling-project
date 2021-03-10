import React from "react";
import CategoryCard from "./CategoryCard.js";

function RecyclingCategories({ categories }) {
  return (
    <>
      <div>
        <h1 className="headline">Recycling Categories</h1>
      </div>
      <div className="container-fluid padding">
        <div className="row padding">
          {categories.map((category) => {
            return <CategoryCard key={category.id} category={category} />;
          })}
        </div>
      </div>
    </>
  );
}

export default RecyclingCategories;
