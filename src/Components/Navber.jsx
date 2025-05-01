import React from "react";
import { NavLink } from "react-router";
import User from "../assets/user.png";
const Navber = () => {
  return (
    <div className="flex justify-between items-center mt-10 ">
      <div className=""></div>
      <div className="center text-gray-700 flex justify-center gap-5 pl-10">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/Career">Career</NavLink>
      </div>
      <div className="right flex justify-center items-center gap-5">
        <img src={User} alt="" />
        <button className="btn p-5 bg-[#403F3F] text-white">Login</button>
      </div>
    </div>
  );
};

export default Navber;
