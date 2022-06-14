import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Page/Login";
import PageNotFound from "../Page/PageNotFound";
import Redirect from "../Page/Redirect";
import SignUp from "../Page/SignUp";

const AuthRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Redirect />}></Route>
        <Route path="/api/Auth/login" element={<Login />}></Route>
        <Route path="/api/Auth/signup" element={<SignUp />}></Route>
        {/* page not found */}
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </>
  );
};

export default AuthRoute;
