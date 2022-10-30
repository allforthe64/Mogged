import { Link } from 'react-router-dom'
import { useState } from 'react';
import '../App.css'
import moggedLogo from '../assets/logo.png'

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faCartShopping);

function Nav() {

    const [show, setShow] = useState({display: 'none'});

    function hide() {
        if (show.display === 'block') {
            setShow(prevShow => ({
                    ...prevShow,
                    display: 'none'
            }))
            return show
        } else {
            setShow(prevShow => ({
                    ...prevShow,
                    display: 'block'
            }))
            return show
        }
    }

    return (
        <>
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
                <button onClick={() => hide()} className='nav-button-2'></button>
            </nav>
            <div className='nav-2' style={show}>
                <div className='link-holder spacer-1'>
                    <Link to='/products' className='nav-el nav-el-2'>Shop Now</Link>
                </div>
                <div className='link-holder spacer-1'>
                    <Link to='/contact' className='nav-el nav-el-2'>Contact</Link>
                </div>
                <div className='link-holder spacer-bottom spacer-1'>
                    <Link to='/cart'><FontAwesomeIcon icon="fas fa-shopping-cart" className='nav-el-2 cart acid' /></Link>
                </div> 
            </div>
        </>
    )
}

export default Nav