import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './home.css'

//component imports
import Hero from './components/Hero'
import Main from './components/home-main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Hero />
      <Main />
    </div>
  )
}

export default App
