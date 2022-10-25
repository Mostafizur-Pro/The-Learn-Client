import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const NewSummary = ({ course }) => {
  const { _id, cost, duration, rating, total_view, title, image_url, details } =
    course;
  return (
    <div className="  ">
      <div className="hero mt-5 rounded-3xl bg-base-200">
        <div className="hero-content flex-col  lg:flex-row">
          <img
            src={image_url}
            alt=""
            className="max-w-sm rounded-lg shadow-3xl"
          />
          <div className="ml-3">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="py-6">
              {details.slice(0, 250) + "..."}{" "}
              <Link to={`/course/${_id}`} className="text-red-400">
                Read More
              </Link>
            </p>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-orange-400 text-xl mb-2  flex items-center">
                  <span className="font-bold">{rating.number}</span>{" "}
                  <FaStar className="ml-2" />
                  <FaStar className="ml-2" />
                  <FaStar className="ml-2" />
                  <FaStar className="ml-2" />
                  <FaStarHalfAlt className="ml-2" />
                  <span className="ml-2 text-gray-400"> ({total_view})</span>
                </p>
                <p className="text-black-400 text-2xl mb-2 font-bold ">
                  {cost} Price
                </p>
              </div>
              <div>
                <div className=" text-2xl mb-2 font-bold mr-5">
                  <h3 className="text-green-400">Duration:</h3>
                  <span className="text-red-400">{duration}</span>
                </div>
              </div>
            </div>

            <button className="btn btn-primary">
              <Link to={`/course/${_id}`}>Details</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewSummary;
