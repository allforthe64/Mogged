import ProductCard from './ProductCard'
import Img from '../assets/protein.png'
import Img2 from '../assets/creatine.png'
import Img3 from '../assets/preworkout.png'

export default function Section2 () {
    return (
        <div className='white-background'>
            <div className="sec-2-main">
                <div className="sec-2-con spacer-4 spacer-bottom-3">
                    <h1 className="home-header-2 purple">Three Products. Three
                    Different Ways To Get Absolutely Massive</h1>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <ProductCard img={Img} title='Mogged Protein' body='The Product That Started It All, Mogged Protein
                    Is Made From The Sweat Of The Legendary 
                    Champions Of Mount Swolympus. Do You Have
                    What It Takes To Become A Ripped Champion?'/>
            <ProductCard img={Img2} title='Cretaceous Creatine' body='Forged From Old T-Rex Fossils, Our Creatine
                Is Guaranteed to give you the body of a caveman
                That Battled Dinos On The Daily'/>     
            <ProductCard img={Img3} title='Power Punch Preworkout' body="Said To Contain The Legendary Power Of Iron Mike 
                Tyson's Uppercut, Power Punch Is The Perfect Way 
                To Start Your Workout"/>      
        </div>
    )
}