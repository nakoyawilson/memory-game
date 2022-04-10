import "./Header.css";
import logo from "../assets/logo-dark.svg";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="header">
      <h1 className="visually-hidden">Memory Game</h1>
      <img src={logo} className="logo" alt="Memory game logo" />
      <button className="navigation-btn" onClick={openMenu}>
        Menu
      </button>
      <nav className={`nav-container ${isOpen && "open"}`}>
        <ul className="nav-links">
          <li>
            <button className="nav-btn restart" onClick={closeMenu}>
              Restart
            </button>
          </li>
          <li>
            <button className="nav-btn" onClick={closeMenu}>
              New Game
            </button>
          </li>
          <li>
            <button className="nav-btn" onClick={closeMenu}>
              Resume Game
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
