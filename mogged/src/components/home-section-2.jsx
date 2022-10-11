import ProductCard from './ProductCard'
import data from '../data/home-product-data'

export default function Section2 () {

    const cards = data.map(item => {
        return (
            <ProductCard img={item.img} title={item.title} body={item.body} key={item.id}/>
        )
    })

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
            {cards}   
        </div>
    )
}