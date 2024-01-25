import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/index.scss";
import Accueil from "./components/Pages/Accueil";
import Apropos from "./components/Pages/Apropos";
import Erreur from "./components/Pages/Erreur";
import Header from "./components/HeaderFooter/Header";
import Footer from "./components/HeaderFooter/Footer";
import Logement from "./components/Pages/Logement";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/logement" element={<Logement />}>
          <Route path=":id" element={<Logement />} />
        </Route>
        <Route path="*" element={<Erreur />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
