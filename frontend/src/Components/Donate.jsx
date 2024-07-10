import React, { useState } from 'react';
import '../Styles/Donate.css';

const DonationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    donationAmount: '',
    cardNumber: '',
    expiryDate: '',
    cvc: '',
    billingAddress: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form-content">
        <div className="form-header">
          <h1>YOSA</h1>
          <h2>Donation Form</h2>
        </div>
        <div className="form-grid">
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
            />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
            />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
            />
          </div>
        </div>
        <div className="form-group">
          <label>How much do you wish to donate?</label>
          <div className="donation-input">
            <span className="currency">$</span>
            <input
              type="text"
              name="donationAmount"
              value={formData.donationAmount}
              onChange={handleChange}
              placeholder="Donation Amount"
            />
          </div>
        </div>
        <div className="form-group">
          <label>Credit Card</label>
          <div className="form-grid">
            <div className="form-group">
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                placeholder="Card Number"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                placeholder="MM/YY"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="cvc"
                value={formData.cvc}
                onChange={handleChange}
                placeholder="CVC"
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label>Billing Address</label>
          <input
            type="text"
            name="billingAddress"
            value={formData.billingAddress}
            onChange={handleChange}
            placeholder="Address Line 1"
          />
        </div>
        <div className="form-group">
          <button type="submit" className="submit-button">
            Donate
          </button>
        </div>
      </form>
    </div>
  );
};

export default DonationForm;
