import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Galeria from './components/Galeria.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import './index.css'
import "./Styles.css"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Galeria />
    <App />
    <Footer />
  </React.StrictMode>,
)
