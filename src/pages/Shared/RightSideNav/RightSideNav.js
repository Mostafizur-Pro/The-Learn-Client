import React, { useEffect, useState } from "react";

const RightSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <h3>Right Side Nav {categories.length}</h3>
    </div>
  );
};

export default RightSideNav;
