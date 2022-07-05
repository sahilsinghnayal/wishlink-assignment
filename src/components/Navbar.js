import React from "react";
import left from "../Images/left.png";
import profile from "../Images/profile.png";
import verified from "../Images/verified.png"

import "../App.css";
function Navbar() {
  return (
    <div className="nav">
      <button className="navbtn">
        <img src={left} alt="leftbtn" />
      </button>
      <div className="profileimg">
        <img src={profile} alt="profileimg" />
      </div>
      <div className="navname"> <p>Maiteryi dutta <img src={verified} alt="" /></p> </div>
    
      <i className="fa-solid fa-magnifying-glass"></i>
        
    </div>
  );
}

export default Navbar;
