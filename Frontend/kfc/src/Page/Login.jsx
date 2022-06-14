import React from "react";
import Header from "../components/Header";
import "../styles/login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Header />
      <section className="loginSection">
        <div id="loginSvgdiv">
          <div className="loginSvgdiv2">
            <svg
              id="loginsvgStrip"
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
        <div className="loginmainbox">
          <h1 id="loginTitle">LOG IN TO KFC</h1>
          <div className="loginFormdiv">
              <form action="" id="loginForm">
                    <div className="input-data">
                          <input type="email" name="email" id="email" required/>
                          {/* <div className="underline"></div> */}
                          <label>Email</label>
                    </div>
                    <div id="loginerrorBox"></div>
                    <div className="input-data">
                          <input type="password" name="password" id="password" required/>
                          {/* <div className="underline"></div> */}
                          <label>Password</label>
                    </div>
                    <div id="loginerrorBox"></div>
                    <div className="loginterms">
                        <p className="logintermtext">By logging into the application or proceeding as a guest, you agree to our <span className="logintermlink">Privacy Policy</span> and <span className="logintermlink">Terms of Use</span>.</p>
                    </div>
                    <div className="loginBtndiv">
                      <input type="submit" value="Log In" />
                    </div>
                    <div className="redirecttosignup">
                      <p className="redirectsignuptext">Don't have an account? <Link to={"/api/Auth/signup"}><span className="redirectsignuplink">Join Now</span></Link></p>
                    </div>
              </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
