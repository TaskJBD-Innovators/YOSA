// src/CardComponent.js

import React from 'react';
import '../Styles/WelcomeToCharity.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const WelcomeToCharity = () => {
  return (
    <div className="wrapper">
      <div className="card">
        <input type="checkbox" id="card1" className="more" aria-hidden="true" />
        <div className="content">
          <div
            className="front"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1529408686214-b48b8532f72c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=986e2dee5c1b488d877ad7ba1afaf2ec&auto=format&fit=crop&w=1350&q=80')",
            }}
          >
            <div className="inner">
              <h2>Cozy apartment</h2>
              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
              <label htmlFor="card1" className="button" aria-hidden="true">
                Details
              </label>
            </div>
          </div>
          <div className="back">
            <div className="inner">
              <div className="info">
                <span>5</span>
                <div className="icon">
                  <i className="fas fa-users"></i>
                  <span>people</span>
                </div>
              </div>
              <div className="info">
                <span>4</span>
                <div className="icon">
                  <i className="fas fa-door-open"></i>
                  <span>rooms</span>
                </div>
              </div>
              <div className="info">
                <span>3</span>
                <div className="icon">
                  <i className="fas fa-bed"></i>
                  <span>beds</span>
                </div>
              </div>
              <div className="info">
                <span>1</span>
                <div className="icon">
                  <i className="fas fa-bath"></i>
                  <span>bath</span>
                </div>
              </div>
              <div className="description">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, accusamus.</p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates earum nostrum ipsam ullam,
                  reiciendis nam consectetur? Doloribus voluptate architecto possimus perferendis tenetur nemo amet
                  temporibus, enim soluta nam, debitis.
                </p>
              </div>
              <div className="location">Warsaw, Poland</div>
              <div className="price">38€ / day</div>
              <label htmlFor="card1" className="button return" aria-hidden="true">
                <i className="fas fa-arrow-left"></i>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="card card2">
        <input type="checkbox" id="card2" className="more" aria-hidden="true" />
        <div className="content">
          <div
            className="front"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1529408686214-b48b8532f72c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=986e2dee5c1b488d877ad7ba1afaf2ec&auto=format&fit=crop&w=1350&q=80')",
            }}
          >
            <div className="inner">
              <h2>Modern apartment</h2>
              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
              <label htmlFor="card2" className="button" aria-hidden="true">
                Details
              </label>
            </div>
          </div>
          <div className="back">
            <div className="inner">
              <div className="info">
                <span>6</span>
                <div className="icon">
                  <i className="fas fa-users"></i>
                  <span>people</span>
                </div>
              </div>
              <div className="info">
                <span>5</span>
                <div className="icon">
                  <i className="fas fa-door-open"></i>
                  <span>rooms</span>
                </div>
              </div>
              <div className="info">
                <span>4</span>
                <div className="icon">
                  <i className="fas fa-bed"></i>
                  <span>beds</span>
                </div>
              </div>
              <div className="info">
                <span>2</span>
                <div className="icon">
                  <i className="fas fa-bath"></i>
                  <span>bath</span>
                </div>
              </div>
              <div className="description">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, accusamus.</p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates earum nostrum ipsam ullam,
                  reiciendis nam consectetur? Doloribus voluptate architecto possimus perferendis tenetur nemo amet
                  temporibus, enim soluta nam, debitis.
                </p>
              </div>
              <div className="location">Krakow, Poland</div>
              <div className="price">45€ / day</div>
              <label htmlFor="card2" className="button return" aria-hidden="true">
                <i className="fas fa-arrow-left"></i>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeToCharity;
