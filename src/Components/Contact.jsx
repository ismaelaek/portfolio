let Contact = () => {
    return (
        <div className="contact">
            <div className="container">
                <form className="form">
                <div className="descr">Contact us</div>
                <div className="input">
                    <input required="" autocomplete="off" type="text"/>
                    <label for="name">Name</label>
                </div>

                <div className="input">
                    <input required="" autocomplete="off" name="email" type="text"/>
                    <label for="email">E-mail</label>
                </div>

                <div className="input">
                    <textarea required="" cols="30" rows="1" id="message"></textarea>
                    <label for="message">Message</label>
                </div>
                <button>Send message →</button>
                </form>
            </div>
        </div>
    )
}


export default Contact;