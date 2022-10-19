import { useParams } from "react-router-dom"
import data from '../data/product-info'

export default function Product (props) {

    let {id} = useParams()
    id = parseInt(id)
    let obj = []

    for (let i = 0; i < data.length; i ++) {
        if (data[i].id === id) {
            obj = data[i]
        }
    }

    return (
        <div className="product spacer-3 spacer-bottom-4">
            <img className="product-img" src={obj.img}></img>
            <div className="product-info">
                <h1 className="purple product-header">{obj.product}</h1>
                <p className="description spacer-2">{obj.description}</p>
                <div className="order-con">
                    <p className="price spacer-3">Price: {obj.price}</p>
                    <button className="acid purple-background add-button" onClick={() => props.func(obj.product)}>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}