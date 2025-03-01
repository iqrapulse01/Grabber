import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom"; // Add useNavigate
import "../styles/Navbar.css";
import logo from "../assets/images/dealgrabber1bg.png"; 


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsDropdownOpen(false); // Close dropdown when menu is toggled
  };

  const toggleDropdown = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      {/* Left Side: Logo with Image */}
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Urban Eats Logo" className="logo-img" />
        </Link>
      </div>

      {/* Middle: Navigation Links */}
      <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/deals" onClick={toggleMenu}>
            Deals
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={toggleMenu}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={toggleMenu}>
            Contact
          </Link>
        </li>

        {/* Dropdown for Urban Eats Directory */}
        <li className="dropdown" ref={dropdownRef}>
          <span onClick={toggleDropdown}>
            Urban Eats Directory{" "}
            <span className={`arrow ${isDropdownOpen ? "up" : "down"}`}>
              {isDropdownOpen ? "▲" : "▼"}
            </span>
          </span>
          <ul className={`dropdown-menu ${isDropdownOpen ? "active" : ""}`}>
            <li>
              <Link to="/urban-eats" onClick={toggleMenu}>
                Urban Eats
              </Link>
            </li>
            <li>
              <Link to="/mobilopoly" onClick={toggleMenu}>
                Mobilopoly
              </Link>
            </li>
            <li>
              <Link to="/localopoly" onClick={toggleMenu}>
                Localopoly
              </Link>
            </li>
            <li>
              <Link to="/dealopoly" onClick={toggleMenu}>
                Dealopoly
              </Link>
            </li>
          </ul>
        </li>
      </ul>

      {/* Right Side: Signup Button */}
      <div className="navbar-right">
        <button className="signup-button" onClick={() => navigate("/signup")}>
          Sign Up
        </button>
      </div>

      {/* Hamburger Menu for Small Screens */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${isMenuOpen ? "change" : ""}`}></div>
        <div className={`bar ${isMenuOpen ? "change" : ""}`}></div>
        <div className={`bar ${isMenuOpen ? "change" : ""}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;