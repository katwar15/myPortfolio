// import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import AboutPage from "./components/AboutComponent/About";
import ScrollToTop from "./components/AdditionalComponents/ScrollToTop";
// import Cursor from "./components/AdditionalComponents/Cursor";
import Experience from "./components/ExperiencePage/Experience";
import Footer from "./components/Footer/Footer";
import Job from "./components/JobComponent/Job";
import MainPage from "./components/MainPage/MainPage";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/PortfolioPage/Portfolio";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        {/* <Cursor /> */}
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/experience/frontend" element={<Job />} />
          <Route path="/experience/design" element={<Job />} />
          <Route path="/experience/copywriting" element={<Job />} />
          <Route path="/experience/university" element={<Job />} />
          <Route path="/experience/salon" element={<Job />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
