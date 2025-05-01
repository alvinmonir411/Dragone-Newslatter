import React from "react";
import Header from "../Components/Header";
import Navber from "./Navber";
import Marque from "./Marque";
const HomeLayout = () => {
  return (
    <>
      <header className="container mx-auto">
        <Header></Header>
        <Marque></Marque>
        <Navber></Navber>
      </header>
    </>
  );
};

export default HomeLayout;
