import React from "react";
import { useLoaderData } from "react-router-dom";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import { FaDownload } from "react-icons/fa";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const Course = ({ params }) => {
  const course = useLoaderData();
  console.log("this is course", course);
  const { cost, rating, total_view, title, image_url, details } = course;
  return (
    <div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-9">
          <div className="hero mt-5  bg-base-200">
            <div className="hero-content flex-col ">
              <img
                src={image_url}
                alt=""
                className="max-w-5xl rounded-lg shadow-3xl"
              />
              <div className="ml-3">
                <>
                  <h1 className="text-3xl font-bold">{title}</h1>
                  <p className="py-6">{details}</p>
                </>
              </div>
              <div>
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
              </div>

              <button className="btn btn-primary">
                Download PDF <FaDownload />
              </button>
            </div>
          </div>
        </div>

        <div className="col-span-3">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Course;
