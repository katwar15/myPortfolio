// import React from "react";

import background from "../../assets/background.mp4";

function VideoComponent() {
  return (
    <>
      <video src={background} autoPlay className="w-full"></video>
    </>
  );
}

export default VideoComponent;
