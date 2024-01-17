import fond from '../../assets/banniere_apropos.png'
import '../../styles/Banner.scss'

function BannerApropos() {
  return (
    <div className="banner">
      <img src={fond} className="banner-img" alt="Paysage montagneux" />
    </div>
  )
}

export default BannerApropos
