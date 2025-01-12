import React from 'react';
import DSA from './DSA';
import DAA from './DAA';
import ML from './ML';
import AboutUs from './AboutUs';
import DAAimage from "./assets/images/DAA1.png";
import DSAimage from "./assets/images/DSA1.png";
import MLimage from "./assets/images/ML1.png";
import HPimage from "./assets/images/Algorithm_Visualizer.png";
import './Homepage.css'; // Import CSS file

const Homepage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Our Algorithm Visualizer</h1>
          <p className="hero-subtitle">Explore algorithms interactively and visually.</p>
          <button className="btn-primary">Get Started</button>
        </div>
        <div className="hero-image-wrapper">
          <img src={HPimage} alt="Algorithm Visualizer" className="hero-image" />
        </div>
      </section>

      {/* Topics Section */}
      <section className="topics-section">
        <div className="container">
          <h2 className="topics-title">Explore Subjects</h2>
          <div className="card-grid">
            <div className="card">
              <img src={DSAimage} alt="Data Structures & Algorithms" className="card-image" />
              <h5 className="card-title">Data Structures & Algorithms</h5>
              <p className="card-text">Learn about arrays, linked lists, stacks, queues, and more.</p>
              <a href="#dsa" className="btn-card">Learn More</a>
            </div>

            <div className="card">
              <img src={DAAimage} alt="Design & Analysis of Algorithms" className="card-image" />
              <h5 className="card-title">Design & Analysis of Algorithms</h5>
              <p className="card-text">Explore sorting, searching, and other fundamental algorithms.</p>
              <a href="#daa" className="btn-card">Learn More</a>
            </div>

            <div className="card">
              <img src={MLimage} alt="Machine Learning Algorithms" className="card-image" />
              <h5 className="card-title">Machine Learning Algorithms</h5>
              <p className="card-text">Dive into neural networks, clustering, and regression models.</p>
              <a href="#ml" className="btn-card">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Key Features</h2>
        <div className="features-container">
          <div className="feature-card">
            <i className="fas fa-search"></i>
            <h3>Interactive Visualizations</h3>
            <p>Experience algorithms through step-by-step visualizations and animations.</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-book-open"></i>
            <h3>Detailed Explanations</h3>
            <p>Get insights and explanations for each algorithm with practical examples.</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-tasks"></i>
            <h3>Practice Problems</h3>
            <p>Test your knowledge with quizzes and coding exercises after each topic.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Our Learners Say</h2>
        <div className="testimonial-card">
          <p>"This platform has transformed my understanding of data structures!"</p>
          <h4>- Alex G., Software Engineer</h4>
        </div>
        <div className="testimonial-card">
          <p>"The visualizations make complex algorithms so much simpler to grasp."</p>
          <h4>- Priya M., Computer Science Student</h4>
        </div>
        <div className="testimonial-card">
          <p>"The hands-on approach is incredible. My coding skills have improved significantly!"</p>
          <h4>- Javier S., Bootcamp Grad</h4>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq">
          <h4>How does the Algorithm Visualizer work?</h4>
          <p>Our visualizer uses step-by-step animations to make each algorithm's flow understandable.</p>
        </div>
        <div className="faq">
          <h4>Are there coding challenges available?</h4>
          <p>Yes! We offer coding challenges to help you apply what you learn.</p>
        </div>
        <div className="faq">
          <h4>Can I track my learning progress?</h4>
          <p>Yes, our platform provides a personalized dashboard to monitor your progress and achievements.</p>
        </div>
      </section>

      {/* Sections for DSA, DAA, ML, and AboutUs */}
      <div id="dsa"><DSA /></div>
      <div id="daa"><DAA /></div>
      <div id="ml"><ML /></div>
      <AboutUs />

      {/* Footer Section */}
<footer className="footer">
  <div className="footer-bottom">
    <p>&copy; 2024 Algorithm Visualizer. All rights reserved.</p>
  </div>
</footer>

    </div>
  );
};

export default Homepage;
