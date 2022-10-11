import { Link } from 'react-router-dom'
import '../App.css'
import moggedLogo from '../assets/logo.png'

function Nav() {
    return (
        <nav className='navbar'>
            <Link className='nav-title' to='/'>
              <img src={moggedLogo} className='nav-logo'/>
              <span className='nav-logo-text'>Mogged</span>
            </Link>
            <ul className='nav-list'>
                <Link className='nav-el' to='/shop'>Shop Now</Link>
                <Link className='nav-el' to='/contact'>Contact</Link>
            </ul>
        </nav>
    )
}

export default Nav