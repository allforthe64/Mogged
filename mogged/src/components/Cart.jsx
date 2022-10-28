import CartItem from './CartItem'
import data from '../data/product-info'
import { Link } from 'react-router-dom'
import { useState } from "react"

export default function Cart (props) {

    let items = []
    let cart = localStorage.getItem('cart')
    let simplified = []
    let prices = []
    let initialValue = 0;
    
    if (cart) items = cart.split(',')

    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < items.length; j ++) {
            if (items[j] === data[i].product) {
                simplified.push(data[i].price)
            }
        }
    }

    for (let i = 0; i < simplified.length; i++) {
        prices.push(parseInt(simplified[i].split("$")[1]))
    }


    const [total, setTotal] = useState(prices.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue))

    function costAdjust(ammount) {
        console.log(ammount)
        setTotal(prevTotal => (prevTotal + ammount))
    }

    if (items.length > 0) {
        
        let count = 0;

        const inv = items.map(product => {
            let price = simplified[count]
            count = count + 1;
            return <CartItem name={product} price={price} func={props.func} func2={costAdjust} key={count}/>
        })
        return (
            <div>
                <h1 className='purple cart-header spacer-3 spacer-bottom-4'>Your Cart</h1>
                <div className='spacer-bottom-3'>
                    {inv}
                </div>
                <p className='purple total-price'>Total: ${total}</p>
                <div className='spacer-bottom-4 spacer-3 cart-button-con-main'>
                    <Link className='order-button acid' to='/confirmed'>Order Now</Link>
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