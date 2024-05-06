import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../Styles/header.scss";

const Header = () => {
  const [active, setActive] = useState(false);
  const [openNavbar, setOpenNavbar] = useState(false);
  const handleToggle = () => {
    console.log("here");
    setOpenNavbar((prev) => !prev);
    setActive((prev) => !prev);
  };
  return (
    <>
      <div className="nav_bar">
        <div className="nav_container">
          <NavLink to="/" >
            <img src={logo} className="logo" alt="Cartway-logo" />
          </NavLink>

          <MobileMenuIcon active={active} handleToggle={handleToggle} />

          <div className="nav_menu">
            <NavLink to="/markets" className="nav_link">
            Pricing
            </NavLink>

            <NavLink to="about" className="nav_link">
            Resources
            </NavLink>

            <NavLink to="/calculator" className="nav_link">
            Company
            </NavLink>
          </div>

          <div className="nav_cta">
            <Link to="/sign-in">
              <button className="signup_btn"> Sign In</button>
            </Link>
          </div>
        </div>

        {openNavbar ? <MobileNavbarModal handleToggle={handleToggle} /> : null}
      </div>
    </>
  );
};

export default Header;

export const MobileMenuIcon = ({ handleToggle, active }) => {
  return (
    <div onClick={handleToggle} className="icon">
      <span className={`icon_bar ${active ? "icon_times_one" : ""}`} />
      <span
        className={`icon_bar icon_bar_two ${
          active ? "icon_bar_two_active" : "icon_bar_two_inactive"
        }`}
      />
      <span className={`icon_bar ${active ? "icon_times_two" : ""}`} />
    </div>
  );
};

const MobileNavbarModal = ({ handleToggle }) => {
  return (
    <div className="nav_modal">
      <div className="nav_container">
        <div className="nav_menu">
          <NavLink to="/markets" className="nav_link" onClick={handleToggle}>
          Pricing
          </NavLink>

          <NavLink to="https://app.kript.africa" className="nav_link" onClick={handleToggle}>
          Resources
          </NavLink>

          <NavLink to="/about" className="nav_link" onClick={handleToggle}>
          Company
          </NavLink>
        </div>
<br />
        <div className="nav_cta">
          <Link to="/sign-in" onClick={handleToggle}>
            <button className="signup_btn">Sign In</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
