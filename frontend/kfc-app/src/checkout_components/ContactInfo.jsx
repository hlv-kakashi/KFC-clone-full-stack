import React from "react";
import { useState } from "react";

export const ContactInfo = () => {
  return (
    <div className="delivery_info_container">
      <div style={{ display: "flex" }}>
        <div style={{ width: "40%" }}>
          <h3>CONTACT INFORMATION</h3>
          <button className="sign_button_ellipse">Sign In</button>
        </div>
        <div style={{width: "60%"}}>
          <form>
            <TextInput label="First name*" />
            <TextInput label="Last name*" />
            <TextInput label="Email*" />
          </form>
          <div style={{ display: "flex", marginTop: "20px" }}>
          <input  type="checkbox" />
          <label style={{marginLeft: "10px"}} htmlFor="">
            I want to know about the cool stuff at KFC on Email & SMS (I know I
            can unsubscribe anytime).
          </label>
        </div>
        </div>
       
      </div>
    </div>
  );
};
function TextInput({ type = "text", label }) {
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div className="input-container">
      <input type={type} value={value} onChange={handleChange} />
      <label className={value && "filled"}>{label}</label>
    </div>
  );
}

export default ContactInfo;
