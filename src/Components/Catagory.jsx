import React, { useEffect, useState } from "react";
import { NavLink } from "react-router"; // ✅ make sure it's from react-router-dom

const Catagory = () => {
  const [categoryNames, setCategoryNames] = useState([]);

  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCategoryNames(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  return (
    <div className="">
      <h1 className="font-semibold text-lg  pb-2">
        All Categories ({categoryNames.length})
      </h1>
      <div className="flex flex-col space-y-4 m-2">
        {categoryNames.map((category) => (
          <NavLink
            key={category.id}
            to={`/category/${category.id}`} // ✅ provide actual route
            className=" text-center text-[16px] outline-white text-gray-700 hover:text-red-500 px-3 py-1 rounded-md transition"
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Catagory;
