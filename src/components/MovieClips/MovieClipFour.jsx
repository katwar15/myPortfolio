import HoverVideoPlayer from "react-hover-video-player";

import clipFour from "../../assets/clipFour.mp4";

const MovieClipFour = () => {
  return (
    <>
      <HoverVideoPlayer
        loop={true}
        videoSrc={clipFour}
        style={{ height: "200px", display: "flex", width: "100%" }}
      ></HoverVideoPlayer>
    </>
  );
};
export default MovieClipFour;
