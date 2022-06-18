import React from "react";
import "./DeliverInfo.css";

const DeliveryInfo = () => {
  return (
    <div className="delivery_info_container">
      <div style={{ display: "flex" }}>
        <div style={{ width: "40%" }}>
          <h3>DELIVERY INFO</h3>
        </div>
        <div>
          <div style={{ display: "flex" }}>
            <img
              src="https://online.kfc.co.in/static/media/LocationOn.f57c1dfd.svg"
              alt=""
            />
            <p style={{ marginLeft: "20px" }}>KFC Delhi - CP1</p>
          </div>
          <p style={{ marginLeft: "20px", marginTop: "-10px"}}>New Delhi, Delhi 110001, India</p>
          <p>Address 2</p>
          <input className="input_style"
            type="text"
            placeholder="Appartment, suite, unit, building, floor"
          />
          <div style={{display: "flex"}}>
            <img src="https://online.kfc.co.in/static/media/WatchLater.3ca73ea2.svg" alt="" />
            <h4 style={{marginLeft: "20px"}}>ASAP</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryInfo;
