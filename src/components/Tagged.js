import React from "react";
import cardimg from "../Images/cardimg.png";

function Tagged() {
  return (
    <>
      <div className="taggedcontainer">
        <div className="head1">Tagged products(2)</div>
        <div className="cardcontainer">
          <div className="taggedCard">
            <img src={cardimg} alt="olay" />
            <h3>Olay</h3>
            <p>Olay white radiance creame</p>
            <p>
              ₹1000 <del> ₹2000</del>
            </p>
            <p className=" taggedoff">(50% Off)</p>
            <button className="taggedbtn">Shop now</button>
          </div>
          <div className="taggedCard">
            <img src={cardimg} alt="olay" />
            <h3>Olay</h3>
            <p>Olay white radiance creame</p>
            <p>
              ₹1000 <del> ₹2000</del>
            </p>
            <p className=" taggedoff">(50% Off)</p>
            <button className="taggedbtn">Shop now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tagged;
