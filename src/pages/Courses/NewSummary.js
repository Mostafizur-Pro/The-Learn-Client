import React from "react";
import { Link } from "react-router-dom";

const NewSummary = ({ course }) => {
  const { _id, cost, duration, rating, total_view, title, image_url, details } =
    course;
  return (
    <div className="  ">
      <div className="hero mt-5  bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image_url} className="max-w-sm rounded-lg shadow-3xl" />
          <div className="ml-3">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="py-6">
              {details.slice(0, 250) + "..."}{" "}
              <Link to={`/course/${_id}`}>Read More</Link>
            </p>
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
