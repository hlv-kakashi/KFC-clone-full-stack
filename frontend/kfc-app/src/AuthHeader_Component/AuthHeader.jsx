import React from "react";
import authHeaderLogo from "../images/authHeaderLogo.PNG";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="authHeaderSection">
        <div className="authHeaderLogo">
          <Link to={"/"}>
            <img id="authlogo" src={authHeaderLogo} alt="logo" />
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
