import "./style.css";
import { NavLink } from "react-router-dom";
import React from "react";
import logo from "./img/logo.png";
export const Header = () => {
  return (
    <header className="header">
      <nav className="main-header">
        <ul className="sitelogo">
          <li>
            <NavLink to="./">
              <img src={logo} alt="sitelogo" />{" "}
            </NavLink>
          </li>
        </ul>
        <ul className="main-nav">
          <li>
            <NavLink to={`/`}>HOME</NavLink>
          </li>
          <li>
            <NavLink to={`/`}>WEBSITE DESIGN</NavLink>
          </li>
          <li>
            <NavLink to={`/Seo`}>SEO</NavLink>
          </li>

          <li>
            <NavLink to={`/`}>PORTFOLIO</NavLink>
          </li>
          <li>
            <NavLink to={`/`}>PRICING</NavLink>
          </li>
          <li>
            <NavLink to={`/`}>CONTACT</NavLink>
          </li>
          <li>
            <NavLink to={`/`}>Login</NavLink>
          </li>
        </ul>
      </nav>
      <nav class="mobile-header">
        <input type="checkbox" id="checkbox" />
        <ul class="mob d-flex align-items-center justify-content-between">
          <li class="mob-logo">
            <NavLink to="./">
              <img src={logo} alt="sitelogo" />{" "}
            </NavLink>
          </li>

          <li class="hamburger" id="hamburger">
            <label for="checkbox">
              <span class="line"></span>
              <span class="line"></span>
              <span class="line"></span>
            </label>
          </li>
        </ul>

        <ul class="mobile-inner">
          <li>
            <NavLink to={`/`}>Home</NavLink>
          </li>

          <li>
            <NavLink to={`/Seo`}>Seo</NavLink>
          </li>

          <li>
            <NavLink to={`/`}>Contact Us</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
