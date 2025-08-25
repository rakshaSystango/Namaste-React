import React from "react";

const Header = () => {
  return (
    <header className="header">
      <h1><span className="logo-icn">🍴</span> Food App</h1>
      <nav className="nav-list">
        <ul className="nav-items">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li className="cart-link">
            <a href="#">
              🛒 Cart <span className="cart-count">0</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
