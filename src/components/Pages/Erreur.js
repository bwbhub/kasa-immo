import "../../styles/Desktop/Erreur.scss";
import { Link } from "react-router-dom";

function Erreur() {
  return (
    <div className="erreur-container">
      <h2 className="erreur-title">404</h2>
      <p className="erreur-text">
        Oups! La page que
        <br className="mobile-breaker" /> vous demandez n'existe pas.
      </p>
      <Link to="/" className="erreur-link">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

export default Erreur;
