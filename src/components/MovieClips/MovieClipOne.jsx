import HoverVideoPlayer from "react-hover-video-player";

import clipOne from "../../assets/background.mp4";

const MovieClipOne = () => {
  return (
    <>
      <HoverVideoPlayer
        videoSrc={clipOne}
        loop={true}
        style={{
          height: "190px",
          display: "flex",
          width: "99.7%",
          justifyItems: "center",
        }}
      ></HoverVideoPlayer>
    </>
  );
};
export default MovieClipOne;
