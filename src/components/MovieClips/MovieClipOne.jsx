import HoverVideoPlayer from "react-hover-video-player";
import { useState, useEffect } from "react";

import clipOne from "../../assets/background.mp4";

const MovieClipOne = () => {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 600px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  return (
    <>
      {matches && (
        <HoverVideoPlayer
          loop={true}
          videoSrc={clipOne}
          style={{ height: "100%", display: "flex", width: "100%" }}
        ></HoverVideoPlayer>
      )}
      {!matches && (
        <HoverVideoPlayer
          loop={true}
          videoSrc={clipOne}
          style={{ height: "100%", display: "flex", width: "100%" }}
        ></HoverVideoPlayer>
      )}
    </>
  );
};
export default MovieClipOne;
