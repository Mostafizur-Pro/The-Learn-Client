import React from "react";
import { useLoaderData } from "react-router-dom";

const Category = () => {
  const category = useLoaderData();
  console.log(category);
  return (
    <div>
      <h3> Category page : {category.length}</h3>
    </div>
  );
};

export default Category;
