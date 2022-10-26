import React from "react";
import { useLoaderData } from "react-router-dom";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import NewSummary from "./NewSummary";

const Courses = () => {
  const courses = useLoaderData();
  // console.log(courses);
  return (
    <div>
      <h1 className="text-center font-bold text-3xl ">
        A broad selection of courses{" "}
      </h1>
      <p className="text-center  text-xl">
        Take one of the range of Python courses and learn how to code using this
        incredibly useful language.
      </p>
      <br />

      <hr />

      <div className="lg:grid lg:grid-cols-12 gap-4 mx-5 sm:none ">
        <div className="col-span-4 lg:col-span-2 mt-5">
          <RightSideNav></RightSideNav>
        </div>
        <div className="col-span-8 ls:col-span-9">
          {/* <h2>Total Item : {courses.length}</h2> */}
          {courses.map((course) => (
            <NewSummary key={course.id} course={course}></NewSummary>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
