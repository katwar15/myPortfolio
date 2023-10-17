import HoverVideoPlayer from "react-hover-video-player";
import { useState, useEffect } from "react";

import clipThree from "../../assets/clipThree.mp4";

const MovieClipThree = () => {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  return (
    <>
      {matches && (
        <HoverVideoPlayer
          loop={true}
          videoSrc={clipThree}
          style={{ height: "200px", display: "flex", width: "100%" }}
        ></HoverVideoPlayer>
      )}
      {!matches && (
        <HoverVideoPlayer
          loop={true}
          videoSrc={clipThree}
          style={{ height: "180px", display: "flex", width: "100%" }}
        ></HoverVideoPlayer>
      )}
    </>
  );
};
export default MovieClipThree;
