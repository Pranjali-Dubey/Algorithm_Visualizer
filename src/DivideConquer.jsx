import React from 'react';
import './DivideConquer.css';

const DivideAndConquer = () => {
  return (
    <div className="divide-conquer-container">
      {/* Hero Section */}
      <section className="d-hero-section">
        <div className="d-hero-content">
          <h1>Uncover the Power of Divide & Conquer</h1>
          <p>
            Dive into the Divide and Conquer technique, a powerful algorithmic approach used to break down complex problems
            into simpler sub-problems, solve them recursively, and combine their results to get the final solution.
          </p>
          <a href="#d-concept-details" className="cta-btn">Explore Algorithms</a>
        </div>
      </section>

      {/* Concept Details Section */}
      <section id="d-concept-details" className="d-concept-info-card">
        <h2>What is Divide and Conquer?</h2>
        <div className="d-concept-details">
          <p>The Divide and Conquer approach involves three main steps:</p>
          <ul className="d-concept-steps">
            <li><strong>Divide:</strong> Break the problem into smaller, more manageable sub-problems.</li>
            <li><strong>Conquer:</strong> Solve each sub-problem recursively.</li>
            <li><strong>Combine:</strong> Merge the solutions of the sub-problems to obtain the final solution.</li>
          </ul>
          <p>
            This method is widely used in algorithms like Merge Sort, Quick Sort, and Binary Search for its
            efficiency and scalability, especially with large datasets.
          </p>
        </div>
      </section>

      {/* Algorithms Section */}
      <section id="d-algorithms-list" className="d-algorithms-section">
        <h2>Key Divide and Conquer Algorithms</h2>
        <div className="d-algorithm-cards">
          <div className="d-algorithm-card">
            <h3>Binary Search</h3>
            <p>Find the target value in a sorted array efficiently by narrowing the search range.</p>
            <a href="/Binary_Search" className="learn-more-btn">Learn More</a>
          </div>
          <div className="d-algorithm-card">
            <h3>Merge Sort</h3>
            <p>Sorts an array by recursively splitting it into halves and merging sorted subarrays.</p>
            <a href="/Merge_Sort" className="learn-more-btn">Learn More</a>
          </div>
          <div className="d-algorithm-card">
            <h3>Quick Sort</h3>
            <p>Divides an array into smaller subarrays using a pivot element and sorts them.</p>
            <a href="/Quick_Sort" className="learn-more-btn">Learn More</a>
          </div>
          <div className="d-algorithm-card">
            <h3>Selection Sort</h3>
            <p>Sorts an array by repeatedly finding the smallest element in the unsorted section.</p>
            <a href="/Selection_Sort" className="learn-more-btn">Learn More</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DivideAndConquer;
