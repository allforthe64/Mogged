import { useParams } from "react-router-dom"
import data from '../data/product-info'

export default function Product () {
    let {id} = useParams()
    id = parseInt(id)
    let obj = []

    for (let i = 0; i < data.length; i ++) {
        if (data[i].id === id) {
            obj = data[i]
        }
    }

    return (
        <div></div>
    )
}