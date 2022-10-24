import { useRef } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactForm () {

    const emailEl = useRef('')
    const fName = useRef('')
    const lName = useRef('')
    const comments = useRef('')

    function clearForm () {
        emailEl.current.value = ''
        fName.current.value = ''
        lName.current.value = ''
        comments.current.value = ''

        toast("Thank You For Your Submission! Your Feedback Is Under Review");
    }

    return (
        <div className="container spacer-bottom-4">
            <div className="contact-form-container">
                <h2 className="spacer-4 purple contact-header-2 spacer-bottom-4">Leave A Comment:</h2>
                <div className="contact-form purple-background spacer-bottom-5">
                    <p className="acid form-headers spacer-3" >Email</p>
                    <input type='email' className="form-input" ref={emailEl}/>
                    <p className='acid form-headers spacer-3'>First Name</p>
                    <input type='text' className="form-input" ref={fName}/>
                    <p className='acid form-headers spacer-3'>Last Name</p>
                    <input type='text' className="form-input" ref={lName}/>
                    <p className='acid form-headers spacer-3'>Comments</p>
                    <textarea rows='10' cols='50' className="form-text spacer-bottom-3" ref={comments}></textarea>
                    <div className="form-button-con spacer-2">
                        <button className="spacer-bottom-3 form-button" onClick={() => clearForm()}>Submit</button>
                    </div>
                </div>
            </div>
            <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false}
                    closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark"/>
        </div>
    )
}