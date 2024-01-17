import '../styles/Logement.scss'
import Dropdown from './Dropdown'
import logements from '../datas/logements.json'
import Slideshow from './Slideshow'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStar } from '@fortawesome/free-solid-svg-icons'
// import { text } from '@fortawesome/fontawesome-svg-core'

function Logement(
  title,
  pictures,
  descritpion,
  host,
  name,
  rating,
  location,
  equipments,
  tags,
) {
  return (
    <div className="logement-container">
      <Slideshow />
      <div className="logement-description-container">
        <div className="logement-title">
          <h1></h1>
        </div>
        <div className="logement-dropdown">
          <Dropdown title="Description" text="" />
          <Dropdown title="Équipements" text="" />
        </div>
      </div>
    </div>
  )
}

export default Logement
