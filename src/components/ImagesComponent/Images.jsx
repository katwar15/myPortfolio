// import React from "react";
import "./Images.css";

import background from "../../assets/background.mp4";

function Images() {
  return (
    <>
      <video src={background} autoPlay className="video"></video>
    </>
  );
}

export default Images;
