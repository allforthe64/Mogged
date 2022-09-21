import '../App.css'
import moggedLogo from '../assets/logo.png'

function Nav() {
    return (
        <nav className='navbar'>
            <a className='nav-title'>
              <img src={moggedLogo} className='nav-logo'/> 
            </a>
        </nav>
    )
}

export default Nav