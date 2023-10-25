import { useEffect } from "react";
import { useState } from "react";
import pole from "/src/assets/pole.png";
import email from "/src/assets/email.png";
import spokoj from "/src/assets/spokoj.png";
import format from "/src/assets/format.png";
import "./ImgLoop.css";

function Img5() {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);
  }, []);

  const images = [pole, email, spokoj, format];

  return (
    <>
      <img className="loomImg1" src={images[imageIndex]}></img>
    </>
  );
}

export default Img5;
