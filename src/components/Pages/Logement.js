import '../../styles/Logement.scss'
import Dropdown from '../Dropdown'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Rating from '../Rating'
import Carousel from '../Carousel'

function Logement() {
  const localData = localStorage.getItem('dataString')
  const data = JSON.parse(localData)
  const id = data.id
  const pictures = data.pictures
  const title = data.title
  const location = data.location
  const host = data.host
  const tags = data.tags
  const rating = data.rating
  const description = data.description
  const equipments = data.equipments
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    document.title = `${title}`
  }, [])

  useEffect(() => {
    if (id !== params.id) {
      navigate('/erreur')
    }
  }, [])

  return (
    <div className="logement-container">
      <Carousel picture={pictures} />
      <div className="logement-description-container">
        <div className="logement-col-title-loc-tags">
          <div className="logement-title-loc">
            <h1 className="logement-title">{title}</h1>
            <h2 className="logement-loc">{location}</h2>
          </div>
          <div className="logement-tags">
            {tags.map((tag, index) => (
              <li key={`${tag}-${index}`}>{tag}</li>
            ))}
          </div>
        </div>
        <div className="logement-col-host-rating">
          <div className="logement-host">
            <div className="logement-host-name">
              <h2>{host.name}</h2>
            </div>
            <div className="logement-host-photo">
              <img src={host.picture} alt={"Photo d'" + host.name} />
            </div>
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
  )
}

export default Logement
