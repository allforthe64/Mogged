import { Link } from 'react-router-dom'

export default function ProductCard(props) {

    return (
        <div className='productCard'>
            <img src={props.img} alt="protein" className="card-img" />
            <div className="card-info">
                <h2 className="card-header">{props.title}</h2>
                <p className="card-text spacer-2">{props.body}</p>
                <Link to={`/item/${props.id}`}><button className="card-button spacer-2">Check It Out</button></Link>
            </div>
        </div>
    )
}