import logo from "../../assets/logo_kasa_white.png";
import "../../styles/Desktop/Footer.scss";

function Footer() {
  return (
    <footer>
      <img src={logo} className="footer-logo" alt="Logo Kasa blanc" />
      <p className="footer-text">
        © 2020 Kasa. All
        <br className="mobile-break" /> rights reserved
      </p>
    </footer>
  );
}

export default Footer;
