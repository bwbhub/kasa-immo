import '../styles/Galerie.scss'
import logements from '../datas/logements.json'
import Card from './Card'

function Galerie() {
  return (
    <div id="galerie">
      <ul className="galerie">
        {logements.map(({ id, title, cover }) => (
          <Card key={id} cover={cover} id={id} title={title} />
        ))}
      </ul>
    </div>
  )
}

export default Galerie
