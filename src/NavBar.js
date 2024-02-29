// NavBar.js
import React from 'react';
import './NavBar.css';

const NavBar = () => (
  <nav className="navbar">
    <div className="logo"></div>
    <ul className="nav-links">
      <li><a href="/">Home</a></li>
      <li><a href="/products">Products</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/Cart">Cart</a></li>
    </ul>
    <div className="nav-icons">
      <i className="search-icon"></i>
      <i className="user-icon"></i>
      <i className="logout-icon"></i>
    </div>
  </nav>
);

export default NavBar;
