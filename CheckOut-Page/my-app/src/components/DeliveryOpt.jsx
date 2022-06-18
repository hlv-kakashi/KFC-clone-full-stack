import React, { useState } from "react";

const DeliveryOpt = () => {
  const [show, setShow] = useState(false);

  const handleClickTrue = () => {
    setShow(true);
  };
  const handleClickFalse = () => {
    setShow(false);
  };
  return (
    <div className="delivery_info_container">
      <div style={{ display: "flex" }}>
        <div style={{ width: "40%" }}>
          <h3>DELIVERY OPTIONS</h3>
        </div>
        <div style={{ width: "60%" }}>
          <div style={{ display: "flex" }}>
            <input name="leaveit" type="radio" />
            <label style={{marginLeft: "10px"}} htmlFor="leaveit" onClick={handleClickFalse}>
              Leave at my door
            </label>
          </div>
          <p>
            To protect you and our team, we practice contactless delivery. Your
            driver will leave the order at your door, knock, step away, and wait
            at a safe distance for you to collect your food.
          </p>
          <div style={{ display: "flex" }}>
            <input type="radio" onClick={handleClickTrue} name="leaveit" />
            <label style={{marginLeft: "10px"}} htmlFor="handit">Hand it to me</label>
          </div>
          <hr />
          {show ? (
            <input
              className="jaduInput"
              type="text"
              placeholder="Input Delivery Instructions(Optional)*"
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default DeliveryOpt;
