import React from "react";
import { useLoaderData } from "react-router-dom";

const Course = () => {
  const course = useLoaderData();
  console.log("this is course", course);
  const { cost, rating, total_view, title, image_url, details } = course;
  return (
    <div>
      <h3>Hi {image_url} hello</h3>
    </div>
  );
};

export default Course;
