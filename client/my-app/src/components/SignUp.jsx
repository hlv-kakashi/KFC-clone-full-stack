import React, { useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function TextInput({ type, label, name, handleChange,value }) {

  return (
    <div className="input-container">
      <input name={name} type={type} onChange={(e) => handleChange(e)} />
      <label className={value && "filled"}>{label}</label>
    </div>
  );
}

export default function SignUp() {
    const [value, setValue] = useState();


  const navigate = useNavigate();
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    rePassword: "",
  });

  function handleChange(e) {
    setValue(e.target.value);
    const { value, name } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    const { first_name, last_name, email, password, rePassword } = user;
    if (first_name && last_name && email && password == rePassword) {
      axios.post("http://localhost:9002/register", user).then((res) => {
        alert(res.data.message);
        if (res.data.message == "Successfully Registered, Please Login Now.") {
          navigate("/login");
        }
      });
    } else {
      alert("invalid input");
    }
  }
  console.log(user);
  return (
    <div className="App">
          
      <div className="borderBox">
        <form onSubmit={handleSubmit}>
        <div className="red_boxes">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <h1>CREATE AN ACCOUNT</h1>
          <TextInput
            name="first_name"
            type="text"
            label="First Name*"
            handleChange={handleChange}
            value={value}
          />
          <TextInput
            name="last_name"
            type="text"
            label="Last Name*"
            handleChange={handleChange}
            value={value}
          />
          <TextInput
            name="email"
            type="text"
            label="Email*"
            handleChange={handleChange}
            value={value}
          />
          <TextInput
            name="password"
            type="Password"
            label="Password*"
            handleChange={handleChange}
            value={value}
          />
          <TextInput
            name="rePassword"
            type="Password"
            label="Confirm Password*"
            handleChange={handleChange}
            value={value}
          />
          <div style={{ display: "flex", gap: "20px" }}>
            <input type="checkbox" />
            <label>
              By selecting the box, you agree to our Privacy Policy and Terms of
              Use.
            </label>
          </div>
          <div style={{ display: "flex", gap: "20px" }}>
            <input type="checkbox" />
            <label>Sign up for Email updates and Promotions</label>
          </div>
          <button className="create_account_button" type="submit">
            Create Account
          </button>
          <div style={{ display: "flex" }}>
            <p>Already a member?</p>
            <Link style={{ marginTop: "15px" }} to="/login">
              login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
