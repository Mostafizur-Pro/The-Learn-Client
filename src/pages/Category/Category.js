import React from "react";
import { useLoaderData } from "react-router-dom";
import NewSummary from "../Courses/NewSummary";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";

const Category = () => {
  const category = useLoaderData();
  console.log(category);
  return (
    <div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-9">
          <h2>Total Item : {category.length}</h2>
          {category.map((course) => (
            <NewSummary key={course._id} course={course}></NewSummary>
          ))}
        </div>

        <div className="col-span-3">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Category;
