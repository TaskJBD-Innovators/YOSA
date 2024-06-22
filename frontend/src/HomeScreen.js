import React from 'react';
import './HomeScreen.css';
import Navbar from './Navbar';
import yosaIcon from './Assets/yosa.png';
import communityGathering from './Assets/aboutt.jpeg';
import donationEvent from './Assets/about1.jpeg';

const HomeScreen = () => {
  return (
    <div className="HomeScreen">
      <div className="hero">
          <Navbar />
          <img src={yosaIcon} alt="YOSA Icon" className="yosa-icon" />
      <div className="hero-content">
              <h1>Helping Each Other Can Make World Better</h1>
              <p>We Seek Out World Changers And Difference Makers Around The Globe<br></br> And Equip Them To Fulfill Their Unique Purpose.</p>
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
      <section className="welcome">
        <h3>Welcome To Charity</h3>
        <h1>Let Us Come Together To Make A Difference</h1>
      </section>
    </div>
  );
}

export default HomeScreen;
