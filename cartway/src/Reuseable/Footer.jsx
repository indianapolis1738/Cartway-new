import React from "react";
import "../Styles/footer.scss";
import Phone from "../assets/phone.png";
import Logo from "../assets/logo.png";

import Facebook from "../assets/facebook.png";
import X from "../assets/X.png";
import Instagram from "../assets/instagram.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="inner_footer">
        <div className="one">
          <header>50% Off Your First Delivery!</header>
          <p>
            New to Cartway? Get 50% off your delivery when you use the promo
            code <b style={{ color: "yellow" }}>“50FIRST”</b> for the first time
            order only, valid for 30 days once redeemed
          </p>
          <div className="btns">
            <button>App Store</button>
            <button>Play Store</button>
          </div>
        </div>
        <div className="two">
          <img src={Phone} alt="phone" />
        </div>
      </div>{" "}
      <br />
      <footer className="inner_foot">
        <p>Faq</p>
        <p>Pricing</p>
        <p>Company</p>
        <p>Resources</p>
      </footer>
      <footer className="inner_foot_two">
        <img src={Logo} alt="Cartway" />
        <div className="mail">
          <a href="mailto:hello@cartwayhq.com">hello@cartwayhq.com</a>
          <a href="tel:+234 70 3647 282">+234 70 3647 282</a>
        </div>
        <div className="socials">
          <div className="socials_icon">
            <a href="">
              <img src={Facebook} alt="Facebook" />
            </a>
            <a href="">
              <img src={X} alt="X" />
            </a>
            <a href="">
              <img src={Instagram} alt="Instagram" />
            </a>
          </div>
          <address>28 New Court Rd, Dugbe - Ogunpa Rd, Ibadan</address>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
