import HoverVideoPlayer from "react-hover-video-player";

import clipTwo from "../../assets/clipTwo.mp4";

const MovieClipTwo = () => {
  return (
    <>
      <HoverVideoPlayer
        loop={true}
        videoSrc={clipTwo}
        style={{ height: "200px", display: "flex", width: "100%" }}
      ></HoverVideoPlayer>
    </>
  );
};
export default MovieClipTwo;
