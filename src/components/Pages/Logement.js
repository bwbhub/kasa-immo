import '../../styles/Logement.scss'
import Dropdown from '../Dropdown'
import Slideshow from '../Slideshow'
import photoTempo from '../../assets/2231.jpg'
// import logements from '../../datas/logements.json'
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
        <div className='logement-container-title-host'>
          <div className="logement-title">
            <h1>Titre de la location</h1>
            <h2>Localisation</h2>
          </div>
          <div className='logement-host'>
            <div className='logement-host-name'>
              <h2>Brice Bouhot</h2>
            </div>
            <div className='logement-host-photo'>
              <img src={photoTempo} alt={photoTempo}/>
            </div>
          </div>
        </div>
        <div className='logement-tags'></div>
        <div className='logement-ratings'></div>
        <div className="logement-dropdown">
          <Dropdown title="Description" text="" />
          <Dropdown title="Équipements" text="" />
        </div>
      </div>
    </div>
  )
}

export default Logement
