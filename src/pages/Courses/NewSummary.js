import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const NewSummary = ({ course }) => {
  const { id, name, image, detail } = course;
  // console.log({ course });
  return (
    <div className="">
      <div className="hero mt-5 rounded-3xl  bg-base-200">
        <div className="hero-content flex-col  lg:flex-row">
          <img
            src={image}
            alt=""
            className="sm:max-w-sm  rounded-lg shadow-3xl"
          />
          <div className="ml-3">
            <h1 className="text-3xl font-bold">{name}</h1>
            <p className="py-6">
              {detail.slice(0, 200) + "..."}{" "}
              <Link to={`/category/${id}`} className="text-red-400">
                Read More
              </Link>
            </p>

            <button className="btn btn-primary">
              <Link to={`/category/${id}`}>Details</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewSummary;
