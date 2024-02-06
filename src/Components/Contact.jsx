import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { message } from "antd";

let Contact = () => {
    const form = useRef(null);
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const [info, setInfo] = useState({
        user_name: '',
        user_email: '',
        message: ''
    });
    const [errors, setErrors] = useState({
        user_name: false,
        user_email: false,
        message: false,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInfo({...info, [name]: value});
    };

    useEffect(() => {
        const newErrors = {
            user_name: info.user_name.trim() === '',
            user_email: !emailRegex.test(info.user_email),
            message: info.message.trim() === '',
        };
        setErrors(newErrors);
    }, [info]);

    const sendEmail = (e) => {
        e.preventDefault();
        if (!errors.message && !errors.user_email && !errors.user_name) {
            emailjs.sendForm(
                "service_peoyqai",
                "template_5b91txh",
                form.current,
                "SWJ-OM6vPqOtJhX2p"
            ).then(
                (result) => {
                    console.log(result.text);
                    message.success("Message sent");
                    setInfo({
                        user_name: '',
                        user_email: '',
                        message: ''
                    })
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
                    <input
                        type="text"
                        name="user_name"
                        onChange={handleChange}
                        style={{ borderColor: errors.user_name ? 'red' : '' }}
                        value={info.user_name}
                        placeholder="Name"
                    />
                    <label htmlFor="name">Name</label>
                </div>

                <div className="input">
                    <input
                        type="text" 
                        name="user_email"
                        onChange={handleChange}
                        style={{ borderColor: errors.user_email ? 'red' : '' }}
                        placeholder="example@domain.com"
                        value={info.user_email}

                    />
                    <label htmlFor="email">E-mail</label>
                </div>

                <div className="input">
                    <textarea
                            style={{ borderColor: errors.message ? 'red' : '' }}
                            className="text-white mt-4"
                            cols="30" rows="1"
                            name="message"
                            id="message"
                            onChange={handleChange}
                            value={info.message}
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
