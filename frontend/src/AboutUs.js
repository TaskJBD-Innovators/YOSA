import React from 'react';
import './AboutUs.css';
import Gallery1 from './Assets/hands.png';
import Gallery2 from './Assets/food.jpeg';
import Gallery3 from './Assets/food.jpeg';
import Gallery4 from './Assets/food.jpeg';
import Gallery5 from './Assets/food.jpeg';
import Gallery6 from './Assets/food.jpeg';

const AboutUs = () => {
  return (
    <div className="about-page">
      <header className="header">
        <div className="header-text">
          <h1>About Us</h1>
        </div>
      </header>

      <main className="main-content">
        <section className="about-section">
          <img src="https://placehold.co/400x300" alt="Group of people" className="about-image" />
          <div className="about-text">
            <h2>Your Support Is Really Powerful.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula.</p>
          </div>
        </section>

        <section className="mission-section">
          <h2>Let Us Come Together To Make A Difference</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur.</p>
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

        <section className="donation-section">
          <h2>Make a Donation</h2>
          <div className="donation-content">
            <div className="donation-text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <input type="text" placeholder="Enter amount" />
            </div>
            <button className="donate-button">Donate</button>
          </div>
        </section>

        <section className="features-section">
          <h2>Our Features</h2>
          <div className="features-cards">
            <div className="feature-card">
              <h3>Feature 1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="feature-card">
              <h3>Feature 2</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="feature-card">
              <h3>Feature 3</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
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
