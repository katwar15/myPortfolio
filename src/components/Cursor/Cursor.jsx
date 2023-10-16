import "./Cursor.css";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

const Cursor = () => {
  const cursorSize = 20;

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothValues = { damping: 20, stiffness: 300, mass: 0.5 };

  const smoothCursor = {
    x: useSpring(mouse.x, smoothValues),
    y: useSpring(mouse.y, smoothValues),
  };

  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  });

  return (
    <motion.div
      className="cursor"
      style={{ left: smoothCursor.x, top: smoothCursor.y }}
    ></motion.div>
  );
};

export default Cursor;
