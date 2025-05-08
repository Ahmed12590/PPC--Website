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
            <img src={logo} alt="sitelogo" />{" "}
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
            <NavLink to={`/`}>SEO</NavLink>
          </li>
          <li>
            <NavLink to={`/`}>COPYWRITING</NavLink>
          </li>
          <li>
            <NavLink to={`/`}>LOGO DESIGNS</NavLink>
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
    </header>
  );
};
export default Header;
