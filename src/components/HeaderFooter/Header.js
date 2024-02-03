import logo from '../../assets/logo_kasa.png'
import { Link, NavLink } from 'react-router-dom'
import '../../styles/Header.scss'

function Header() {
  return (
    <header>
      <Link to="/">
        <img src={logo} className="header-logo" alt="logo" />
      </Link>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="/apropos"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          A propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
