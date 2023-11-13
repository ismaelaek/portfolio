import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { message } from "antd";
let Contact = () => {
    const [info, setInfo] = useState({
        user_name: '',
        user_email: '',
        message: ''
    })
    const [formErrors, setFormErrors] = useState({
        user_name: false,
        user_email: false,
        message: false,
    });
    const form = useRef();
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInfo({
        ...info,
        [name]: value,
        });
    };
    const sendEmail = (e) => {
        e.preventDefault();

        // Validate Name and Message
        const errors = {
        user_name: info.user_name.trim() === '',
        user_email: !(emailRegex.test(info.user_email.trim())),
        message: info.message.trim() === '',
        };

        if (errors.user_name || errors.user_email || errors.message) {
        setFormErrors(errors);
        } else {
        setFormErrors({
            user_name: false,
            user_email: false,
            message: false,
        });

        emailjs.sendForm(
            "service_peoyqai",
            "template_5b91txh",
            form.current,
            "SWJ-OM6vPqOtJhX2p"
            )
            .then(
            (result) => {
                console.log(result.text);
                message.success("message sent");
            },
            (error) => {
                console.log(error.text);
                message.error("Couldn't send email");
            }
            );
        }
    };
    return (
        <div className="contact">
            <div className="container">
                <form ref={form} className="form" onSubmit={sendEmail}>
                <div className="descr">Contact Me</div>
                <div className="input">
                    <input 
                    required="" type="text" name="user_name" onChange={handleChange}  style={{borderColor : !info.user_name ? 'red' : ''}} />
                    {/* <label htmlFor="name">Name</label> */}
                </div>

                <div className="input">
                    <input required="" name="user_email" type="text" onChange={handleChange}  style={{borderColor : !info.user_email ? 'red' : ''}}/>
                    {/* <label htmlFor="email">E-mail</label> */}
                </div>

                <div className="input">
                    <textarea required="" cols="30" rows="1" name="message" id="message" onChange={handleChange} style={{borderColor : !info.message ? 'red' : ''}} ></textarea>
                    {/* <label htmlFor="message">Message</label> */}
                </div>
                <input type='submit' value='Send message →' className="send-Button"/>
                </form>
            </div>
        </div>
    )
}


export default Contact;