import "./ImgLoop.css";
import Img1 from "./img1";
import Img2 from "./img2";
import Img3 from "./img3";
import Img4 from "./img4";
import Img5 from "./img5";

function ImagesLoop() {
  return (
    <>
      <div className="imgLoopContainer">
        <div className="divImg1">
          <Img1 style={{ width: "30%" }} />
        </div>
        <div className="divImg2">
          <Img2 style={{ width: "30%" }} />
        </div>
        <div className="divImg3">
          <Img3 style={{ width: "32%" }} />
        </div>
        <div className="divImg4">
          <Img4 style={{ width: "28%" }} />
        </div>
        <div className="divImg5">
          <Img5 style={{ width: "25%" }} />
        </div>
      </div>
    </>
  );
}

export default ImagesLoop;
