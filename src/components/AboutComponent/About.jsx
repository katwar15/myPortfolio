import { useRef } from "react";
import gsap from "gsap";

import knit from "../../assets/knit.jpg";
import jacht from "../../assets/jacht.jpg";
import szopki from "../../assets/szopki.jpg";
import dzialeczka from "../../assets/dzialeczka.jpg";
import kodulec from "../../assets/kodulec.jpg";

import "./About.css";

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
      <div className="containerAbout" onMouseMove={(e) => manageMouseMove(e)}>
        <div className="containerNameAbout">
          <div className="containerUIAbout">
            <h1 className="h1NameAbout">about me</h1>
            <h2 className="h2RoleAbout">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </h2>
          </div>
        </div>

        <div ref={float1} className="imgFloatAbout">
          <img
            src={kodulec}
            alt="image"
            width={170}
            className="imgFloatTwoAbout"
          />

          <img
            src={szopki}
            alt="image"
            width={250}
            className="imgFloatThreeAbout"
          />
        </div>
        <div ref={float2} className="imgFloatAbout">
          <img
            src={knit}
            alt="image"
            width={200}
            className="imgFloatFourAbout"
          />

          <img
            src={jacht}
            alt="image"
            width={280}
            className="imgFloatFiveAbout"
          />
        </div>
        <div ref={float3} className="imgFloatAbout">
          <img
            src={dzialeczka}
            alt="image"
            width={200}
            className="imgFloatSevenAbout"
          />
        </div>
      </div>
      <div className="aboutButton">
        <a className="buttonCV" href="/Warmuz_CV.pdf" download={true}>
          Download cv
        </a>

        <div className="containerUIAbout">
          <h2 className="pAbout">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </h2>
        </div>
      </div>
    </>
  );
};

export default Hero;
