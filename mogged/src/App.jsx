import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './home.css'

//component imports
import Hero from './components/Hero'
import Main from './components/home-main'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Hero />
      <Main />
      <Footer />
    </div>
  )
}

export default App
