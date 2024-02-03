import fond from '../../assets/banniere_accueil.png'
import '../../styles/Banner.scss'

function BannerAccueil() {
  return (
    <div className="banner">
      <img src={fond} className="banner-img" alt="Paysage côte montagneuse" />
      <h1>
        Chez vous, <br className="mobile-break" />
        partout et ailleurs
      </h1>
    </div>
  )
}

export default BannerAccueil
