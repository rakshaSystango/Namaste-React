import React, { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  // if no dependency array => useEffect is called on every render
  // if dependency array is empty = [] => useEffect is called on initial render (just once)
  // if dependency array is [btnNameReact] => called every time btnNameReact is update
  useEffect(() => {
    // console.log("useEffect called");
  }, [btnNameReact]);

  return (
    <header className="header">
      <h1>
        <img alt="logo" src={LOGO_URL} className="logo-icn" />
      </h1>
      <nav className="nav-list">
        <ul className="nav-items">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="cart-link">
            <a href="#">
              🛒 Cart <span className="cart-count">0</span>
            </a>
          </li>
          <li>
            <button
              onClick={() => {
                btnNameReact === "Login"
                  ? setBtnNameReact("Logout")
                  : setBtnNameReact("Login");
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
