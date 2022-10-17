import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './home.css'
import './contact.css'
import './shop.css'
import './product.css'
import {Route, Routes} from "react-router-dom"

//component imports
import HomeMain from './components/home-main'
import Footer from './components/Footer'
import Shop from './components/shop'
import Contact from './components/contact'
import Product from './components/Product'
import Cart from './components/Cart'

function App() {
  const [count, setCount] = useState(0)

  const [cart, setCart] = useState([])

  function addCart (item) {
    setCart(prevCart => [...prevCart, item])
    console.log(cart)
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomeMain />} />
        <Route path='/products' element={<Shop />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/item/:id' element={<Product func={addCart}/>} />
        <Route path='/cart' element={<Cart cart={cart}/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
