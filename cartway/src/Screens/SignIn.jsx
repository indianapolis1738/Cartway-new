import React from "react";
import "../Styles/signup.scss";
import Back from "../assets/signin.png";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="signin">
      <div className="inner_sign_in">
        <div className="one">
          <img src={Back} alt="signin" />
        </div>
        <div className="two">
          <form className="inner_form"> <header>Sign In 👋</header>
          <div className="one_one">
            
            <label>Email</label> 
            <input type="email" placeholder="example@email.com" />
          </div>
            <div className="one_one">
                
            <label>Password</label> <br />
            <input type="password" placeholder="At least 8 characters" />
            </div>
            <p className="forgot_password">Forgot password</p>
            <button>Sign in</button>
            <p className="no_account">
              Don’t have an account? <Link to='/sign-up'>
              <b style={{ color: "#1E4AE9" }}>Sign Up</b>
              </Link>
              
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
