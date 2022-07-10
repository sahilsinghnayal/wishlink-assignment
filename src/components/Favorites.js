import React from 'react'
import cardimg from "../Images/cardimg.png";
import img1 from "../Images/img1.png";
import img2 from "../Images/img2.png";
import img3 from "../Images/img3.png";
import dress from "../Images/dress.png";

function Favorites() {
    const Link2="https://home.wishlink.com/"
    return (
    <div className="favoritecontainer">
    <div className="head1">More From My Favourite</div>
    <p>Shop all my posts specially currated for you </p>
    <div className="colcontainer">
      <div className="col1">
        <img className="img1_col1" src={img1} alt="img1" />
        <img className="dress_col1" src={dress} alt="dress" />
        <img className="img2_col1" src={img2} alt="img2" />
        <img className="img3_col1" src={img3} alt="img3" />
      </div>
      <div className="col1">
        <img className="dress_col1" src={dress} alt="img1" />
        <img className="img1_col1" src={img1} alt="dress" />
        <img className="img1_col1" src={img1} alt="img2" />
        <img className="img3_col1" src={img3} alt="img3" />
      </div>
      
    </div>
    <div className="footercontainer">  
    <button className="favoritecontainerbtn"><a href={Link2} target="_blank" rel="noreferrer">See All Products</a></button>
    <p className="footer">Powerd By Wishlink</p>
    </div>
  </div>
  )
}

export default Favorites