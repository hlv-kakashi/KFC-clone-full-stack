import React from "react";
import Header from "../components/Header";
import "../styles/signup.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <Header />
      <section className="signupsection">
        <div id="singupsvgdiv">
          <div className="signupsvgdiv2">
            <svg
              id="signupsvgStrip"
              viewBox="0 0 42 20"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path className="strip-1" d="M0 0h8v20H0z"></path>
              <path className="strip-2" d="M16 0h8v20h-8z"></path>
              <path className="strip-3" d="M32 0h8v20h-8z"></path>
            </svg>
          </div>
        </div>
        <div className="signupmainbox">
          <h1 id="signupTitle">CREATE AN ACCOUNT</h1>
          <div className="signupformdiv">
            <form action="" className="signupform">
              <div className="input-data">
                <input type="text" required />
                {/* <div className="underline"></div> */}
                <label>First Name*</label>
              </div>
              <div id="signuperrorBox"></div>
              <div className="input-data">
                <input type="text" required />
                {/* <div className="underline"></div> */}
                <label>Last Name*</label>
              </div>
              <div id="signuperrorBox"></div>
              <div className="input-data">
                <input type="email" name="email" id="email" required />
                {/* <div className="underline"></div> */}
                <label>Email*</label>
              </div>
              <div id="signuperrorBox"></div>
              <div className="input-data">
                <input type="password" name="password" id="password" required />
                {/* <div className="underline"></div> */}
                <label>Password*</label>
              </div>
              <div id="signuperrorBox"></div>
              <div className="checkifrequired">
                <div className="checkBoxflex">
                  <div className="checkBoxDiv">
                    <input type="checkbox" name="checkbox" id="checkboxtick" />
                  </div>
                  <div className="checkBoxText">
                    <p>
                      By selecting the box, you agree to our{" "}
                      <span className="cLink">Privacy Policy</span> and{" "}
                      <span className="cLink">Terms of Use.</span>
                    </p>
                  </div>
                </div>
                <div className="checkBoxflex">
                  <div className="checkBoxDiv">
                    <input type="checkbox" name="checkbox" id="checkboxtick2" />
                  </div>
                  <div className="checkBoxText">
                    <p>Sign up for Email updates and Promotions</p>
                  </div>
                </div>
              </div>
              <div className="signupBtndiv">
                <input type="submit" value="Create Account" />
              </div>
              <div className="redirecttologin">
                <p className="redirectlogintext">
                  Already a member?{" "}
                  <Link to={"/api/Auth/login"}>
                    <span className="redirectloginlink">Log In</span>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
