import React from 'react';
import '../Styles/Team.css';
import ChelseaImage from '../Assets/Chelsea.jpeg';
import Albertina from '../Assets/Albertina .jpeg';
import Edward from '../Assets/Edward.jpg';
import Divine from '../Assets/Divine .jpeg';





const Team = () => {
  const teamMembers = [
    {
      name: 'Chelsea Armah',
      title: 'Chief Executive Director',
      image: ChelseaImage,
      profession: 'Clinical Psychologist',
      career: 'Social Worker / Human Rights Activist / Motivational Speaker / Peer Coach',
    },
    {
      name: 'Albertina Alipui',
      title: 'Finance and Administrative Manager',
      image: Albertina,
      profession: 'Accountant',
      career: 'Career: Social Worker / Activist / Gender Advocate / Safeguarding Coordinator',
    },
    {
      name: 'Edward Mensah',
      title: 'Programmes Coordinator',
      image: Edward,
      profession: 'Social Worker',
      career: 'Social Worker / Youth Advocate',
    },
    {
      name: 'Divine Ovie Sosu',
      title: 'IT Specialist/Social Media Coordinator',
      image: Divine,
      profession: 'Cloud Engineer',
      career: 'Social Influencer / Social organizer / Advocate for Youth in IT /Motivational Speaker  ',
    },
  ];

  return (
    <div className="team-container">
      <h2 className="headingg">Meet Our Team</h2>
      <h2 className="headingg">YOUTH SPACE AFRIKA (YoSA) BOARD OF ADVISORS</h2>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <img src={member.image} alt={member.name} />
            <h3 className="temp">{member.name}</h3>
            <p className="teamp">{member.title}</p>
            <p className="teamp">Profession: {member.profession}</p>
            <p className="teamp">Career: {member.career}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
