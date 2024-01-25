import "../../styles/Logement.scss";
import Dropdown from "../Dropdown";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Rating from "../Rating";
import Slider from "../Slider";

function Logement() {
  const localData = localStorage.getItem("dataString");
  const data = JSON.parse(localData);
  const id = data[0].id;
  const pictures = data[0].pictures;
  const title = data[0].title;
  const location = data[0].location;
  const host = data[0].host;
  const tags = data[0].tags;
  const rating = data[0].rating;
  const description = data[0].description;
  const equipments = data[0].equipments;
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    document.title = `${title}`;
  }, []);

  useEffect(() => {
    if (id !== params.id) {
      navigate("/erreur");
    }
  }, []);

  return (
    <div className="logement-container">
      <Slider picture={pictures} />
      <div className="logement-description-container">
        <div className="logement-row-title-host">
          <div className="logement-title">
            <h1>{title}</h1>
            <h2>{location}</h2>
          </div>
          <div className="logement-host">
            <div className="logement-host-name">
              <h2>{host.name}</h2>
            </div>
            <div className="logement-host-photo">
              <img src={host.picture} alt={"Photo d'" + host.name} />
            </div>
          </div>
        </div>
        <div className="logement-row-tags-rating">
          <div className="logement-tags">
            {tags.map((tag, index) => (
              <li key={`${tag}-${index}`}>{tag}</li>
            ))}
          </div>
          <Rating rating={rating} />
        </div>
      </div>
      <div className="logement-dropdown">
        <Dropdown title="Description" text={description} />
        <Dropdown
          title="Équipements"
          list={equipments.map((equipement, index) => (
            <li key={`${equipement}-${index}`}>{equipement}</li>
          ))}
        />
      </div>
    </div>
  );
}

export default Logement;
