import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Arrays.css';
import A_V from './assets/videos/Array_DSA.mp4'

const Arrays = () => {
  const navigate = useNavigate(); // Initialize the navigate hook

  const goToQuiz = () => {
    navigate('/Arrays-quiz'); // Use navigate to redirect to the quiz page
  };

  return (
    <div className="arrays-container">
      {/* Hero Section */}
      <section className="arrays-hero-section">
        <div className="arrays-hero-content">
          <h1>Unlock the Potential of Arrays</h1>
          <p>
            Dive into the world of arrays, fundamental data structures that store elements in a sequential manner, enabling efficient access and modification.
          </p>
          <a href="#arrays-concept-details" className="cta-btn">Explore Array Algorithms</a>
        </div>
      </section>

      {/* Concept Details Section */}
      <section id="arrays-concept-details" className="arrays-concept-info-card">
        <h2>Understanding Arrays</h2>
        <div className="arrays-concept-details">
          <p>Arrays allow you to store multiple elements of the same type in a fixed-size sequential collection.</p>
          <ul className="arrays-concept-steps">
            <li><strong>Static Arrays:</strong> Fixed in size and memory allocated at compile time.</li>
            <li><strong>Dynamic Arrays:</strong> Can grow or shrink during runtime, providing flexibility.</li>
          </ul>
          <p>
            Arrays are crucial for problems involving searching, sorting, and storage, making them fundamental in algorithms and data structure implementations.
          </p>
        </div>
      </section>

      {/* Video Section */}
      <div className="video-section">
        <video width="700" height="400" controls>
          <source src={A_V} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Link to Download the Video */}
      <div className="download-section">
        <a 
          href={A_V} 
          download="Arrays Tutorial.mp4"
          className="download-link"
        >
          Download Arrays Video
        </a>
        <div className="quiz-button-container">
          <button className="btn-primary" onClick={goToQuiz}>Go to Arrays Quiz</button>
        </div>
      </div>

      {/* Algorithms Section */}
      <section id="arrays-algorithms-list" className="arrays-algorithms-section">
        <h2>Key Array Algorithms</h2>
        <div className="arrays-algorithm-cards">
          <div className="arrays-algorithm-card">
            <h3>Linear Search</h3>
            <p>Find an element in an array by checking each element sequentially.</p>
            <a href="/Linear_Search" className="learn-more-btn">Learn More</a>
          </div>
          <div className="arrays-algorithm-card">
            <h3>Insertion Sort</h3>
            <p>Sort an array by picking elements one by one and inserting them into the correct position in the sorted part.</p>
            <a href="/Sorting" className="learn-more-btn">Learn More</a>
          </div>
          <div className="arrays-algorithm-card">
            <h3>Two Pointer Technique</h3>
            <p>Optimize array problems like finding pairs and subarrays with two pointers.</p>
            <a href="/Pointer" className="learn-more-btn">Learn More</a>
          </div>
          <div className="arrays-algorithm-card">
            <h3>Sliding Window</h3>
            <p>Solve subarray problems efficiently by maintaining a window of elements.</p>
            <a href="/Sliding_Window" className="learn-more-btn">Learn More</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Arrays;
