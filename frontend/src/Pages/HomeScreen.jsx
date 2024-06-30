import React from 'react';
import '../Styles/HomeScreen.css';
import yosaIcon from '../Assets/yosa.png';
import communityGathering from '../Assets/aboutt.jpeg';
import donationEvent from '../Assets/about1.jpeg';
import FunFacts from '../Components/FunFacts';
import Charity from '../Components/Charity';
import CauseSection from '../Components/CauseSection';

const HomeScreen = () => {
  return (
    <div className="HomeScreen">
      <div className="hero">
<<<<<<< HEAD:frontend/src/Pages/HomeScreen.jsx
        <img src={yosaIcon} alt="YOSA Icon" className="yosa-icon" />
=======
        <Navbar />
        {/* <img src={yosaIcon} alt="YOSA Icon" className="yosa-icon" /> */}

        {/* I am trying to remove the yosa  */}
        
>>>>>>> 4e62f08ae859630b137eebc8fe139dc36c92a8fa:frontend/src/HomeScreen.js
        <div className="hero-content">
          <h1>Helping Each Other Can Make World Better</h1>
          <p>
            We Seek Out World Changers And Difference Makers Around The Globe<br /> 
            And Equip Them To Fulfill Their Unique Purpose.
          </p>
          <div className="hero-buttons">
            <button>Donate Now</button>
            <button>Know About Us</button>
          </div>
        </div>
      </div>
      <section className="about-us">
        <div className="images">
          <img src={communityGathering} alt="Community Gathering" className="image-large" />
          <img src={donationEvent} alt="Donation Event" className="image-small" />
        </div>
        <div className="text-content">
          <h2>About Us</h2>
          <h1>Your Support Is Really Powerful.</h1>
          <p>
            Working Towards A World Where Young People, Irrespective Of Gender, Unlock Their Full Potential Through Youth Leadership, Mentorship, And Empowerment, Contributing To A Brighter Future For All.
          </p>
          <button className="read-more">Read More</button>
        </div>
      </section>
      <Charity/>
      <FunFacts/>
      <CauseSection/>
    </div>
  );
}

export default HomeScreen;
