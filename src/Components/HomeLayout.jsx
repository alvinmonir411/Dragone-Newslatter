import React from "react";
import Header from "./Header";
import Navber from "./Navber";
import Marque from "./Marque";
import Catagory from "./Catagory";
import { Outlet } from "react-router";
import RightAside from "./RightAside";

const HomeLayout = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <Marque />
      <Navber />

      {/* 3-column layout */}
      <div className="grid grid-cols-12 gap-4 mt-4">
        {/* Left Sidebar */}
        <aside className="col-span-3">
          <Catagory />
        </aside>

        {/* Main Content */}
        <main className="col-span-6">
          <Outlet />
        </main>

        {/* Right Sidebar */}
        <aside className="col-span-3">
          <RightAside />
        </aside>
      </div>
    </div>
  );
};

export default HomeLayout;
