import React from "react";
import { useLoaderData } from "react-router-dom";
// import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import { FaDownload } from "react-icons/fa";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const Course = ({ params }) => {
  const course = useLoaderData();
  // console.log("this is course", course);
  const { id, cost, rating, total_view, title, image_url, details, duration } =
    course;
  // const courses = course;

  const handleDownload = () => {
    // console.log("event", event);
    fetch(
      "https://b610-lerning-platform-server-side-mostafizur-pro.vercel.app/training/01"
    ).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "data.pdf";
        alink.click();
        // console.log("hihi", alink.download);
      });
    });
  };

  return (
    <div className="card w-full mx-auto bg-base-100 mx-5 shadow-xl">
      <div className=" flex-col ">
        <figure className="px-10 pt-10">
          <img src={image_url} alt="" className="rounded-xl" />
        </figure>
        {/* <img
          src={image_url}
          alt=""
          className="max-w-5xl rounded-lg shadow-3xl"
        /> */}
        <div className="card-body items-center text-center">
          <>
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="py-6">{details}</p>
          </>
        </div>
        <div className="card-body items-center text-center">
          <div className="flex justify-items-center items-center ">
            <div>
              <p className="text-orange-400 text-xl mb-2  flex items-center">
                <span className="font-bold">{rating.number}</span>{" "}
                <FaStar className="ml-1" />
                <FaStar className="ml-1" />
                <FaStar className="ml-1" />
                <FaStar className="ml-1" />
                <FaStarHalfAlt className="ml-2" />
                <span className="ml-2 text-gray-400"> ({total_view})</span>
              </p>
              <p className="text-black-400 text-2xl mb-2 font-bold ">
                {cost} Price
              </p>
            </div>
            <div>
              {/* <div className=" text-2xl mb-2 font-bold mr-5">
                <h3 className="text-red-400">Duration:</h3>
                <span className="text-green-400">{duration}</span>
              </div> */}
            </div>
          </div>
        </div>
        <div className="card-body items-center text-center">
          <button onClick={handleDownload} className="btn btn-primary">
            Download PDF <FaDownload />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Course;
