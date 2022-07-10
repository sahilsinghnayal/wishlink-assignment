import React, { useState } from "react";
import dress from "../Images/dress.png";
import VideoCard from "./VideoCard";

function Video() {
  // eslint-disable-next-line
  const [showbutton, setshowbutton] = useState(true);
  const favButtonPress = () => {
    var v = document.getElementsByTagName("video")[0];
    v.play();
    setshowbutton(false);
  };

  return (
    <>
      <div className="videoContainer">
        <video controls poster={dress}>
          <source
            src="https://d3g01po1nkka75.cloudfront.net/Rashi160622.mp4"
            type="video/mp4"
          />
        </video>
        <div
          style={{
            position: "absolute",
            top: "170px",
            margin: "auto",
            width: "100%",
          }}
        >
          {showbutton ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <i onClick={favButtonPress} className="fa-solid fa-play"></i>
              <h2>Shop My Closet</h2>{" "}
            </div>
          ) : (
            <div style={{"display":"flex","overflow":"scroll",marginTop: "125px"}}>
              {[1, 2, 3, 4, 5].map((item) => {
                return <VideoCard />;
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Video;
