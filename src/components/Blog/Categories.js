import React from "react";
import Category from "./Category";
import { slug } from "github-slugger";




const Categories = ({ categories, currentSlug }) => {
  return (
    <div className="px-20 border-t-2 mt-10 text-dark border-b-2 border-solid border-dark py-4 flex items-start flex-wrap font-medium mx-10 ">
      {categories.map((cat, index) => (
        <Category
          key={index}
          link={`/categories/${cat}`}
          name={cat}
          active={currentSlug === slug(cat)}
        />
      ))}
    </div>
  );
};

export default Categories;
