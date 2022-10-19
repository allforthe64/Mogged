export default function Cart (props) {

    let items = []

    if (props.cart.length > 0) {
        items = props.cart[0].split(',')
    }

    console.log(items)

    return (
        <div>
        </div>
    )
}