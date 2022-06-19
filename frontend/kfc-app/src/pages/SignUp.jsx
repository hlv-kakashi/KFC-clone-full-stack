import React, { useState } from "react";
// import Header from "../AuthHeader_Component/AuthHeader";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();
  // const notify = () =>
  //   toast.success("Account Created Successfully", {
  //     position: "top-center",
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //   });

  async function registerUser(event) {
    event.preventDefault();
    const response = await fetch("https://kfcapi.herokuapp.com/Auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        password,
      }),
    });
    const data = await response.json();
    if (data) {
      // notify();
      alert("Account Created Successfully");
      const timer = setTimeout(() => {
        navigate("/api/Auth/login");
      }, 2000);
      return () => clearTimeout(timer);
    }
    console.log("data:", data);
  }
  return (
    <>
      {/* <Header /> */}
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
            <form onSubmit={registerUser} className="signupform">
              <div className="input-data">
                <input
                  type="text"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  required
                />
                {/* <div className="underline"></div> */}
                <label>First Name*</label>
              </div>
              <div id="signuperrorBox"></div>
              <div className="input-data">
                <input
                  type="text"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  required
                />
                {/* <div className="underline"></div> */}
                <label>Last Name*</label>
              </div>
              <div id="signuperrorBox"></div>
              <div className="input-data">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {/* <div className="underline"></div> */}
                <label>Email*</label>
              </div>
              <div id="signuperrorBox"></div>
              <div className="input-data">
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
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
      {/* <ToastContainer /> */}
    </>
  );
};

export default SignUp;
