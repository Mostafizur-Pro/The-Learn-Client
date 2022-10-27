import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RightSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(
      "https://b610-lerning-platform-server-side-mostafizur-pro.vercel.app/categories"
    )
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <Link to="/">
        <h3 className="font-bold mt-2 underline text-2xl text-red-500">
          All Category
        </h3>
      </Link>
      <div>
        {categories.map((category) => (
          <p className=" mt-3" key={category.id}>
            <Link to={`/category/${category.id}`}>{category.name}</Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default RightSideNav;
