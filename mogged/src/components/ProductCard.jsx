export default function ProductCard(props) {
    return (
        <div className='productCard spacer-3'>
            <img src={props.img} alt="protein" className="card-img" />
            <div className="card-info">
                <h2 className="card-header">{props.title}</h2>
                <p className="card-text spacer-2">{props.body}</p>
                <button className="card-button spacer-2">Check It Out</button>
            </div>
        </div>
    )
}