import React, { useState, useEffect } from 'react';
import './AboutUs.css'; // Import the CSS file

const AboutUs = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.className = theme; // Applying theme to body
  }, [theme]);

  return (
    <div className={`about-us-page ${theme}`}>
      {/* About Us Title */}
      <section className="about-us-title">
        <h1>About Us</h1>
        <p>Discover our mission and vision.</p>
      </section>

      {/* Mission Statement Section */}
      <section className="mission-section">
        <div className="card">
          <div className="icon">🎯</div>
          <h2>Our Mission</h2>
          <p>
            We aim to provide accessible education on algorithms and data structures, empowering individuals to become proficient problem solvers and innovators.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="vision-section">
        <div className="card">
          <div className="icon">🌍</div>
          <h2>Our Vision</h2>
          <p>
            We envision a world where everyone has the knowledge and tools to solve complex problems, enhancing their potential to innovate in the tech industry.
          </p>
        </div>
      </section>

      {/* Dynamic Values Section with Hover Effect */}
      <section className="values-section">
        <h2>Our Values</h2>
        <div className="values-grid">
          {[
            {
              title: 'Innovation',
              description: 'We push the boundaries of knowledge and technology.',
              icon: '🚀',
            },
            {
              title: 'Accessibility',
              description: 'We make learning materials available to everyone, everywhere.',
              icon: '🌍',
            },
            {
              title: 'Community',
              description: 'We foster a passionate community of learners and educators.',
              icon: '🤝',
            },
            {
              title: 'Integrity',
              description: 'We uphold honesty and transparency in all our endeavors.',
              icon: '🛡️',
            },
          ].map((value, index) => (
            <div className="value-card" key={index}>
              <div className="card-inner">
                <div className="card-front">
                  <div className="icon">{value.icon}</div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
                <div className="card-back">
                  <h3>{value.title} - More Info</h3>
                  <p>{value.description} Learn more about our values!</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Algorithm Learning Platform. All rights reserved.</p>
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/contact">Contact</a>
          <a href="/privacy">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
