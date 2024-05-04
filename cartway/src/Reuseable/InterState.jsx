import React from "react";
import "../Styles/deliverytab.scss";
import Bus from "../assets/bus.png";
import { TypeAnimation } from "react-type-animation";

const InterState = () => {
  return (
    <div className="delivery_interstate">
      <div className="one">
        <p className="bold_send">
          Send packages from <br /> Ibadan to other states <br /> like &nbsp;
          <b style={{ color: "#B80208" }}>
            {" "}
            "
            <TypeAnimation
              sequence={[
                "Abuja", // Types 'One'
                2000, // Waits 2s
                "Lagos", // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                "Port Harcourt", // Types 'One'
                2000, // Waits 2s
                "and Benin", // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                "all states", // Deletes 'One' and types 'Two'
                2000, // Waits 2s
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              speed={40}
              style={{
                fontSize: "1em",
                whiteSpace: "pre-line",
                color: "#B80208",
              }}
            />
            "
          </b>
        </p>
        <p className="bold_deliver">
        Break boundaries and enjoy doorstep pickup in <br /><br /> ibadan and delivery to every state in Nigeria
        </p>
        <button>Get Started</button>
      </div>
      <div className="two">
        <img src={Bus} alt="bus" />
      </div>
    </div>
  );
};

export default InterState;
