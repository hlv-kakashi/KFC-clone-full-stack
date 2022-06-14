import React from "react";
import { Link } from "react-router-dom";

const Redirect = () => {
  return (
    <div style={{ width: "fit-content", margin: "auto", marginTop: "250px" }}>
      <Link to={"/api/Auth/login"}>
        <button style={{ cursor: "pointer" }}>Click to Login</button>
      </Link>
      <div
        style={{
          border: "1px solid black",
          height: "50px",
          width: "50px",
          margin: "auto",
          marginTop: "30px",
          borderRadius: "50px",
        }}
      >
        <img
          style={{ height: "50px", width: "50px", borderRadius: "50px" }}
          src="https://via.placeholder.com/140x100"
          alt="user_img"
        />
      </div>
    </div>
  );
};

export default Redirect;
