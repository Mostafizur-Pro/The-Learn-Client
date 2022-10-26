import React from "react";
import { useLoaderData } from "react-router-dom";

import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import CategoryList from "./CategoryList";

const Category = () => {
  const category = useLoaderData();
  // const { duration } = category;
  console.log("hi", category);
  return (
    <div>
      {/* <h3>Hi: {category.length}</h3> */}

      <div className="lg:grid lg:grid-cols-12 gap-4 mx-5 sm:none ">
        <div className="col-span-4 lg:col-span-2 mt-5">
          <RightSideNav></RightSideNav>
        </div>
        <div className="col-span-8 ls:col-span-9">
          <h2 className="text-xl font-bold">
            Total Item of Couse: {category.length}
          </h2>
          {category.map((course) => (
            <CategoryList key={course._id} course={course}></CategoryList>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
