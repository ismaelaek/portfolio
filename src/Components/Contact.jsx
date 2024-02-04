import React, { useEffect, useRef, useState } from "react";
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
        setInfo({...info,[name]: value});
    };
    const sendEmail = (e) => {
        e.preventDefault();
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
        <div className="contact" id="contact">
            <div className="form-container">
                <form ref={form} className="form" onSubmit={sendEmail}>
                <h1 className="text-4xl text-white mb-3  text-center">Contact Me</h1>
                <div className="input">
                    <input type="text" name="user_name" onChange={handleChange} autoComplete={false} />
                    <label htmlFor="name">Name</label>
                </div>

                <div className="input">
                    <input  type="text" name="user_email" onChange={handleChange} autoComplete={false} />
                    <label htmlFor="email">E-mail</label>
                </div>

                <div className="input">
                    <textarea
                            className="text-white mt-4"
                            cols="30" rows="1"
                            name="message"
                            id="message"
                            onChange={handleChange}
                            autoComplete={false}
                        >
                        </textarea>
                    <label htmlFor="message">Message</label>
                </div>
                <input type='submit' value='Send message →' className="send-Button mt-4 self-center"/>
                </form>
            </div>
        </div>
    )
}


export default Contact;