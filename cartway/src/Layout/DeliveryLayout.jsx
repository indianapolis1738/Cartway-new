import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "../Styles/deliverytab.scss";
import Salad from "../assets/salad.png";
import Desert from "../assets/deserts.png";
import Pasta from "../assets/pasta.png";
import Box from "../assets/box.png";
import Marquee from "react-fast-marquee";
import Star from "../assets/star.png";
import Slider from "../Reuseable/Slider";

const DeliveryLayout = () => {
  return (
    <div>
      <div className="links">
        <NavLink end>Local Delivery</NavLink>
        <NavLink to="interstate">Interstate</NavLink>
      </div>
      <div className="outlet">
        <Outlet />
      </div>
      <div className="find_deals">
        <div className="one">
          <p className="find_deals_text">
            Find deals, <b style={{ color: "#B80208" }}>free delivery,</b> and
            more from our restaurant partners.
          </p>
          <button>Order Now</button>
        </div>
        <div className="two">
          <img src={Pasta} alt="pasta" />
          <img src={Salad} alt="salad" />
          <img src={Desert} alt="Desert" />
        </div>
      </div>
      <div className="carter_div">
        <div className="one">
          <div className="one_div">
            <header>Individual</header>
            <p>Our team of dedicated riders is commit....</p>
          </div>
          <div className="two_div">
            <header>SMEs & Vendors</header>
            <p>Our team of dedicated riders is commit....</p>
          </div>
          <div className="three_div">
            <header>Organization</header>
            <p>Our team of dedicated riders is commit....</p>
          </div>
        </div>
        <div className="two">
          <header>We cater for all delivery needs</header>
          <div className="btn">
            <button>Get Started</button>
            <img src={Box} alt="box" />
          </div>
        </div>
      </div>
      <Marquee className="marq">
        <span>
          <img src={Star} alt="Star" /> On Demand Delivery
        </span>{" "}
        &nbsp; &nbsp;
        <span>
          <img src={Star} alt="Star" /> eCommerce Warehousing
        </span>
        &nbsp; &nbsp;
        <span>
          <img src={Star} alt="Star" /> Food Delivery
        </span>
        &nbsp; &nbsp;
        <span>
          <img src={Star} alt="Star" /> Parcel Delivery
        </span>
        &nbsp; &nbsp;
      </Marquee>
      <div className="testimonials">
        <header>Testimonials</header>
        <Slider/>
      </div>
    </div>
  );
};

export default DeliveryLayout;
