import React from "react";
import "./Panel.css"
import Intro from "./IntroSection"
import Photo from "../images/steve.jpeg"
import ContactButtons from "./ContactButtons";
import About from "./About";
import Interests from "./Interests";
import Footer from "./Footer";

export default function Panel(){
    return(
        <div className="panel">
            <img src={Photo} className="personal-photo" alt="picture of me"></img>
            <Intro/>
            <ContactButtons/>
            <About/>
            <Interests/>
            <Footer/>
        </div>
    )
}