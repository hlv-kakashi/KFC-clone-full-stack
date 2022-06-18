import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function TextInput({ type, label, name, handleChange, value }) {
    // const handleclick = () => {
    //     let value = 1;
    // }
  return (
    <div className="input-container">
      <input name={name} type={type}  onChange={(e) => handleChange(e)} />
      <label className={value && "filled"}>{label}</label>
    </div>
  );
}

export default function LogIn({ setLoginUser }) {
  let navigate = useNavigate();
  const [user, setUser] = useState({});
  const [value, setValue] = useState();
  function handleChange(e) {
    setValue(e.target.value);
    const { value, name } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  }
  function handlSubmit(e) {
    e.preventDefault();
    axios.post("http://localhost:9002/login", user).then((res) => {
      alert(res.data.message);
      setLoginUser(res.data.user);
      if (res.data.message == "Login Successful") navigate("/");
    });
  }
  console.log(user);
  return (
    <div className="App">
      <div className="borderBoxLogin">
        <form onSubmit={handlSubmit}>
          <div className="red_boxes">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <h1>LOG IN TO KFC</h1>
          <TextInput name="email" label="Email" handleChange={handleChange} value={value} />
          <TextInput
            name="password"
            type="Password"
            label="Password"
            value={value}
            handleChange={handleChange}
          />
          <p style={{ fontSize: "small" }}>
            By logging into the application or proceeding as a guest, you agree
            to our Privacy Policy and Terms of Use.
          </p>
          <button className="log_in_button" type="submit">
            Log In
          </button>
          <div style={{ display: "flex" }}>
            <p>Don't have an account?</p>
            <Link style={{ marginTop: "15px" }} to="/register">
              Join Now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
