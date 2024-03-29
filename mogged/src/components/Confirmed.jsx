import { Link } from 'react-router-dom'

export default function Confirmed (props) {

    return (
        <div className="confirmed-con spacer-4 spacer-bottom-4">
            <br/>
            <h1 className="acid confirmed-header">Thank You For Ordering!</h1>
            <p className="acid confirmed-text spacer-2">Thanks for placing your order with Mogged! We're <b className="acid">PUMPED </b>
                to be bringing you your high quality products. Our hope is you'll be using them to ascend to <b className="acid">SWOLE CHAMPION STATUS. </b>
                Your package should be delivered in the next 2-3 business days. What you do with them then, is <b>UP TO YOU. </b>
                Good luck soldier.
            </p>
            <div className='spacer-3'>
                <Link className='confirmed-button purple' to='/' onClick={() => props.func()}>Back To Home</Link>
            </div>
            <br/>
            <br/>
        </div>
    )
}