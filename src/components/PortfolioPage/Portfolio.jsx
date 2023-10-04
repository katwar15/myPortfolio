import { TweenMax, Power3 } from "gsap";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { portfolioLinks } from "../../constants/index.jsx";
import "./Portfolio.scss";

const Portfolio = () => {
  const manageMouseEnter = (e, color) => {
    gsap.to(e.target, { backgroundColor: color, duration: 0.5 });
  };

  const manageMouseLeave = (e, color2) => {
    gsap.to(e.target, { backgroundColor: color2, duration: 0.5, delay: 0.1 });
  };

  let d1 = useRef(null);
  let d2 = useRef(null);
  let d3 = useRef(null);

  useEffect(() => {
    TweenMax.from(d1, 0.8, { opacity: 0, x: 40, ease: Power3.easeOut });
    TweenMax.from(d2, 0.8, {
      opacity: 0,
      x: 40,
      ease: Power3.easeOut,
      delay: 0.2,
    });

    TweenMax.from(d3, 0.8, {
      opacity: 0,
      x: 40,
      ease: Power3.easeOut,
      delay: 0.4,
    });
  });

  useEffect(() => {
    let textAnima = gsap.timeline();
    textAnima.from(".word", {
      y: 100,
      stagger: {
        each: 0.05,
      },
    });
  });

  return (
    <>
      <div className="container_portfolio">
        <h1 className="h1_portfolio">Portolio</h1>
        <p className=" p_portfolio">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="black_Line"></div>
      <div className="container_portfolioGroup">
        {portfolioLinks.map((proto, index) => (
          <>
            <Link
              className="link"
              onMouseEnter={(e) => {
                manageMouseEnter(e, proto.color);
              }}
              onMouseLeave={(e) => {
                manageMouseLeave(e, proto.color2);
              }}
              key={index.id}
              to={proto.to}
            >
              <div className="grid_Portfolio">
                <h1 className="h1_Grid">{proto.title}</h1>

                <div className="containerImages">
                  <img
                    src={proto.protoImg}
                    ref={(el) => (d1 = el)}
                    className="black_Div"
                  ></img>
                  <img
                    src={proto.protoImg2}
                    ref={(el) => (d2 = el)}
                    className="black_Div"
                  ></img>
                  <img
                    src={proto.protoImg3}
                    ref={(el) => (d3 = el)}
                    className="black_Div"
                  ></img>
                </div>
              </div>
            </Link>
            <div className="black_Line"></div>
          </>
        ))}
      </div>
    </>
  );
};

export default Portfolio;
