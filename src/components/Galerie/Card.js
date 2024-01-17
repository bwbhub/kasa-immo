import '../../styles/Card.scss'
import { Link } from 'react-router-dom'

function Card({ title, cover }) {
  return (
    <li className="card-container">
      <Link to={null} className="card-link">
        <h3 className="card-title">{title}</h3>
        <div className="card-image-div">
          <img src={cover} className="card-image" alt={title} />
        </div>
      </Link>
    </li>
  )
}

export default Card
