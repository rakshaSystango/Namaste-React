import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  return (
    <header className="header">
      <h1>
        <img alt="logo" src={LOGO_URL} className="logo-icn" />
      </h1>
      <nav className="nav-list">
        <ul className="nav-items">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li className="cart-link">
            <a href="#">
              🛒 Cart <span className="cart-count">0</span>
            </a>
          </li>
          <li>
            <button
              onClick={() => {
                btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
              }}
              className="btn cst-btn"
            >
              {btnNameReact}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
