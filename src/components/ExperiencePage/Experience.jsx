// import React from 'react';
import { Link } from "react-router-dom";
import arrow from "../../assets/arrow.svg";
import MovieClipOne from "../MovieClips/MovieClipOne";
import MovieClipTwo from "../MovieClips/MovieClipTwo";
import MovieClipThree from "../MovieClips/MovieClipThree";
import MovieClipFour from "../MovieClips/MovieClipFour";
import "./Experience.css";
import pole from "/src/assets/pole.png";
import email from "/src/assets/email.png";

function Experience() {
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
          <MovieClipFour className="movieClip" />
        </div>

        <div id="item-1">
          <Link
            className="linkExpo"
            to="/experience/frontend"
            state={{
              pathname: "/experience/frontend",
              titleJob: "frontend",
              jobDescription: "lorem sdfh jhsdfk hoasdj fijasf osahf ",
              mainImg: `${pole}`,
              mainImgOne: `${pole}`,
              mainImgTwo: `${pole}`,
              mainImgThree: `${pole}`,
              toolsDescribtion: " Lorem ipsum dolor sit amet",
            }}
          >
            <h1 className="h1_Grid">experience</h1>
            <h1 className="h1_Grid">rok</h1>
            <img className="arrow" src={arrow}></img>
          </Link>
        </div>

        <div id="item-2">
          <Link
            className="linkExpo"
            to="/experience/design"
            state={{
              pathname: "/experience/design",
              titleJob: "design",
              jobDescription: "lorem sdfh jhsdfk hoasdj fijasf osahf ",
              mainImg: `${email}`,
              mainImgOne: `${email}`,
              mainImgTwo: `${email}`,
              mainImgThree: `${email}`,
              toolsDescribtion: " Lorem ipsum dolor sit amet",
            }}
          >
            <h1 className="h1_Grid">experience</h1>
            <h1 className="h1_Grid">rok</h1>
            <img className="arrow" src={arrow}></img>
          </Link>
        </div>

        <div id="item-3"></div>
        <div id="item-4">
          <MovieClipOne className="movieClip" />
        </div>
        <div id="item-5"></div>
        <div id="item-6">
          <Link
            className="linkExpo"
            to="/experience/copywriting"
            state={{
              pathname: "/experience/copywriting",
              titleJob: "copywriting",
              jobDescription: "lorem sdfh jhsdfk hoasdj fijasf osahf ",
              mainImg: `${email}`,
              mainImgOne: `${email}`,
              mainImgTwo: `${email}`,
              mainImgThree: `${email}`,
              toolsDescribtion: " Lorem ipsum dolor sit amet",
            }}
          >
            <h1 className="h1_Grid">experience</h1>
            <h1 className="h1_Grid">rok</h1>
            <img className="arrow" src={arrow}></img>
          </Link>
        </div>

        <div id="item-7">
          <Link
            className="linkExpo"
            to="/experience/university"
            state={{
              pathname: "/experience/university",
              titleJob: "university",
              jobDescription: "lorem sdfh jhsdfk hoasdj fijasf osahf ",
              mainImg: `${email}`,
              mainImgOne: `${email}`,
              mainImgTwo: `${email}`,
              mainImgThree: `${email}`,
              toolsDescribtion: " Lorem ipsum dolor sit amet",
            }}
          >
            <h1 className="h1_Grid">experience</h1>
            <h1 className="h1_Grid">rok</h1>
            <img className="arrow" src={arrow}></img>
          </Link>
        </div>
        <div id="item-8">
          <MovieClipThree className="movieClip" />
        </div>
        <div id="item-9">
          <MovieClipTwo className="movieClip" />
        </div>
        <div id="item-10"></div>
        <div id="item-11">
          <Link
            className="linkExpo"
            to="/experience/salon"
            state={{
              pathname: "/experience/salon",
              title: "salon",
              jobDescription: "lorem sdfh jhsdfk hoasdj fijasf osahf ",
              mainImg: `${email}`,
              mainImgOne: `${email}`,
              mainImgTwo: `${email}`,
              mainImgThree: `${email}`,
              toolsDescribtion: " Lorem ipsum dolor sit amet",
            }}
          >
            <h1 className="h1_Grid">experience</h1>
            <h1 className="h1_Grid">rok</h1>
            <img className="arrow" src={arrow}></img>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Experience;
