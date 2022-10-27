import React from "react";
import { useLoaderData } from "react-router-dom";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import NewSummary from "./NewSummary";
import image2 from "../../assets/images/couses.png";

const Courses = () => {
  const courses = useLoaderData();
  // console.log(courses);
  return (
    <div>
      <div className="hero min-h-full md:grid hidden mb-5">
        <div className="hero-content flex-col lg:flex-row">
          <div className="ml-5 ">
            <h1 className="text-5xl font-bold">
              A board selectoin of Courses!
            </h1>
            <p className="py-6">
              Learn programming with free online courses from real college
              courses from Harvard, MIT, and more of the world's leading
              universities. Pick up essential coding skills needed for frontend
              and/or backend web development, machine learning, IOS, Android,
              and much more.
            </p>
          </div>
          <img alt="" src={image2} className="max-w-sm rounded-lg shadow-2xl" />
        </div>
      </div>

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
