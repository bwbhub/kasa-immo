import React from "react";
import BannerAccueil from "../Banner/BannerAccueil";
import Galerie from "../Galerie/Galerie";

import "../../styles/Accueil.scss";

function Accueil() {
  return (
    <div className="accueil">
      <BannerAccueil />
      <Galerie />
    </div>
  );
}

export default Accueil;
