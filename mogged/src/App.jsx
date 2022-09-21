import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

//component imports
import Hero from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Hero />
    </div>
  )
}

export default App
