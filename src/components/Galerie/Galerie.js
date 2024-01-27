import "../../styles/Desktop/Galerie.scss";
import logements from "../../datas/logements.json";
import Card from "./Card";

function Galerie() {
  return (
    <div id="galerie">
      <ul className="galerie">
        {logements.map(
          ({
            id,
            title,
            cover,
            pictures,
            description,
            host,
            rating,
            location,
            equipments,
            tags,
          }) => (
            <Card
              key={id}
              cover={cover}
              id={id}
              title={title}
              data={{
                id: id,
                title: title,
                cover: cover,
                pictures: pictures,
                description: description,
                host: host,
                rating: rating,
                location: location,
                equipments: equipments,
                tags: tags,
              }}
            />
          )
        )}
      </ul>
    </div>
  );
}

export default Galerie;
