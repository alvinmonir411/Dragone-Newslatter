import React, { useState } from "react";
import { NavLink } from "react-router";
import User from "../assets/user.png";
const Navber = () => {
  const [login, setlogin] = useState(false);
  const handleLoginbtn = () => {
    setlogin(!login);
    alert("btn clicked");
  };
  return (
    <div className="flex justify-between items-center mt-10 sticky top-0  ">
      <div className=""></div>
      <div className="center text-gray-700 flex justify-center gap-5 pl-10">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-red-500 font-semibold underline"
              : "text-gray-700 hover:text-red-400 transition"
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-red-500 font-semibold underline"
              : "text-gray-700 hover:text-red-400 transition"
          }
          to="/About"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-red-500 font-semibold underline"
              : "text-gray-700 hover:text-red-400 transition"
          }
          to="/Career"
        >
          Career
        </NavLink>
      </div>
      <div className="right flex justify-center items-center gap-5">
        <img src={User} alt="" />
        <button
          onClick={handleLoginbtn}
          className={`btn p-5 bg-[#403F3F] text-white ${
            login ? "login" : "logout"
          }`}
        >
          {login ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Navber;
