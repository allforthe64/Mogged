export default function Cart (props) {
    return (
        <div>
            <p className="purple" onClick={props.func}>Test text</p>
            <button onClick={props.func}></button>
        </div>
    )
}