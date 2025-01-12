import React from 'react';
import './DAA.css';

const DAA = () => {
  return (
    <div className="homepage-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Explore Design and Analysis of Algorithms</h1>
          <p>Gain insights into the design and analysis of efficient algorithms essential for problem-solving and optimization.</p>
          <a href="#algorithms-section" className="cta-button">Start Learning</a>
        </div>
      </section>

      {/* Algorithms Section */}
      <section id="algorithms-section" className="algorithms-section">
        <h2>Popular DAA Techniques & Algorithms</h2>
        <div className="algorithm-cards">
          <div className="algorithm-card hover-effect">
            <h3>Divide and Conquer</h3>
            <p>A fundamental algorithmic technique that divides a problem into subproblems, solves them, and combines their results.</p>
            <a href="/Divide_Conquer" className="card-button">Learn More</a>
          </div>
          <div className="algorithm-card hover-effect">
            <h3>Greedy Algorithms</h3>
            <p>A method that builds up a solution piece by piece, always choosing the next piece with the most apparent benefit.</p>
            <a href="/Greedy_Algorithms" className="card-button">Learn More</a>
          </div>
          <div className="algorithm-card hover-effect">
            <h3>Dynamic Programming</h3>
            <p>A technique to solve problems by breaking them down into simpler overlapping subproblems and storing solutions.</p>
            <a href="/Dynamic_Programming" className="card-button">Learn More</a>
          </div>
          <div className="algorithm-card hover-effect">
            <h3>Backtracking</h3>
            <p>An approach for finding all (or some) solutions by incrementally building candidates and abandoning them when they fail.</p>
            <a href="/Backtracking" className="card-button">Learn More</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DAA;
