import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/index.scss'
import Accueil from './components/Accueil'
import Apropos from './components/Apropos'
import Erreur from './components/Erreur'
import Header from './components/Header'
import Footer from './components/Footer'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Accueil" element={<Accueil />} />
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="*" element={<Erreur />}></Route>
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
)
