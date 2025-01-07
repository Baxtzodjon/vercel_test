"use client"

import { useState } from "react";
import emailjs from '@emailjs/browser';

const About = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const serviceId = "service_sha512n";
        const templateId = "template_lpfgy3w";
        const publicKey = "B8Vj1n9a77DivjGuN";

        const templateParams = {
            from_name: name,
            from_email: email,
            from_phone: phone,
            to_name: "Rasulov Baxtzod",
            message: message,
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                alert("Message sent successfully!");
                console.log("Message sent successfully:", response);
                setName("");
                setEmail("");
                setPhone("");
                setMessage("");
            })
            .catch((error) => {
                alert("Failed to send message. Please try again later.");
                console.error("Failed to send message:", error);
            })
    };

    return (
        <div className="flex items-center justify-center flex-wrap">

            <div className="flex items-center justify-center flex-col gap-5 p-10">

                <h1 className="text-[#000000] text-[48px] font-semibold leading-[36px]">About</h1>

                <p className="text-[#000000] text-[24px] font-medium leading-[26px] text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam cumque ut recusandae tenetur quia, asperiores praesentium a placeat adipisci velit autem architecto vitae veritatis sequi voluptates expedita doloremque eum eveniet?</p>

            </div>

            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label htmlFor="phone">Phone</label>
                <input
                    type="phone"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />
                <button type="submit">Submit</button>
            </form>

        </div>
    )
}

export default About;