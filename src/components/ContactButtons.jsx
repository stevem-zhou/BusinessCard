import React from "react";
import "./ContactButtons.css"
import LinkedInLogo from "../images/linkedin.png"
import EmailLogo from "../images/EmailIcon.png"

export default function ContactButtons(){
    return (
        <div className="contact-section">
            <button className="email-button"><img src={EmailLogo}></img>Email</button>
            <button className="linkedin-button"><img src={LinkedInLogo}></img>LinkedIn</button>
        </div>
    )
}