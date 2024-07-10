import React, { useState } from 'react'; // Add useState import
import '../Styles/HomeScreen.css';
import yosaIcon from '../Assets/yosa.png';
import communityGathering from '../Assets/aboutt.jpeg';
import donationEvent from '../Assets/about1.jpeg';
import FunFacts from '../Components/FunFacts';
import CauseSection from '../Components/CauseSection';
import Navbar from '../Navbar';
import imagee from '../Assets/about2.jpeg';
import Donate from '../Components/Donate'; // Correctly import the DonationForm

const HomeScreen = () => {
  const [showDonationForm, setShowDonationForm] = useState(false); // State to manage form visibility

  const handleDonateClick = () => {
    setShowDonationForm(true);
  };

  return (
    <div className="HomeScreen">
      <div className="hero">
        <Navbar />
        <img src={yosaIcon} alt="YOSA Icon" className="yosa-icon" />
        <div className="hero-content">
          <h1>Helping Each Other Can Make World Better</h1>
          <p>
            We Seek Out World Changers And Difference Makers Around The Globe<br />
            And Equip Them To Fulfill Their Unique Purpose.
          </p>
          <div className="hero-buttons">
            <button onClick={handleDonateClick}>Donate Now</button>
            <button>Know About Us</button>
          </div>
        </div>
      </div>

      {showDonationForm ? (
        <Donate /> // Show the DonationForm if showDonationForm is true
      ) : (
        <>
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
            <div className="container">
              <div className="leftSection">
                <div className="welcomeText">Welcome to Charity</div>
                <div className="underline"></div>
                <div className="mainHeading">
                  Let Us Come Together
                  <br />
                  To Make a Difference
                </div>
                <div className="subText">
                  Towards a world where young people regardless of gender, unlock their full potential through youth leadership, mentorship, and empowerment, contributing to a brighter future for all.
                </div>
                <div className="missionSection">
                  <div className="missionBackground"></div>
                  <div className="missionContent">
                    <div className="missionHeader">
                      <div className="missionIcon"></div>
                      <div className="missionText">Our mission</div>
                    </div>
                    <div className="missionBody">
                      To empower young people of all genders through inclusive leadership, mentorship, and empowerment programs, fostering a culture of equality and collaboration. By providing opportunities for growth and advocacy.
                    </div>
                  </div>
                </div>
                <div className="visionSection">
                  <div className="visionBackground"></div>
                  <div className="visionContent">
                    <div className="visionHeader">
                      <div className="visionIcon"></div>
                      <div className="visionText">Our Vision</div>
                    </div>
                    <div className="visionBody">
                      Working towards a world where young people, irrespective of gender, unlock their full potential through youth leadership, mentorship, and empowerment, contributing to a brighter future for all.
                    </div>
                  </div>
                </div>
                <div className="donationSection">
                  <div className="donationHeader">Donations</div>
                  <div className="donationBackground"></div>
                  <div className="donationProgress"></div>
                  <div className="donationPercentage">75%</div>
                </div>
                <div className="medicalHelpSection">
                  <div className="medicalHelpHeader">Medical Help</div>
                  <div className="medicalHelpBackground"></div>
                  <div className="medicalHelpProgress"></div>
                  <div className="medicalHelpPercentage">90%</div>
                </div>
              </div>
              <div className="rightSection">
                <div className="imageContainer">
                  <div className="imageBackground"></div>
                  <img src={imagee} alt="Imagee" className="image-large" />
                </div>
                <div className="infoBackground"></div>
                <div className="infoOverlay"></div>
                <div className="infoText">
                  <div className="infoItem">Together, we're going to make the future</div>
                  <div className="infoItem">children where we are able to fulfill all</div>
                  <div className="infoItem">their requirements to keep them safe from withered world</div>
                  <div className="infoItem">We have already stepped out and start changing the world</div>
                  <div className="infoItem">Keeping safe them from war, inhumanity</div>
                  <div className="infoDot"></div>
                  <div className="infoDot"></div>
                  <div className="infoDot"></div>
                  <div className="infoDot"></div>
                  <div className="infoDot"></div>
                </div>
              </div>
            </div>
          </section>
          <FunFacts />
          <CauseSection />
        </>
      )}
    </div>
  );
};

export default HomeScreen;
