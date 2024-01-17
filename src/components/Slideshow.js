import '../styles/Slideshow.scss'
import logements from '../datas/logements.json'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import imageTempo from '../assets/banniere_accueil.png'

function Slideshow() {
  const [index, setIndex] = useState(0)

  return (
    <div className="logement-carousel">
      <div className="carousel-btn-container">
        <button className="carousel-btn previous">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div className="carousel-photo">
          <img src={imageTempo} alt={imageTempo}></img>
        </div>
        <button className="carousel-btn next">
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      <div className="carousel-count"></div>
    </div>
  )
}

export default Slideshow
