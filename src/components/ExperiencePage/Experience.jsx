// import React from 'react';
import { Link } from "react-router-dom";
import arrow from "../../assets/arrow.svg";
import MovieClipOne from "../MovieClips/MovieClipOne";
import MovieClipTwo from "../MovieClips/MovieClipTwo";
import MovieClipThree from "../MovieClips/MovieClipThree";
import MovieClipFour from "../MovieClips/MovieClipFour";

import "./Experience.css";

const Experience = () => {
  return (
    <>
      <div className="experienceDiv">
        <h1 className="h1_experience">Experience</h1>
        <p className="p_experience">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <div className="gridExperience">
        <div id="item-0">
          <MovieClipFour />
        </div>

        <div id="item-1">
          <Link className="linkExpo">
            <h1 className="h1_Grid">experience</h1>
            <h1 className="h1_Grid">rok</h1>

            <img className="arrow" src={arrow}></img>
          </Link>
        </div>

        <div id="item-2">
          <Link className="linkExpo">
            <h1 className="h1_Grid">experience</h1>
            <h1 className="h1_Grid">rok</h1>

            <img className="arrow" src={arrow}></img>
          </Link>
        </div>

        <div id="item-3"></div>
        <div id="item-4">
          <MovieClipOne />
        </div>
        <div id="item-5"></div>
        <div id="item-6">
          <Link className="linkExpo">
            <h1 className="h1_Grid">experience</h1>
            <h1 className="h1_Grid">rok</h1>

            <img className="arrow" src={arrow}></img>
          </Link>
        </div>

        <div id="item-7">
          <Link className="linkExpo">
            <h1 className="h1_Grid">experience</h1>
            <h1 className="h1_Grid">rok</h1>

            <img className="arrow" src={arrow}></img>
          </Link>
        </div>
        <div id="item-8">
          <MovieClipThree />
        </div>
        <div id="item-9">
          <MovieClipTwo />
        </div>
        <div id="item-10"></div>
        <div id="item-11">
          <Link className="linkExpo">
            <h1 className="h1_Grid">experience</h1>
            <h1 className="h1_Grid">rok</h1>
            <img className="arrow" src={arrow}></img>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Experience;
