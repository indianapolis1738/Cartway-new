import React from "react";
import "../Styles/deliverytab.scss";
import Rider from "../assets/deliveryOne.png";

const Delivery = () => {
  return (
    <div className="delivery_div">
      <div className="one">
        <p className="bold_send">
          Send packages across <br />
          Ibadan
        </p>
        <p className="bold_deliver">
          Make a delivery request and get your riders in minutes. <br />
          Delivery as low as
        </p>
        <p className="bold_price">
          <strong style={{ color: "red" }}>₦900</strong>
        </p>
        <button>Get Started</button>
      </div>
      <div className="two">
        <img src={Rider} alt="rider" />
      </div>
    </div>
  );
};

export default Delivery;
