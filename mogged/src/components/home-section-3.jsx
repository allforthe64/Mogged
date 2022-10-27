import Cbum from '../assets/Cbum.jpg'
import { Link } from 'react-router-dom'

export default function Section3 () {
    return (
        <div className="sec-3-main">
            <h1 className="home-header-1 spacer-3 purple sec-3-header">Mogged Merch</h1>
            <img src={Cbum} className='spacer-3 sec-3-img'/>
            <p className="mogged-text-2 purple spacer-3 spacer-bottom-3">Mogged isn't just a supplement company. We want you to look your absolute swollest at all times. 
                Enter mogged's line of premium t-shirts and hoodies. A beautiful body deserves to be draped with 
                beautiful clothes. Don't worry, we've got your back (like always lol). Click the button below 
                to get your hands on some merch and start swaddling your meaty man meats in 
                the best attire out there.</p>
                <Link to='/products'><button className="home-button-2 spacer-bottom-3">Check It Out</button></Link>
        </div>
    )
}