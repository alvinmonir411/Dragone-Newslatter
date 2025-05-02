import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";

const Catagory = () => {
  const [categoryNames, setCategoryNames] = useState([]);

  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCategoryNames(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  return (
    <div className="h-fit sticky top-0 ">
      <h1 className="font-semibold text-lg  pb-2">
        All Categories ({categoryNames.length})
      </h1>
      <div className="flex h-[100vh] flex-col space-y-4 m-2 shadow-2xl shadow-gray-300 p-5">
        {categoryNames.map((category) => (
          <NavLink
            key={category.id}
            to={`/category/${category.id}`}
            className={({ isActive }) =>
              isActive
                ? "text-red-500 font-semibold underline"
                : "text-gray-700 hover:text-red-400 transition"
            }
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Catagory;
