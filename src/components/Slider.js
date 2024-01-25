import "../styles/Slider.scss";
import logements from "../datas/logements.json";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function Slider({ picture }) {
  const [index, setIndex] = useState(0);
  const nextImage = () => {
    setIndex((index) => (index + 1) % picture.length);
  };

  const prevImage = () => {
    setIndex((index) => (index - 1 + picture.length) % picture.length);
  };

  return (
    <div className="logement-carousel">
      <div className="carousel-btn-container">
        <button className="carousel-btn previous" onClick={prevImage}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div className="carousel-photo">
          <img src={picture[index]} alt={`Numéro ${index + 1}`}></img>
        </div>
        <button className="carousel-btn next" onClick={nextImage}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
        <p className="carousel-count">
          {index + 1}/{picture.length}
        </p>
      </div>
    </div>
  );
}

export default Slider;
