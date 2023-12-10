import HoverVideoPlayer from "react-hover-video-player";
import { useState, useEffect } from "react";

import clipFour from "../../assets/clipFour.mp4";

const MovieClipFour = () => {
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
          videoSrc={clipFour}
          style={{ height: "100%", display: "flex", width: "100%" }}
        ></HoverVideoPlayer>
      )}
      {!matches && (
        <HoverVideoPlayer
          loop={true}
          videoSrc={clipFour}
          style={{ height: "100%", display: "flex", width: "200px" }}
        ></HoverVideoPlayer>
      )}
    </>
  );
};
export default MovieClipFour;
