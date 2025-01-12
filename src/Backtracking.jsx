import React from 'react';
import './Backtracking.css';

const BacktrackingAlgorithms = () => {
  return (
    <div className="backtracking-algorithms-container">
      {/* Hero Section */}
      <section className="ba-hero-section">
        <div className="ba-hero-content">
          <h1>Explore the Power of Backtracking Algorithms</h1>
          <p>
            Dive into Backtracking, a problem-solving technique that builds incrementally towards a solution by
            undoing steps when a dead-end is reached.
          </p>
          <a href="#ba-concept-details" className="cta-btn">Explore Algorithms</a>
        </div>
      </section>

      {/* Concept Details Section */}
      <section id="ba-concept-details" className="ba-concept-info-card">
        <h2>What is Backtracking?</h2>
        <div className="ba-concept-details">
          <p>Backtracking is a general algorithmic technique used to find solutions to problems incrementally, by trying all possibilities.</p>
          <ul className="ba-concept-steps">
            <li><strong>Explore:</strong> Try to build the solution step by step.</li>
            <li><strong>Backtrack:</strong> If the current solution is not valid, undo the last step and try again.</li>
          </ul>
          <p>
            Common backtracking algorithms include the N-Queens problem, Sudoku solver, and generating all subsets of a set.
          </p>
        </div>
      </section>

      {/* Algorithms Section */}
      <section id="ba-algorithms-list" className="ba-algorithms-section">
        <h2>Key Backtracking Algorithms</h2>
        <div className="ba-algorithm-cards">
          <div className="ba-algorithm-card">
            <h3>N-Queens Problem</h3>
            <p>Place N queens on an N×N chessboard such that no two queens threaten each other.</p>
            <a href="/N_Queens" className="learn-more-btn">Learn More</a>
          </div>
          <div className="ba-algorithm-card">
            <h3>Sudoku Solver</h3>
            <p>Fill a 9×9 Sudoku grid by using a backtracking algorithm to find valid placements for numbers.</p>
            <a href="/Sudoku_Solver" className="learn-more-btn">Learn More</a>
          </div>
          <div className="ba-algorithm-card">
            <h3>Subset Generation</h3>
            <p>Generate all possible subsets of a set using backtracking.</p>
            <a href="/Subset_Generation" className="learn-more-btn">Learn More</a>
          </div>
          <div className="ba-algorithm-card">
            <h3>Hamiltonian Path</h3>
            <p>Find a path through a graph that visits each vertex exactly once.</p>
            <a href="/Hamiltonian_Path" className="learn-more-btn">Learn More</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BacktrackingAlgorithms;
