import data from '../data/product-info'
import Card from './Card'

export default function Shop() {

    const cards = data.map(product => {
        return <Card name={product.product}/>
    })

    console.log(cards)

    return (
        <div className="container">
            <div>
                <h1 className="shop-header purple spacer-3">Shop The Line</h1>
                <p className="purple shop-caption spacer-1">View Our Line Of Premium Products Below:</p>
                <div className='container spacer-4'>
                    <div className='card-container'>
                        {cards[0]}
                        {cards[1]}
                        {cards[2]}
                    </div>
                </div>
            </div>
        </div>
    )
}