import "./Hopsa.css";

import { motion } from "framer-motion";
import { useState } from "react";

const animation = {
  initial: { width: 0 },
  open: {
    width: "auto",
    transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
  },
  closed: { width: 0 },
};

const GalleryList = ({ gallery }) => {
  const [isActive, setIsActive] = useState(false);

  const { job, years, src } = gallery;

  return (
    <>
      <div
        onMouseEnter={() => {
          setIsActive(true);
        }}
        onMouseLeave={() => {
          setIsActive(false);
        }}
        className="listGalleryComponent"
      >
        <p>{job}</p>
        <motion.div
          variants={animation}
          animate={isActive ? "open" : "closed"}
          className="imgListGallery"
        >
          <img src={src}></img>
        </motion.div>
        <p>{years}</p>
      </div>
    </>
  );
};

export default GalleryList;
