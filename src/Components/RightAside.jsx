import React from "react";
import SocialLogin from "./SocialLogin ";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router";

const RightAside = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-xl capitalize">login With</h1>
      <SocialLogin />
      <div>
        <div className="join join-vertical mx-auto flex justify-start  w-[300px] m-5 space-y-2 ">
          <h1 className="text-xl mb-5 font-bold">Find Us On</h1>
          <NavLink className="btn  text-[16px text-blue-600] p-6">
            <FaFacebook size={24} /> Facebook
          </NavLink>
          <NavLink className="btn  text-[16px text-blue-600] p-6">
            <FaTwitter size={24} /> Twitter
          </NavLink>
          <NavLink className="btn  text-[16px text-blue-600] p-6">
            <FaInstagram size={24} /> Instagram
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default RightAside;
