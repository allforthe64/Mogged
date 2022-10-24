import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Nav from './components/nav'
import Footer from './components/Footer'
import './index.css'
import { BrowserRouter } from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <App />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)
