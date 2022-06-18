import React from "react";
import Bottom from "../cart_components/Bottom";
import Leftside from "../cart_components/Leftside";
import RightSide from "../cart_components/RightSide";
import "./Cart.css";
const Cart = () => {

  return (
    <div className="cart_container">
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAeCAYAAAB5c901AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABNSURBVHgB7c9BDQAgAMPAgQ4c4F8KDvABFuBHSe+9LGmZ6SsXWkY52b3yW/M5A+kMpDOQzkA6A+kMpDOQzkA6A+kMpDOQzkA6A+kMpNu9MQhKmC+cDgAAAABJRU5ErkJggg=="
        alt=""
      />
      <h1 className="my_cart_heading">MY CART</h1>
      <div className="cbox"  >
        <div className="left_side_container">
          <Leftside  />
        </div>
        <div className="rightSide_div">
          <RightSide/>
        </div>
      </div>
      <Bottom/>
    </div>
  );
};

export default Cart;