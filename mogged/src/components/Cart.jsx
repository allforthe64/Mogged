export default function Cart () {

    let items = []
    let cart = localStorage.getItem('cart')

    items = cart.split(',')

    console.log(items)

    const inv = items.map(product => {
        return (
            <div><p className="purple">{product}</p></div>
        )
    })

    return (
        <div>
            {inv}
        </div>
    )
}