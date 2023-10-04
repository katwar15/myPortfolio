// import React from "react";
// import { Link } from "react-router-dom";
// import { mainLinks } from "../../constants/index.jsx";
import Experience from "../ExperiencePage/Experience";
import Portfolio from "../PortfolioPage/Portfolio";

import MarqueeComponent from "../MaqueeComponent/MarqueeComponent";
import Hero from "./Hero";
import VideoComponent from "../VideoComponent/VideoComponent";

const MainPage = () => {
  return (
    <>
      <VideoComponent />
      <Hero />
      <MarqueeComponent />
      <Portfolio />
      <Experience />
    </>
  );
};

export default MainPage;
