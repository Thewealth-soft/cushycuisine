import React, { useState } from "react";
import "./Navbar.css";
import { UilBars, UilMultiply } from "@iconscout/react-unicons";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav>
      <div className="container nav__container">
        <a href="index.html" className="logo">
          <h4>
            CUSHY
            <br />
            <span>cuisine</span>
          </h4>
        </a>
        <ul className={`nav__menu ${menuActive ? "open" : ""}`}>
          <li>
            <a href="/index.html">Home</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact.html">Contact</a>
          </li>
          <li>
            <a href="#order" className="except">
              Order Now
            </a>
          </li>
        </ul>
        <i onClick={toggleMenu} className="menu-icon">
          {menuActive ? (
            <UilMultiply id="close_menu_btn" />
          ) : (
            <UilBars id="open_menu_btn" />
          )}
        </i>
      </div>
    </nav>
  );
};

export default Navbar;
