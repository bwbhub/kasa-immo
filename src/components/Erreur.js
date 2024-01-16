import '../styles/Erreur.scss'
import { Link } from 'react-router-dom'

function Erreur() {
  return (
    <div className="erreur-container">
      <h2 className="erreur-title">404</h2>
      <p className="erreur-text">
        Oups! La page que vous demandez néxiste pas.
      </p>
      <Link to="/Accueil" className="erreur-link">
        Retourner sur la page d'accueil
      </Link>
    </div>
  )
}

export default Erreur
