// import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import AboutPage from "./components/AboutComponent/About";
// import Cursor from "./components/Cursor/Cursor";
import Experience from "./components/ExperiencePage/Experience";
import Footer from "./components/Footer/Footer";
import MainPage from "./components/MainPage/MainPage";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/PortfolioPage/Portfolio";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* <Cursor /> */}
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* <Footer /> */}
    </>
  );
}

export default App;
