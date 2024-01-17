import '../../styles/Logement.scss'
import Dropdown from '../Dropdown'
import Slideshow from '../Slideshow'
import photoTempo from '../../assets/2231.jpg'
// import logements from '../../datas/logements.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function Logement({
  title,
  pictures,
  descritpion,
  host,
  name,
  rating,
  location,
  equipments,
  tags,
}) {
  return (
    <div className="logement-container">
      <Slideshow />
      <div className="logement-description-container">
        <div className="logement-row-title-host">
          <div className="logement-title">
            <h1>Titre de la location</h1>
            <h2>Localisation</h2>
          </div>
          <div className="logement-host">
            <div className="logement-host-name">
              <h2>Brice Bouhot</h2>
            </div>
            <div className="logement-host-photo">
              <img src={photoTempo} alt={photoTempo} />
            </div>
          </div>
        </div>
        <div className="logement-row-tags-rating">
          <div className="logement-tags">
            <p>Cozy</p>
            <p>Canal</p>
            <p>Paris 10</p>
          </div>
          <div className="logement-ratings">
            <FontAwesomeIcon icon={faStar} size="xl" />
            <FontAwesomeIcon icon={faStar} size="xl" />
            <FontAwesomeIcon icon={faStar} size="xl" />
            <FontAwesomeIcon icon={faStar} size="xl" />
            <FontAwesomeIcon icon={faStar} size="xl" />
          </div>
        </div>
      </div>
      <div className="logement-dropdown">
        <Dropdown title="Description" text="" />
        <Dropdown title="Équipements" text="" />
      </div>
    </div>
  )
}

export default Logement
