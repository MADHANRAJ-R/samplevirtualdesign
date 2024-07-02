import React from 'react'
import "./aboutus.css"
import crown from "../Assets/crown.png"
import handshake from "../Assets/handshake.png"
import rating from "../Assets/rating.png"
import qualityService from "../Assets/quality-service.png"

const Aboutus = () => {
  return (
   <section className="aboutsection">
        <div className="aboutmaindiv">
            <h1>About Us</h1>
            <div className="aboutus2div">
                <div className="aboutuscard">
                    <img src={handshake} alt="companylogo" />
                    <b>ORIGIN OF EXPERIENCE</b>
                    <p>2015 - Present of Experience Editors</p>
                </div>
                <div className="aboutuscard">
                    <img src={qualityService} alt="companylogo" />
                    <b>REAL SERVICE</b>
                    <p>Available 24/7 on live chat, phone or email</p>
                </div>
                <div className="aboutuscard">
                    <img src={crown} alt="companylogo" />
                    <b>FREE TRIAL PROJECT</b>
                    <p>We do sample project free</p>
                </div>
                <div className="aboutuscard">
                    <img src={rating} alt="companylogo" />
                    <b>EDITING EXPERTS</b>
                    <p>Crafting perfection through the lens of editing expertise</p>
                </div>
            </div>
        </div>
   </section>
  )
}

export default Aboutus