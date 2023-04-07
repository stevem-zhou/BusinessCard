import React from "react";
import "./ContactButtons.css"
import LinkedInLogo from "../images/linkedin.png"
import EmailLogo from "../images/EmailIcon.png"

export default function ContactButtons(){
    return (
        <div className="contact-section">
            <a href="mailto:stevenz9@uci.edu"><button className="email-button"><img src={EmailLogo}></img>Email</button></a>
            <a href="https://www.linkedin.com/in/stevzhou/"><button className="linkedin-button"><img src={LinkedInLogo}></img>LinkedIn</button></a>
        </div>
    )
}