import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Rating({ rating }) {
  let ratingCount = [
    <FontAwesomeIcon icon={faStar} size="xl" key={"etoile1"} />,
    <FontAwesomeIcon icon={faStar} size="xl" key={"etoile2"} />,
    <FontAwesomeIcon icon={faStar} size="xl" key={"etoile3"} />,
    <FontAwesomeIcon icon={faStar} size="xl" key={"etoile4"} />,
    <FontAwesomeIcon icon={faStar} size="xl" key={"etoile5"} />,
  ];

  for (let index = 0; index < rating; index++) {
    ratingCount[index] = (
      <FontAwesomeIcon
        icon={faStar}
        size="xl"
        className="active"
        key={`etoile${index}`}
      />
    );
  }

  return <div className="logement-ratings">{ratingCount}</div>;
}
