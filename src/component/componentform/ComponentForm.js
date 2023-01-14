import React from "react";
import "./ComponentForm.css";
const ComponentForm = () => {
  return (
    <div className="class-form">
      <h1 className="conten4a">Save time, save money!</h1>
      <h5 className="conten4b">Sign up and we'll send the best deals to you</h5>
      <div className="conten4c">
        <input className="conten4d" type="text" placeholder="Your Email" />
        <label className="conten4e" htmlFor="lname">
          Subscribe
        </label>
      </div>
    </div>
  );
};
export default ComponentForm;
