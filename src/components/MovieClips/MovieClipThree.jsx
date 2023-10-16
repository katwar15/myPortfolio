import HoverVideoPlayer from "react-hover-video-player";

import clipThree from "../../assets/clipThree.mp4";

const MovieClipThree = () => {
  return (
    <>
      <HoverVideoPlayer
        loop={true}
        videoSrc={clipThree}
        style={{ height: "200px", display: "flex", width: "100%" }}
      ></HoverVideoPlayer>
    </>
  );
};
export default MovieClipThree;
