import ProductCard from './ProductCard'
import Img from '../assets/protein.png'

export default function Section2 () {
    return (
        <div className='white-background'>
            <div className="sec-2-main">
                <div className="sec-2-con spacer-4 spacer-bottom-3">
                    <h1 className="home-header-2 purple">Three Products. Three
                    Different Ways To Get Absolutely Massive</h1>
                </div>
            </div>
            <ProductCard img={Img} title='Mogged Protein' body='The Product That Started It All, Mogged Protein
                    Is Made From The Sweat Of The Legendary 
                    Champions Of Mount Swolympus. Do You Have
                    What It Takes To Become A Ripped Champion?'/>
        </div>
    )
}