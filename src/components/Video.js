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
        {showbutton ? (
          <div className="buttonvideo">
            <svg onClick={favButtonPress}
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              style={{backgroundColor:"white",color:"black",borderRadius:"22px",padding:"4px"}}
              fill="currentColor"
              class="bi bi-play"
              viewBox="0 0 16 16"
            >
              <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" />
            </svg>
            
            <h2>Shop My Closet</h2>{" "}
          </div>
        ) : (
          <VideoCard />
        )}
      </div>
    </>
  );
}

export default Video;
