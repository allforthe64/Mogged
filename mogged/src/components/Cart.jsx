import CartItem from './CartItem'

export default function Cart () {

    let items = []
    let cart = localStorage.getItem('cart')

    if (cart) items = cart.split(',')

    console.log(items)

    if (items.length > 0) {
        const inv = items.map(product => {
            return <CartItem name={product}/>
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