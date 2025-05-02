import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div>
      <div className="m-5">
        <button className="w-full flex items-center justify-center border border-blue-500 text-blue-500 py-2 rounded mb-2 hover:bg-blue-50">
          <FcGoogle className="text-xl mr-2" />
          Login with Google
        </button>
        <button className="w-full flex items-center justify-center border border-gray-500 text-gray-700 py-2 rounded hover:bg-gray-100">
          <FaGithub className="text-xl mr-2" />
          Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
