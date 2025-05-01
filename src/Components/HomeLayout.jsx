import React from "react";
import Header from "../Components/Header";
import Navber from "./Navber";
import Marque from "./Marque";
import Catagory from "./Catagory";
import { Outlet } from "react-router";
const HomeLayout = () => {
  return (
    <>
      <header className="container mx-auto">
        <Header></Header>
        <Marque></Marque>
        <Navber></Navber>
      </header>
      <main className="container mx-auto grid grid-cols-12 items-center mt-10 gap-5 ">
        <div className="left col-span-2 ">
          <Catagory></Catagory>
        </div>
        <div className="center col-span-8 ">
          <Outlet />
        </div>
        <div className="right col-span-2 ">
          <h1>Login With</h1>
        </div>
      </main>
    </>
  );
};

export default HomeLayout;
