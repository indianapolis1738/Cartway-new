import React from "react";
import "../Styles/hero.scss";
import Plane from "../assets/plane.png";
import Planee from "../assets/planee.png";

const HeroSec = () => {
  return (
    <div className="hero_section">
      <div className="hero_text">
        <img src={Planee} alt="plane" className="plane_one" />
        <div className="text">
          <p className="pro_hero">
            Do delivery <strong>like a Pro</strong>
          </p>
          <p className="yellow_pro" style={{ color: "yellow" }}>
            No Get Hypertension
          </p>
          <p className="delivery_text">
            Delivery solutions for individuals, SMEs, eCommerce vendors, <br />{" "}
            and large organizations <br />{" "}
            <strong style={{ color: "yellow" }}>#WeAreSomewhereNearby</strong>
          </p>
          <div className="btns">
            <button> GooglePlay</button>
            <button>AppStore</button>
          </div>
        </div>

        <img src={Plane} alt="plane" className="plane_two" />
      </div>
      <br />
    </div>
  );
};

export default HeroSec;
