import { Link } from 'react-router-dom'
import '../App.css'
import moggedLogo from '../assets/logo.png'

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faCartShopping);

function Nav() {
    return (
        <nav className='navbar'>
            <Link className='nav-title' to='/'>
              <img src={moggedLogo} className='nav-logo'/>
              <span className='nav-logo-text'>Mogged</span>
            </Link>
            <ul className='nav-list'>
                <Link className='nav-el' to='/products'>Shop Now</Link>
                <Link className='nav-el' to='/contact'>Contact</Link>
                <Link to='/cart'><FontAwesomeIcon icon="fas fa-shopping-cart" className='cart acid' /></Link>
            </ul>
        </nav>
    )
}

export default Nav