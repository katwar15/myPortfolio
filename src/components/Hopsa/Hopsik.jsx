import { useRef } from "react";

const Hopsik = ({ hopsaImages }) => {
  const firstImage = useRef(null);
  const secondImage = useRef(null);

  const manageMouseMove = (e) => {
    const { userX } = e;
    const xPercent = (userX / window.innerWidth) * 100;

    firstImage.current.style.width = 66.66 - xPercent * 0.33 + "%";
    secondImage.current.style.width = 33.33 + xPercent * 0.33 + "%";
  };

  return (
    <>
      <div
        className="dublaz"
        onMouseMove={(e) => {
          manageMouseMove(e);
        }}
      >
        <div ref={firstImage} className="dublazGallery">
          <div className="dublazFonda">
            <img
              className="dublazImg"
              alt={"image"}
              src={hopsaImages[0].src}
            ></img>
          </div>
        </div>
        <div ref={secondImage} className="dublazGallery">
          <div className="dublazFonda">
            <img
              className="dublazImg"
              alt={"image"}
              src={hopsaImages[1].src}
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hopsik;
