import React, { useState } from 'react';
import axios from 'axios';
import '../Styles/HomeScreen.css';
import communityGathering from '../Assets/aboutt.jpeg';
import donationEvent from '../Assets/about1.jpeg';
import FunFacts from '../Components/FunFacts';
import CauseSection from '../Components/CauseSection';
import Navbar from '../Components/Navbar';
import Donate from '../Components/Donate';
import Registration from '../Components/Registration';
import CharitySection from '../Components/CharitySection';
import News from '../Components/News';
import { PaystackButton } from 'react-paystack';

const HomeScreen = () => {
  const [showDonationForm, setShowDonationForm] = useState(false);
  const [showVolunteerForm, setShowVolunteerForm] = useState(false);
  const [donationData, setDonationData] = useState({ email: '', name: '', amount: 0 });
  const [paystackConfig, setPaystackConfig] = useState({ publicKey: 'pk_test_fef259dc53273c2348a226b62931b00eb6f4cb7c', amount: 0, email: '', reference: '' });

  const handleDonateClick = () => {
    setShowDonationForm(true);
    setShowVolunteerForm(false);
  };

  const handleVolunteerClick = () => {
    setShowVolunteerForm(true);
    setShowDonationForm(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDonationData({ ...donationData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/initiate-payment/', donationData)
      .then(response => {
        const { data } = response;
        setPaystackConfig({
          ...paystackConfig,
          amount: data.amount,
          email: data.email,
          reference: data.reference
        });
      })
      .catch(error => {
        console.error('Error initiating payment:', error);
      });
  };

  const onSuccess = (reference) => {
    axios.get(`/api/verify-payment/?reference=${reference.reference}`)
      .then(response => {
        console.log('Payment verified:', response.data);
      })
      .catch(error => {
        console.error('Error verifying payment:', error);
      });
  };

  const onClose = () => {
    console.log('Transaction was not completed, window closed.');
  };

  const showForms = showDonationForm || showVolunteerForm;

  return (
    <div className="HomeScreen">
      {!showForms && <Navbar />}
      {!showForms && (
        <div className="hero">
          <div className="hero-content">
            <h1>Helping Each Other Can Make World Better</h1>
            <p>
              We Seek Out World Changers And <br />Difference Makers Around The Globe<br />
              And Equip Them To Fulfill Their Unique Purpose.
            </p>
            <div className="hero-buttons">
              <button onClick={handleDonateClick}>Donate Now</button>
              <button onClick={handleVolunteerClick}>Volunteer With Us</button>
            </div>
          </div>
        </div>
      )}

      {showDonationForm && (
        <div className="donation-form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={donationData.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={donationData.email}
              onChange={handleInputChange}
              required
            />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              value={donationData.amount}
              onChange={handleInputChange}
              required
            />
            <button type="submit">Proceed to Pay</button>
          </form>
          <PaystackButton
            publicKey={paystackConfig.publicKey}
            amount={paystackConfig.amount}
            email={paystackConfig.email}
            reference={paystackConfig.reference}
            onSuccess={onSuccess}
            onClose={onClose}
          />
        </div>
      )}

      {showVolunteerForm && <Registration />}

      {!showForms && (
        <>
          <div className="support-section">
            <div className="images">
              <img
                src={communityGathering}
                alt="Community gathering under trees"
                className="image image1"
              />
              <img
                src={donationEvent}
                alt="People receiving awards"
                className="image image2"
              />
            </div>
            <div className="content">
              <h2>About Us</h2>
              <h1>Your Support Is Really Powerful.</h1>
              <p>
                Working Towards A World Where Young People, Irrespective Of Gender,
                Unlock Their Full Potential Through Youth Leadership, Mentorship,
                And Empowerment, Contributing To A Brighter Future For All.
              </p>
              <button className="read-more">Read More</button>
            </div>
          </div>
          <CharitySection />
          <FunFacts />
          <CauseSection />
          <News />
        </>
      )}
    </div>
  );
};

export default HomeScreen;
