// import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import MainPage from "./components/MainPage/MainPage";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </>
  );
}

export default App;
