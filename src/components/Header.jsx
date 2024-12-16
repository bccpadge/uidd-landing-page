import { useState, useEffect } from "react";
import logo from "../assets/images/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavbarLinks } from "../constants";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // !Toggle the mobile navigation
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // !Prevent scrolling when the mobile navigation is open
  document.body.style.overflow = isOpen ? "hidden" : "auto";

  // !Press the ESC key to close the navigation
  const handleKeyDown = (event) => {
    if (event.key === "Escape" && isOpen) {
      toggleNavbar();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <header className="header">
      <div className="header-wrapper wrapper flex">
        <a href="#">
          <img className="logo" src={logo} width={59} height={29} alt="" aria-label="Logo placeholder" />
        </a>
        <button className="navbar-toggle" aria-expanded={isOpen} aria-controls="navbar" onClick={toggleNavbar}>
          <span className="visually-hidden">Toggle navigation</span>
          {isOpen ? <FaTimes className="close-icon" aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>
        <nav className={`navbar ${isOpen ? 'open' : ''}`}>
          <ul className="navbar-list flex">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="navbar-link">{link.link}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className=" header-button-group flex">
          <a className=" button btn-login" href="#">Log In</a>
          <a href="#" className="button btn-trial">Start a free trial</a>
        </div>
      </div>
    </header>
  )
}