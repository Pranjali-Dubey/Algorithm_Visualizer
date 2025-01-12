import React from 'react';
import './DynamicProgramming.css';

const DynamicProgramming = () => {
  return (
    <div className="dynamic-programming-container">
      {/* Hero Section */}
      <section className="dp-hero-section">
        <div className="dp-hero-content">
          <h1>Master the Power of Dynamic Programming</h1>
          <p>
            Explore Dynamic Programming, an optimization approach that breaks down problems into overlapping sub-problems and solves them efficiently using memoization or tabulation.
          </p>
          <a href="#dp-concept-details" className="cta-btn">Explore Algorithms</a>
        </div>
      </section>

      {/* Concept Details Section */}
      <section id="dp-concept-details" className="dp-concept-info-card">
        <h2>What is Dynamic Programming?</h2>
        <div className="dp-concept-details">
          <p>The Dynamic Programming approach involves two main strategies:</p>
          <ul className="dp-concept-steps">
            <li><strong>Memoization:</strong> Storing results of sub-problems to avoid redundant calculations.</li>
            <li><strong>Tabulation:</strong> Building a table from smaller sub-problems to larger ones.</li>
          </ul>
          <p>
            This technique is widely used in optimization problems like the Fibonacci sequence, Knapsack, and Matrix Chain Multiplication for its ability to save computational time and memory.
          </p>
        </div>
      </section>

      {/* Algorithms Section */}
      <section id="dp-algorithms-list" className="dp-algorithms-section">
        <h2>Key Dynamic Programming Algorithms</h2>
        <div className="dp-algorithm-cards">
          <div className="dp-algorithm-card">
            <h3>Fibonacci Sequence</h3>
            <p>Calculate Fibonacci numbers efficiently by storing previously computed values.</p>
            <a href="/Fibonacci" className="learn-more-btn">Learn More</a>
          </div>
          <div className="dp-algorithm-card">
            <h3>Knapsack Problem</h3>
            <p>Find the most valuable combination of items within a weight limit using a DP table.</p>
            <a href="/Knapsack" className="learn-more-btn">Learn More</a>
          </div>
          <div className="dp-algorithm-card">
            <h3>Longest Common Subsequence</h3>
            <p>Find the longest subsequence present in two sequences using a DP matrix.</p>
            <a href="/Longest_Common_Subsequence" className="learn-more-btn">Learn More</a>
          </div>
          <div className="dp-algorithm-card">
            <h3>Matrix Chain Multiplication</h3>
            <p>Optimize the order of matrix multiplications for minimal computational cost.</p>
            <a href="/Matrix_Chain_Multiplication" className="learn-more-btn">Learn More</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DynamicProgramming;
