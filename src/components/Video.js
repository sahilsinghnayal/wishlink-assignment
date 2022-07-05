import React, { useState } from "react";
import dress from "../Images/dress.png";

function Video() {
  const [play, setPlay] = useState(false);
  const [showbutton, setshowbutton] = useState(true);
  const favButtonPress = () => {
    setPlay(true);
    var v = document.getElementsByTagName("video")[0];
    v.play();
    setshowbutton(false);
  };
  const videoPress = () => {
    setPlay(false);
  };

  return (
    <>
      <div className="videoContainer">
        <video onClick={videoPress} controls poster={dress}>
          <source
            src="https://d3g01po1nkka75.cloudfront.net/Rashi160622.mp4"
            type="video/mp4"
          />
        </video>
        {showbutton ? (
          <>
            <i onClick={favButtonPress} className="fa-solid fa-play"></i>
            <h2>Shop My Closet</h2>{" "}
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default Video;
