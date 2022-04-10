import "./Header.css";
import logo from "../assets/logo-dark.svg";

const Header = () => {
  return (
    <header className="header">
      <h1 className="visually-hidden">Memory Game</h1>
      <img src={logo} className="logo" alt="Memory game logo" />
      <button className="navigation-btn">Menu</button>
      <nav>
        <ul>
          <li>
            <button>Restart</button>
          </li>
          <li>
            <button>New Game</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
