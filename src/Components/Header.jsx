import React from "react";
import Logo from "../assets/Logo.png";
import { format } from "date-fns";
const Header = () => {
  const today = new Date();
  return (
    <div className=" p-3 w-11/12 mx-auto text-center flex justify-center items-center flex-col gap-2">
      <div>
        <img src={Logo} alt="Logo" />
      </div>
      <div>
        <p className="text-gray-500">Journalism Without Fear or Favour</p>
      </div>
      <div>
        <p className="font-semibold">{format(today, "MMMM dd, yyyy")}</p>
      </div>
    </div>
  );
};

export default Header;
