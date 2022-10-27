import React from "react";
import { useLoaderData } from "react-router-dom";
// import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import { FaDownload } from "react-icons/fa";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
// import { useRef } from "react";

const Course = ({ params }) => {
  const course = useLoaderData();
  // console.log("this is course", course);
  const { cost, rating, total_view, title, image_url, details } = course;
  // const courses = course;

  const printRef = React.useRef();

  const handleDownload = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/png");

    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("print.pdf");
  };
  // const handleDownload = async () => {
  //   // console.log("event", event);
  //   // using Java Script method to get PDF file
  //   fetch("SamplePDF.pdf").then((response) => {
  //     response.blob().then((blob) => {
  //       // Creating new object of PDF file
  //       const fileURL = window.URL.createObjectURL(blob);
  //       // Setting various property values
  //       let alink = document.createElement("a");
  //       alink.href = fileURL;
  //       alink.download = "SamplePDF.pdf";
  //       alink.click();
  //     });
  //   });
  // };

  return (
    <div className="card m-none  w-auto rounded-5xl mx-auto bg-base-100 shadow-xl">
      <div ref={printRef} className=" flex-col ">
        <figure className="px-10 pt-10">
          <img
            src={image_url}
            alt=""
            className="max-w-auto lg:max-w-2xl rounded-xl shadow-3xl"
          />
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
