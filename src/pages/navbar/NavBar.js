import React from "react";
import NavBarItems from "./NavBarItem";
import "./NavBar.css";
import NavBarData from "../../data/navBar.json";
const NavBar = (props) => {
  return (
    <div>
      <div className="navbar">
        <div className="navContainer">
          <h3>Booking Website</h3>
        </div>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">login</button>
        </div>
        <NavBarItems navItem={NavBarData} />
      </div>
    </div>
  );
};
export default NavBar;
