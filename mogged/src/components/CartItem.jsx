import { useState } from "react"
import data from '../data/product-info'

export default function CartItem (props) {

    const [quant, setQuant] = useState(1)

    return (
        <div className="spacer-3">
            <div className="item-container">
                <p className="purple item-name">{props.name}</p>
                <p className="purple">{quant}</p>
            </div>
            <hr className="rule spacer-2"/>
        </div>
    )
}