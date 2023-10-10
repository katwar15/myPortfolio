// import React from "react";
import logo from "../../assets/logo.png";

import { Link } from "react-router-dom";
import { mainLinks } from "../../constants/index.jsx";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex justify-between items-center py-6 navbar">
      <div className="container flex justify-between items-center mx-14 px-14 md:px-14 lg:24px">
        <img src={logo} alt="logo" className="w-20 h-20 z-40 mr-5"></img>
        <div className=" md:flex space-x-12 items-center">
          {/* better make hidden on smaller device and then establish that on larger divices navbar is not hidden */}
          <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            {mainLinks.map((e, index) => (
              <li key={e.id}>
                <Link
                  className={`font-helveticaBold cursor-pointer text-blackP flex justify-items-center uppercase pr-5 py-5 text-lg transition duration-500 ease-in-out	hover:text-colorVerde  ${
                    index === mainLinks.length - 1 ? "mr-0" : "mr-10"
                  }`}
                  to={e.to}
                >
                  {e.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="sm:hidden flex flex-1 justify-end items-center w-full">
          {toggle ? (
            <button
              alt="menu"
              onClick={() => setToggle((prev) => !prev)}
              className="border-2 border-blackP font-helveticaBold cursor-pointer flex justify-items-center align-center uppercase p-1 text-xl center"
            >
              menu
            </button>
          ) : (
            <button
              alt="menu"
              onClick={() => setToggle((prev) => !prev)}
              className="border-2 border-blackP font-helveticaBold cursor-pointer flex justify-items-center align-center uppercase p-1 text-xl center"
            >
              close
            </button>
          )}
          <div
            className={`${
              toggle ? "hidden" : "flex"
            } bg-whiteP h-vh pt-20 pb-12 absolute top-20 right-0 flex flex-col my-2 min-w-] w-full sidebar`}
          >
            <ul className="list-none flex flex-col justify-start justify-items-start  items-start flex-1">
              {mainLinks.map((e, index) => (
                <li key={e.id}>
                  <Link
                    className={`font-helveticaBold cursor-pointer flex uppercase pr-5 pl-14 ml-14  py-5 text-5xl	hover:text-colorVerde ${
                      index === mainLinks.length - 1 ? "mr-0" : "mb-4"
                    }`}
                    to={e.to}
                  >
                    {e.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
