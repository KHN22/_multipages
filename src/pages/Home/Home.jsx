import React from 'react'
import './Home.css'

const Home = () => {
    return (
      <div className="profile-container">
        <div className="profile-card">
          <div className="profile-image">
            <img src="src/pages/Home/55744562_345284676113848_5105809378628337664_n.jpg" alt="Profile" />
          </div>
          <div className="profile-details">
            <h2>Khing , Apiwit Saisan</h2>
            <p className="personal-info">
              <strong>Email:</strong> xxxxxxx@gmail.com <br />
              <strong>Phone:</strong> xxx-xxx-xxxx <br />
              <strong>Location:</strong> Bangkok, Thailand
            </p>
            <div className="skills-interests">
              <h3>Skills</h3>
              <p>Web Development, React, Node.js, CSS, JavaScript</p>
              <h3>Interests</h3>
              <p>Gaming , Photography , Editor , Music Lover</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
export default Home;