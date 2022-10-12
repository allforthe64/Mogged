export default function ContactForm () {
    return (
        <div className="container spacer-bottom-4">
            <div className="contact-form-container">
                <h2 className="spacer-4 purple contact-header-2 spacer-bottom-4">Leave A Comment:</h2>
                <form className="contact-form purple-background spacer-bottom-5">
                    <p className="acid form-headers spacer-3">Email</p>
                    <input type='email' className="form-input"/>
                    <p className='acid form-headers spacer-3'>First Name</p>
                    <input type='text' className="form-input"/>
                    <p className='acid form-headers spacer-3'>Last Name</p>
                    <input type='text' className="form-input"/>
                    <p className='acid form-headers spacer-3'>Comments</p>
                    <textarea rows='10' cols='80' className="form-text spacer-bottom-3"></textarea>
                    <div className="form-button-con spacer-2">
                        <button type="submit" className="spacer-bottom-3 form-button">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}