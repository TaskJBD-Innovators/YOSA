// src/Components/AboutUs.jsx

import React from "react";
import "../Styles/AboutUs.css";
import Gallery1 from "../Assets/Gall1.png";
import Gallery2 from "../Assets/gall2.png";
import Gallery3 from "../Assets/gall3.png";
import Gallery4 from "../Assets/gall4.png";
import Gallery5 from "../Assets/gall5.png";
import Gallery6 from "../Assets/gall6.png";
import Aboutus1 from "../Assets/aboutus1.png";
import Aboutus2 from "../Assets/aboutus2.png";
import hope from "../Assets/hope.png";
import mission from "../Assets/missionicon.png";
import vision from "../Assets/visionicon.png";
import Navbar from "../Components/Navbar";  // Ensure Navbar is imported
import Testimonial from "../Components/Testimonial";
import Team from "../Components/Team";
import Members from "../Components/Members";

const features = [
  {
    title: "Food & Homeless Charity",
    description:
      "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Sed Diam Nonumy Tempor Invidunt Ut Labore Et Magna Aliquyam Erat, Sed Diam Voluptua......",
    points: [
      "Join Your Hand With Us For A Better Life",
      "Let's Do The Right Thing Now",
    ],
    icon: require("../Assets/houseicon.png"),
  },
  {
    title: "Make A Donation",
    description:
      "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Sed Diam Nonumy Tempor Invidunt Ut Labore Et Magna Aliquyam Erat, Sed Diam Voluptua......",
    points: [
      "Join Your Hand With Us For A Better Life",
      "Let's Do The Right Thing Now",
      "Lorem Ipsum Dolor Sit Amet",
    ],
    icon: require("../Assets/dolldo.png"),
  },
  {
    title: "Non Profit NGO",
    description:
      "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Sed Diam Nonumy Tempor Invidunt Ut Labore Et Magna Aliquyam Erat, Sed Diam Voluptua......",
    points: [
      "Join Your Hand With Us For A Better Life",
      "Let's Do The Right Thing Now",
      "Lorem Ipsum Dolor Sit Amet",
      "Children Where We Are Able To Fulfill All",
    ],
    icon: require("../Assets/shakeicon.png"),
  },
];

const AboutUs = () => {
  return (
    <div className="about-page">
      <header className="header">
        <Navbar />
        <div className="header-text">
          <h1>About Us</h1>
        </div>
      </header>

      <div className="support-section">
        <div className="images">
          <img
            src={Aboutus1}
            alt="Community gathering under trees"
            className="image image1"
          />
          <img
            src={Aboutus2}
            alt="People receiving awards"
            className="image image2"
          />
        </div>
        <div className="content">
          <h2>About Us</h2>
          <h1>Your Support Is Really Powerful.</h1>
          <p>
          The secret to happiness lies in helping others. Never underestimate
            the difference YOU can make in the lives of the poor, the abused and
            the helpless. The secret to happiness lies in helping others. Never
            underestimate the difference YOU can make in the lives of the poor,
            the abused and the helpless. The secret to happiness lies in helping
            others. Never underestimate the difference YOU can make in the lives
            of the poor, the abused and the helpless. The secret to happiness
            lies in helping others. Never underestimate the difference YOU can
            make in the lives of the poor, the abused and the helpless.{" "}
          </p>
          <button className="read-more">Read More</button>
        </div>
        <Team />
        <Members />
        <div className="charity-section">
          <div className="charity-content">
            <h2>Welcome To Charity</h2>
            <h1>Let Us Come Together To Make A Difference</h1>
            <p>
              Towards A World Where Young People Regardless Of Gender, Unlock
              Their Full Potential Through Youth Leadership, Mentorship, And
              Empowerment, Contributing To A Brighter Future For All.
            </p>

            <div className="mission-vision">
              <div className="mission">
                <img src={mission} alt="Mission icon" />
                <h3>Our Mission</h3>
                <p>
                  To Empower Young People Of All Genders Through Inclusive
                  Leadership.
                </p>
              </div>
              <div className="vision">
                <img src={vision} alt="Vision icon" />
                <h3>Our Vision</h3>
                <p>
                  Working Towards A World Where Young People, Irrespective Of
                  Gender, Unlock Their Full Potential Through Youth Leadership,
                  Mentorship, And Empowerment.
                </p>
              </div>
            </div>
            <div className="progress-bars">
              <div className="progress-bar">
                <span>Donations</span>
                <div className="bar">
                  <div className="fill" style={{ width: "75%" }}></div>
                </div>
                <span>75%</span>
              </div>
              <div className="progress-bar">
                <span>Medical Help</span>
                <div className="bar">
                  <div className="fill" style={{ width: "90%" }}></div>
                </div>
                <span>90%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="about-us-section">
          <div className="image-container">
            <img
              src={hope}
              alt="Painted rocks with hope message"
              className="main-image"
            />
            <div className="overlay">
              <ul className="overlay-text">
                <li>Together, We're Going to Make The Future</li>
                <li>Children Where We Are Able To Fulfill All</li>
                <li>
                  Their Requirements To Keep <br />
                  Them Safe From Withered World
                </li>
                <li>
                  We Have Already Stepped Out And <br />
                  Started Changing The World
                </li>
                <li>Keeping Safe From War, Inhumanity</li>
              </ul>
            </div>
          </div>
        </div>

        <section className="features-section">
          <h2>Our Features</h2>
          <div className="features-cards">
            {features.map((feature, index) => (
              <div
                key={index}
                className="feature-card"
              >
                <div className="icon-wrapper">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="icon"
                  />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <ul>
                  {feature.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="gallery-section">
          <h2>Our Gallery</h2>
          <div className="gallery-images">
            <img src={Gallery1} alt="Gallery 1" className="gallery-image" />
            <img src={Gallery2} alt="Gallery 2" className="gallery-image" />
            <img src={Gallery3} alt="Gallery 3" className="gallery-image" />
            <img src={Gallery4} alt="Gallery 4" className="gallery-image" />
            <img src={Gallery5} alt="Gallery 5" className="gallery-image" />
            <img src={Gallery6} alt="Gallery 6" className="gallery-image" />
          </div>
        </section>

        <section className="team-section">
          <h2>Meet Our Team</h2>
          <Team />
        </section>

        <Testimonial />
      </div>
    </div>
  );
};

export default AboutUs;
