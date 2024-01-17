import '../../styles/Apropos.scss'
import BannerApropos from '../Banner/BannerApropos'
import Dropdown from '../Dropdown'

function Apropos() {
  const title1 = 'Fiabilité '
  const title2 = 'Respect'
  const title3 = 'Service'
  const title4 = 'Sécurité'
  const text1 =
    'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.'
  const text2 =
    'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
  const text3 =
    'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
  const text4 =
    "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
  return (
    <div className="apropos">
      <BannerApropos />
      <Dropdown title={title1} text={text1} />
      <Dropdown title={title2} text={text2} />
      <Dropdown title={title3} text={text3} />
      <Dropdown title={title4} text={text4} />
    </div>
  )
}

export default Apropos
