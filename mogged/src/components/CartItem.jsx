import { useState } from "react"

export default function CartItem (props) {

    const [quant, setQuant] = useState(1)
    let cost = parseFloat(props.price.split('$')[1]).toFixed(2)

    function adjust(ammount) {

        if (quant === 0 && ammount === -1) {
            setQuant(prevQuant => (prevQuant + 1))
        }
        
        setQuant(prevQuant => (prevQuant + ammount))
    }

    return (
        <div className="spacer-3">
            <div className="item-container">
                <div className="cart-info-con">
                    <p className="purple item-name">{props.name}</p>
                    <p className="purple price">Price: ${cost * quant}</p>
                </div>
                <p className="quant-count purple">Quantity:</p>
                <button className="plus purple-background acid" onClick={() => adjust(1)}>+</button>
                <p className="purple quant-count count">{quant}</p>
                <button className="minus purple-background acid" onClick={() => adjust(-1)}>-</button>
            </div>
            <p className="remove spacer">Remove Item</p>
            <hr className="rule spacer-2"/>
        </div>
    )
}