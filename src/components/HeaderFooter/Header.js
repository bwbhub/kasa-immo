import logo from "../../assets/logo_kasa.png";
import { NavLink } from "react-router-dom";
import "../../styles/Desktop/Header.scss";

function Header() {
  return (
    <header>
      <img src={logo} className="header-logo" alt="logo" />
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="/apropos"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          A propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
