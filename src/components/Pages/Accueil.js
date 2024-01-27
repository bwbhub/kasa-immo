import React from "react";
import BannerAccueil from "../Banner/BannerAccueil";
import Galerie from "../Galerie/Galerie";
import { useEffect } from "react";

import "../../styles/Desktop/Accueil.scss";

function Accueil() {
  useEffect(() => {
    document.title = "Accueil";
  }, []);

  return (
    <div className="accueil">
      <BannerAccueil />
      <Galerie />
    </div>
  );
}

export default Accueil;
