import React from 'react';
import '../Styles/AboutUs.css';
import Gallery1 from '../Assets/hands.png';
import Gallery2 from '../Assets/food.jpeg';
import Gallery3 from '../Assets/food.jpeg';
import Gallery4 from '../Assets/food.jpeg';
import Gallery5 from '../Assets/food.jpeg';
import Gallery6 from '../Assets/food.jpeg';
import Navbar from '../Components/Navbar';
import Aboutus1 from '../Assets/aboutus1.png';
import Aboutus2 from '../Assets/aboutus2.png';
import hope from '../Assets/hope.png';

const features = [
  {
    title: 'Food & Homeless Charity',
    description: 'Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Sed Diam Nonumy Tempor Invidunt Ut Labore Et Magna Aliquyam Erat, Sed Diam Voluptua......',
    points: [
      'Join Your Hand With Us For A Better Life',
      "Let's Do The Right Thing Now",
    ],
    icon: 'https://placehold.co/100x100?text=🏠',
  },
  {
    title: 'Make A Donation',
    description: 'Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Sed Diam Nonumy Tempor Invidunt Ut Labore Et Magna Aliquyam Erat, Sed Diam Voluptua......',
    points: [
      'Join Your Hand With Us For A Better Life',
      "Let's Do The Right Thing Now",
      'Lorem Ipsum Dolor Sit Amet',
    ],
    icon: 'https://placehold.co/100x100?text=💵',
  },
  {
    title: 'Non Profit NGO',
    description: 'Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Sed Diam Nonumy Tempor Invidunt Ut Labore Et Magna Aliquyam Erat, Sed Diam Voluptua......',
    points: [
      'Join Your Hand With Us For A Better Life',
      "Let's Do The Right Thing Now",
      'Lorem Ipsum Dolor Sit Amet',
      'Children Where We Are Able To Fulfill All',
    ],
    icon: 'https://placehold.co/100x100?text=🤝',
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
      <main className="about-us">
        <div className="images">
          <img src={Aboutus1} alt="Aboutus1" className="image-large" />
          <img src={Aboutus2} alt="Aboutus2" className="image-small" />
        </div>
        <div className="text-content">
          <h2>About Us</h2>
          <h1>Your Support Is Really Powerful.</h1>
          <p>
            Working Towards A World Where Young People, Irrespective Of Gender, Unlock Their Full Potential Through Youth Leadership, Mentorship, And Empowerment, Contributing To A Brighter Future For All.
          </p>
        </div>
        <section className="mission-section">
          <h2>Welcome to Charity</h2>
          <h1>Let Us Come Together <br />To Make A Difference</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur.</p>
          <div className="mission-cards">
            <div className="mission-card">
              <h3>Our Mission</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="mission-card">
              <h3>Get Involved</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </section>

        <div className="about-us-section">
          <div className="image-container">
            <img src={hope} alt="Painted rocks with hope message" className="main-image" />
            <div className="overlay">
              <ul className="overlay-text">
                <li>Together, We're Going to Make The Future</li>
                <li>Children Where We Are Able To Fulfill All</li>
                <li>Their Requirements To Keep <br />Them Safe From Withered World</li>
                <li>We Have Already Stepped Out And <br />Start Changing The World</li>
                <li>Keeping Safe Them From War, Inhumanity</li>
              </ul>
            </div>
          </div>
        </div>

        <section className="features-section">
          <h2>Our Features</h2>
          <div className="features-cards">
            {features.map((feature, index) => (
              <div key={index} className={`feature-card ${index === 0 ? 'feature-card-light' : 'feature-card-light'}`}>
                <div className="icon-wrapper">
                  <img src={feature.icon} alt={feature.title} className="icon" />
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
            <img src={Gallery1} alt="Gallery1" className="Gallery1" />
            <img src={Gallery2} alt="Gallery2" className="Gallery2" />
            <img src={Gallery3} alt="Gallery3" className="Gallery3" />
            <img src={Gallery4} alt="Gallery4" className="Gallery4" />
            <img src={Gallery5} alt="Gallery5" className="Gallery5" />
            <img src={Gallery6} alt="Gallery6" className="Gallery6" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;
