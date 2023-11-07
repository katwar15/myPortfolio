// import ImagesLoop from "../ImgLoopBackground/ImgLoop";
import "./Hero.css";

import {
  behance,
  pole,
  email,
  spokoj,
  format,
  github,
} from "../../constants/index.jsx";
import { useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  const float1 = useRef(null);
  const float2 = useRef(null);
  const float3 = useRef(null);

  const speed = 0.1;

  const manageMouseMove = (e) => {
    const { movementX, movementY } = e;
    gsap.set(float1.current, {
      x: `+=${movementX * speed}`,
      y: `+=${movementY * speed}`,
    });
    gsap.set(float2.current, {
      x: `+=${movementX * speed * 0.5}`,
      y: `+=${movementY * speed * 0.5}`,
    });
    gsap.set(float3.current, {
      x: `+=${movementX * speed * 0.25}`,
      y: `+=${movementY * speed * 0.25}`,
    });
  };

  return (
    <>
      <div className="containerHero" onMouseMove={(e) => manageMouseMove(e)}>
        <div className="containerName">
          <div className="containerUI">
            <h1 className="h1Name ">katarzyna warmuz</h1>
            <h2 className="h2Role">
              ui / ux designer ... and a little bit of frontend
            </h2>
          </div>
        </div>
        <div ref={float1} className="imgFloat">
          <img src={behance} alt="image" width={400} className="imgFloatOne" />

          <img src={pole} alt="image" width={350} className="imgFloatOne" />

          <img src={email} alt="image" width={300} className="imgFloatTwo" />

          <img src={spokoj} alt="image" width={250} className="imgFloatThree" />
        </div>

        <div ref={float2} className="imgFloat">
          <img src={format} alt="image" width={280} className="imgFloatFour" />

          <img src={github} alt="image" width={325} className="imgFloatFive" />

          <img src={behance} alt="image" width={250} className="imgFloatSix" />
        </div>

        <div ref={float3} className="imgFloat">
          <img src={pole} alt="image" width={200} className="imgFloatSeven" />

          <img src={pole} alt="image" width={200} className="imgFloatEight" />
        </div>
      </div>
    </>
  );
};

export default Hero;
