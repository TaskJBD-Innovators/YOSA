import React from "react"
import './AboutUs.css';
import yosaIcon from './Assets/yosa.png'
import Navbar from "./Navbar";

const AboutUs = () => {
    return (
      <div className="AboutUs">
        <div className="hero">
          <Navbar />
          <img src={yosaIcon} alt="YOSA Icon" className="yosa-icon" />
          <div className="about-content">
            <h1>Helping Each Other Can Make World Better</h1>
            <p>
              We Seek Out World Changers And Difference Makers Around The Globe<br /> 
              And Equip Them To Fulfill Their Unique Purpose.
            </p>
            </div>
            </div>
            </div>
        );
}

export default AboutUs;
