import { Link } from "react-router-dom";

export default function Card (props) {
    console.log(props)
    return (
        <div>
            <div className="card">
                <img src={props.img} className='card-img-shop spacer-bottom'></img>
                <Link to={`/item/${props.id}`} className="Link acid-background">{props.name}</Link>
            </div>
        </div>
    )
}