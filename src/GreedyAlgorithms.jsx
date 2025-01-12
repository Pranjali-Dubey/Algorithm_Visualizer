import React from 'react';
import './GreedyAlgorithms.css';

const GreedyAlgorithms = () => {
  return (
    <div className="greedy-algorithms-container">
      {/* Hero Section */}
      <section className="ga-hero-section">
        <div className="ga-hero-content">
          <h1>Harness the Power of Greedy Algorithms</h1>
          <p>
            Explore Greedy Algorithms, an optimization technique that makes the locally optimal choice at each stage
            with the hope of finding the global optimum.
          </p>
          <a href="#ga-concept-details" className="cta-btn">Explore Algorithms</a>
        </div>
      </section>

      {/* Concept Details Section */}
      <section id="ga-concept-details" className="ga-concept-info-card">
        <h2>What is a Greedy Algorithm?</h2>
        <div className="ga-concept-details">
          <p>The Greedy Algorithm works by making the best choice at every step with the hope of finding the global optimum.</p>
          <ul className="ga-concept-steps">
            <li><strong>Greedy Choice:</strong> Make the best local choice at each step.</li>
            <li><strong>Optimal Substructure:</strong> The problem can be broken into smaller sub-problems that can be solved independently.</li>
          </ul>
          <p>
            Greedy algorithms are used in problems like Activity Selection, Huffman Coding, and Fractional Knapsack.
          </p>
        </div>
      </section>

      {/* Algorithms Section */}
      <section id="ga-algorithms-list" className="ga-algorithms-section">
        <h2>Key Greedy Algorithms</h2>
        <div className="ga-algorithm-cards">
          <div className="ga-algorithm-card">
            <h3>Activity Selection</h3>
            <p>Choose the maximum number of non-overlapping activities from a set of activities.</p>
            <a href="/Activity_Selection" className="learn-more-btn">Learn More</a>
          </div>
          <div className="ga-algorithm-card">
            <h3>Fractional Knapsack</h3>
            <p>Find the maximum value that can be carried in a knapsack with a given capacity, by selecting items based on value-to-weight ratio.</p>
            <a href="/Fractional_Knapsack" className="learn-more-btn">Learn More</a>
          </div>
          <div className="ga-algorithm-card">
            <h3>Huffman Coding</h3>
            <p>Efficiently encode data using variable-length codes, based on frequency of characters.</p>
            <a href="/Huffman_Coding" className="learn-more-btn">Learn More</a>
          </div>
          <div className="ga-algorithm-card">
            <h3>Prim's Algorithm</h3>
            <p>Find the minimum spanning tree of a graph using a greedy approach.</p>
            <a href="/Prims_Algorithm" className="learn-more-btn">Learn More</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GreedyAlgorithms;
