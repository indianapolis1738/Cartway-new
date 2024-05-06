import React from 'react'
import '../Styles/signin.scss'
import Back from "../assets/signin.png";
import { Link } from 'react-router-dom';


const SignUp = () => {
  return (
    <div className="signup">
      <div className="inner_sign_in">
        <div className="one">
          <img src={Back} alt="signin" />
        </div>
        <div className="two">
          <form className="inner_form"> <header>Sign up  😁</header>
          <div className="one_one">
            
            <label>Email</label> 
            <input type="email" placeholder="example@email.com" />
          </div>
            <div className="one_one">
                
            <label>Password</label> <br />
            <input type="password" placeholder="At least 8 characters" />
            </div>
            <p className="forgot_password">Forgot password</p>
            <button>Sign Up</button>
            <p className="no_account">
            Already have an account? <Link to='/sign-in'><b style={{ color: "#1E4AE9" }}>Sign In</b>
            </Link>
              
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp