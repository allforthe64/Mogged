import { Link } from "react-router-dom";

export default function Card (props) {
    return (
        <div>
            <div className="card">
                <img src={props.img} className='card-img spacer-bottom'></img>
                <Link className="Link acid-background">{props.name}</Link>
            </div>
        </div>
    )
}