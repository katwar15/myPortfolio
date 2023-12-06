import { useRef } from "react";
import gsap from "gsap";

import knit from "../../assets/knit.jpg";
import jacht from "../../assets/jacht.jpg";
import szopki from "../../assets/szopki.jpg";
import dzialeczka from "../../assets/dzialeczka.jpg";
import kodulec from "../../assets/kodulec.jpg";
import jaHel from "../../assets/jaHel.jpg";

import arrow from "../../assets/arrow.svg";
// import arrowGreen from "../../assets/arrow2.svg";
import arrowWhite from "../../assets/arrow4.svg";

import "./About.css";
import { useState } from "react";

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

  const [color, setColor] = useState(false);

  return (
    <>
      <div className="containerAbout" onMouseMove={(e) => manageMouseMove(e)}>
        <div className="containerNameAbout">
          <div className="containerUIAbout">
            <h1 className="h1NameAbout">about me</h1>
            <h2 className="h2RoleAbout">
              Hi there, thank you for visiting my website. I have always been
              fascinated by the world of design, and I have been drawing since I
              was a child. Back then, my drawings were mainly of a crooked Santa
              Claus, but now I create wireframes.
            </h2>
          </div>
        </div>

        <div ref={float1} className="imgFloatAbout">
          <img src={kodulec} alt="image" className="imgFloatTwoAbout" />

          <img src={szopki} alt="image" className="imgFloatThreeAbout" />
        </div>
        <div ref={float2} className="imgFloatAbout">
          <img src={knit} alt="image" className="imgFloatFourAbout" />

          <img src={jaHel} alt="image" className="imgFloatFiveAbout" />
        </div>
        <div ref={float3} className="imgFloatAbout">
          <img src={dzialeczka} alt="image" className="imgFloatSevenAbout" />
        </div>
      </div>
      <div className="aboutMore">
        <img src={jacht} alt="image" className="ryjec" width={400}></img>
        <div className="containerAbouMore">
          <h2 className="pAbout">
            I have had a diverse career, but currently I am working on designing
            websites and implementing them using React. I enjoy both aspects of
            the process equally, as there is nothing more satisfying than
            creating a complete concept and building prototypes in Figma. As for
            coding, I am currently focused on motion design and I am eager to
            improve my skills in Green Sock and Framer motion.
          </h2>
          <a
            onMouseEnter={() => setColor(true)}
            onMouseLeave={() => setColor(false)}
            className="buttonCV"
            href="/Warmuz_CV.pdf"
            download={true}
          >
            Download cv{" "}
            {color ? (
              <img className="arrowButton" src={arrowWhite}></img>
            ) : (
              <img className="arrowButton" src={arrow}></img>
            )}
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
