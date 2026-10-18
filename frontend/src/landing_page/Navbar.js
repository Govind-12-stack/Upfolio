import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="top-navbar">
      <a href="/" className="brand">
        <img src="/media/images/logo.svg" alt="Zerodha" />
      </a>

      <div className="nav-right">
        <ul className="nav-links">
          <li>
            <a href="/signup">Signup</a>
          </li>
          <li>
            <a href="/about" className="active">
              About
            </a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="/pricing">Pricing</a>
          </li>
          <li>
            <a href="/support">Support</a>
          </li>
        </ul>

        <button className="menu-button" aria-label="Open menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
