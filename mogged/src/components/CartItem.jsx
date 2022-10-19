import { useState } from "react"
import data from '../data/product-info'

export default function CartItem (props) {

    const [quant, setQuant] = useState(1)

    function adjust(ammount) {

        if (quant === 1 && ammount === -1) {
            console.log('entered')
            setQuant(prevQuant => (prevQuant + 1))
        }
        
        setQuant(prevQuant => (prevQuant + ammount))
    }

    return (
        <div className="spacer-3">
            <div className="item-container">
                <p className="purple item-name">{props.name}</p>
                <p className="purple">{quant}</p>
                <button className="plus purple-background acid" onClick={() => adjust(1)}>+</button>
                <button className="minus purple-background acid" onClick={() => adjust(-1)}>-</button>
            </div>
            <hr className="rule spacer-2"/>
        </div>
    )
}