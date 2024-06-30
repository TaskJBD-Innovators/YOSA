import React from 'react';
import'../Styles/CauseSection.css';


const causes = [
  {
    id: 1,
    category: 'Medical',
    title: 'Donate For Treatment And Medicine.',
    description: 'Funds Go Towards Surgeries, Treatments, And Doctor Visits. Provides Life-Saving Medications And Essential Drugs.',
    progress: 60,
    raised: 600,
    goal: 1000,
    image: require('../Assets/medical.jpeg'), },

      {
    id: 2,
    category: 'Homeless',
    title: 'Children We Work With',
    description: 'Provides Secure And Comfortable Housing. Many Children Lack A Safe Place To Live.',
    progress: 85,
    raised: 8500,
    goal: 10000,
    image: require('../Assets/wework.jpeg'),
 },

  {
    id: 3,
    category: 'Education',
    title: 'Help For Education',
    description: 'Help Us Provide Educational Opportunities To Homeless Children. Many Children Without Homes Miss Out On The Chance To Go To School.',
    progress: 90,
    raised: 9000,
    goal: 10000,
    image: require('../Assets/education.jpeg'),
 },

  {
    id: 4,
    category: 'Food',
    title: 'Help For Food',
    description: 'Help Us Provide Nutritious Meals To Homeless Children. Many Children Go Hungry Every Day, Lacking Access To Food For Healthy Growth And Development.',
    progress: 75,
    raised: 1500,
    goal: 2000,
     image: require('../Assets/food.jpeg'), 
    },
  
];

const CauseCard = ({ cause }) => (
  <div className="cause-card">
    <img src={cause.image} alt={cause.category} />
    <h3>{cause.category}</h3>
    <h2>{cause.title}</h2>
    <p>{cause.description}</p>
    <div className="progress-bar">
      <div className="progress" style={{ width: `${cause.progress}%` }}></div>
    </div>
    <p>Donatone: {cause.progress}%</p>
    <p>Raised: ${cause.raised}</p>
    <p>Goal: ${cause.goal}</p>
    <button className= "Donate-button">Donate Now</button>
  </div>
);

const CauseSection = () => (
  <div className="causes-section">
    <h1>Find The Popular Cause And Donate Them</h1>
    <div className="causes-list">
      {causes.map(cause => (
        <CauseCard key={cause.id} cause={cause} />
      ))}
    </div>
  </div>
);

export default CauseSection;
