import "../../styles/Card.scss";
import { Link } from "react-router-dom";

function Card({ id, title, cover, data }) {
  const localStore = () => {
    localStorage.setItem("dataString", JSON.stringify(data));
  };

  return (
    <li className="card-container">
      <Link to={`logement/${id}`} onClick={localStore} className="card-link">
        <h3 className="card-title">{title}</h3>
        <div className="card-image-div">
          <img src={cover} className="card-image" alt={title} />
        </div>
      </Link>
    </li>
  );
}

export default Card;
