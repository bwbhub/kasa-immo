import '../styles/Slideshow.scss'
import logements from '../datas/logements.json'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

function Slideshow() {
  const [index, setIndex] = useState(0)

  return (
    <div className="logement-carousel">
      <div className="logement-btn-container">
        <button className="logement-btn previous">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button className="logement-btn next">
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  )
}

export default Slideshow
