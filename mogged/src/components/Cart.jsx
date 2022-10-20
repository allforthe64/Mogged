import CartItem from './CartItem'
import data from '../data/product-info'

export default function Cart () {

    let items = []
    let cart = localStorage.getItem('cart')
    let simplified = []
    
    if (cart) items = cart.split(',')

    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < items.length; j ++) {
            if (items[j] === data[i].product) {
                simplified.push(data[i].price)
            }
        }
    }

    if (items.length > 0) {
        
        let count = 0;

        const inv = items.map(product => {
            let price = simplified[count]
            count = count + 1;
            return <CartItem name={product} price={price}/>
        })
        return (
            <div>
                <h1 className='purple cart-header spacer-3 spacer-bottom-4'>Your Cart</h1>
                <div className='spacer-bottom-4'>
                    {inv}
                </div>
            </div>
        )
    }
    else {
        return (
            <div>
                <h1 className='purple cart-header spacer-3 spacer-bottom-6'>Your Cart</h1>
                <p className='purple cart-empty spacer-bottom-4'>Your Cart Is Empty!</p>
            </div>
        )
    }
}