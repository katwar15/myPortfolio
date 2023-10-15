// import React from "react";
import logo from "../../assets/logo.png";
import logoToggle from "../../assets/logoToggle.png";

import { Link } from "react-router-dom";
import { mainLinks } from "../../constants/index.jsx";
import { useState } from "react";
import "./Navbar.css";
import { BiMenu, BiX } from "react-icons/bi";

const Navbar = () => {
  const [toggle, showMenu] = useState(false);

  return (
    <header className="header">
      <nav className="nav">
        <Link to="/">
          <img className="logo" src={logo}></img>
        </Link>

        <div className={toggle ? "nav_menu show_menu" : "nav_menu"}>
          <Link to="/" className="show_menu_logo">
            <img className="show_menu_logo" src={logoToggle}></img>
          </Link>

          <ul className="nav_list">
            {mainLinks.map((e) => (
              <li className="nav_item" key={e.id}>
                <Link className="nav_link" to={e.to}>
                  {e.title}
                </Link>
              </li>
            ))}
          </ul>
          <i className="nav_close" onClick={() => showMenu(!toggle)}>
            <BiX />
          </i>
        </div>
        <div className="nav_toggle" onClick={() => showMenu(!toggle)}>
          <BiMenu />
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
