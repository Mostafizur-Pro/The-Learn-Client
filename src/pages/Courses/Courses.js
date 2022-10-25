import React from "react";
import { useLoaderData } from "react-router-dom";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import NewSummary from "./NewSummary";

const Courses = () => {
  const courses = useLoaderData();
  return (
    <div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-9">
          <h2>All Course : {courses.length}</h2>
          {courses.map((course) => (
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

export default Courses;
