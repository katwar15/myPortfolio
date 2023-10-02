// import React from 'react';
import { Link } from "react-router-dom";
import arrow from "../../assets/arrow.svg";
import { experienceLinks } from "../../constants/index.jsx";

const Experience = () => {
  return (
    <>
      <div className="flex flex-col justify-between items-start px-14 mx-14 pt-10">
        <h1 className="text-blackP pb-5">Experience</h1>
        <p className=" text-blackP text-2xl	 pr-56 pb-14">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <div className="flex flex-col pt-2">
        <div className="w-full h-0.5 bg-blackP"></div>
        {experienceLinks.map((e) => (
          <>
            <Link key={e.id} to={e.to} className="w-full  hover:bg-colorVerde">
              <div className="  h-20  grid grid-rows-1 grid-cols-3  px-14 mx-14 ">
                <h1 className="text-blackP self-center text-4xl	justify-self-start">
                  {e.title}
                </h1>
                <h1 className="text-blackP self-center	text-4xl justify-self-end">
                  {e.rok}
                </h1>

                <img className="self-center justify-self-end	" src={arrow}></img>
              </div>
            </Link>
            <div className="w-full h-0.5 bg-blackP"></div>
          </>
        ))}
      </div>

      <div className="flex flex-col pt-2">
        <div className="w-full h-0.5 bg-blackP"></div>
        {experienceLinks.map((e) => (
          <>
            <Link key={e.id} to={e.to} className="w-full  hover:bg-colorVerde">
              <div className="  h-20  grid grid-rows-1 grid-cols-3  px-14 mx-14 ">
                <h1 className="text-blackP font-helveticaOutline  self-center text-4xl	justify-self-start">
                  {e.title}
                </h1>
                <h1 className="text-blackP font-helveticaOutline self-center	text-4xl justify-self-end">
                  {e.rok}
                </h1>

                <img
                  className="self-center justify-self-end	"
                  src={e.imageUrl}
                ></img>
              </div>
            </Link>
            <div className="w-full h-0.5 bg-blackP"></div>
          </>
        ))}
      </div>
    </>
  );
};

export default Experience;
