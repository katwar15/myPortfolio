import "./Modal.scss";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },

  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

const Modal = ({ modal, portfolioLinks }) => {
  const { active, index } = modal;

  const container = useRef(null);

  useEffect(() => {
    const moveContainerX = gsap.quickTo(container.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    const moveContainerY = gsap.quickTo(container.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    window.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      moveContainerX(clientX);
      moveContainerY(clientY);
    });
  });

  return (
    <motion.div
      ref={container}
      variants={scaleAnimation}
      initial={"initial"}
      animate={active ? "enter" : "closed"}
      className="modalContainer"
    >
      <div style={{ top: index * -100 + "%" }} className="modalSlider">
        {portfolioLinks.map((project, index) => {
          const { src, color } = project;
          return (
            <div
              key={index}
              style={{ backgroundColor: color }}
              className="modal"
            >
              <img
                src={src}
                width={300}
                height={0}
                alt="image"
                className="modalImg"
              ></img>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Modal;
