// import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import MarqueeComponent from "./components/MaqueeComponent/MarqueeComponent";
import MainPage from "./components/MainPage/MainPage";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
        <MarqueeComponent />
      </BrowserRouter>
      {/* <Footer /> */}
    </>
  );
}

export default App;
