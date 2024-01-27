import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Rating({ rating }) {
  let ratingCount = [];

  for (let index = 0; ratingCount.length < 5; index++) {
    for (let i = 0; i < rating; i++) {
      ratingCount[i] = (
        <FontAwesomeIcon
          icon={faStar}
          size="xl"
          className="active"
          key={`star${index + "" + i}`}
        />
      );
    }
    if (ratingCount.length < 5) {
      ratingCount[index] = (
        <FontAwesomeIcon icon={faStar} size="xl" key={`star${index}`} />
      );
    }
  }

  return <div className="logement-ratings">{ratingCount}</div>;
}
