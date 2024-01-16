import React from 'react'
import BannerAccueil from './BannerAccueil'
import Galerie from './Galerie'

import '../styles/Accueil.scss'

function Accueil() {
  return (
    <div className="accueil">
      <BannerAccueil />
      <Galerie />
    </div>
  )
}

export default Accueil
