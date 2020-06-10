import React from "react";
import { link } from 'react-router-dom';


export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <img src={logo} alt="cocktail db logo" className="logo" />
        <ul className="nav-links">
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}