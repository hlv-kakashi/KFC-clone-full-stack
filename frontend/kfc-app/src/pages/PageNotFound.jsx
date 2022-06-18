import React from "react";
import Error from "../images/Error.gif";

const PageNotFound = () => {
  return (
    <div
      style={{
        width: "fit-content",
        margin: "auto",
        marginTop: "20px",
      }}
    >
      <img
        src={Error}
        alt="404-Error"
        style={{ height: "500px", marginTop: "20px" }}
      />
    </div>
  );
};

export default PageNotFound;
