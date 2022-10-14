import data from '../data/product-info'
import Card from './Card'

export default function Shop() {

    const cards = data.map(product => {
        return <Card name={product.product} img={product.img} id={product.id}/>
    })

    console.log(cards)

    return (
        <>
            <div className="container">
                <div>
                    <h1 className="shop-header purple spacer-3">Shop The Line</h1>
                    <p className="purple shop-caption spacer-1">View Our Line Of Premium Products Below:</p>
                </div>
            </div>
            <div className='container spacer-4'>
                <p className='purple shop-header-2'>Supplements</p>
            </div>
            <div className='card-container spacer-3'>
                    {cards[0]}
                    {cards[1]}
                    {cards[2]}
            </div>
            <div className='container spacer-6'>
                <p className='purple shop-header-2'>Clothing</p>
            </div>
            <div className='card-container spacer-3 spacer-bottom-6'>
                    {cards[3]}
                    {cards[4]}
                    {cards[5]}
            </div>
        </>
    )
}