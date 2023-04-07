import React from "react";
import FacebookIcon from "../images/FacebookIcon.png"
import InstagramIcon from "../images/InstagramIcon.png"
import "./Footer.css"

export default function Footer() {
    return(
        <footer className="footer-section">
            <a href="https://www.facebook.com/BillGates/" className="footer-anchor"><img src={FacebookIcon} alt="facebook logo" className="footer-facebook"/></a>
            <a href="https://www.instagram.com/steventhebeann/" className="footer-anchor"><img src={InstagramIcon} alt="instagram logo" className="footer-instagram"/></a>
        </footer>
    )
  
}
