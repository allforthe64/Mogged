import '../App.css'
import moggedLogo from '../assets/logo.png'

function Nav() {
    return (
        <nav className='navbar'>
            <a className='nav-title'>
              <img src={moggedLogo} className='nav-logo'/>
              <span className='nav-logo-text'>Mogged</span>
            </a>
            <ul className='nav-list'>
                <li className='nav-el'>Our Products</li>
                <li className='nav-el'>Shop Now</li>
                <li className='nav-el'>Contact</li>
            </ul>
        </nav>
    )
}

export default Nav