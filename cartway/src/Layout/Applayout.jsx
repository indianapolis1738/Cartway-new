import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Reuseable/Header";
import Footer from "../Reuseable/Footer";

const Applayout = () => {
  return (
    <div>
      <Header />
      <div className="outlet_div">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};

export default Applayout;
