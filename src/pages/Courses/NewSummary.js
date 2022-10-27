import React from "react";
import { Link } from "react-router-dom";

const NewSummary = ({ course }) => {
  const { id, name, image, detail } = course;
  // console.log({ course });
  return (
    <div className="flex">
      <div className="hero mt-5 rounded-3xl  bg-inherit border-double border-4 border-red-200  ">
        <div className="hero-content flex-col   lg:flex-row">
          <div>
            <img
              src={image}
              alt=""
              className="max-w-auto lg:max-w-sm rounded-lg shadow-2xl"
            />
          </div>
          <div className="ml-3">
            <h1 className="text-3xl font-bold">{name}</h1>
            <p className="py-6">
              {detail.slice(0, 200) + "..."}{" "}
              <Link to={`/category/${id}`} className="text-red-400">
                Read More{" "}
              </Link>
            </p>

            <button className="btn btn-primary">
              <Link to={`/category/${id}`}>More Couses </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewSummary;
