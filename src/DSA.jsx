  import React from 'react';
  import './DSA.css';

  const DSA = () => {
    return (
      <div className="homepage-container">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h1>Explore Data Structures & Algorithms</h1>
            <p>Learn and master fundamental data structures and algorithms essential for problem-solving and coding interviews.</p>
            <a href="#algorithms-section" className="cta-button">Start Learning</a>
          </div>
        </section>

        {/* Algorithms Section */}
        <section id="algorithms-section" className="algorithms-section">
          <h2>Popular Data Structures & Algorithms</h2>
          <div className="algorithm-cards">
            <div className="algorithm-card hover-effect">
              <h3>Arrays</h3>
              <p>A data structure that stores elements in a fixed-size sequential collection. It provides efficient access to elements via indices.</p>
              <a href="/Arrays" className="card-button">Learn More</a>
            </div>
            <div className="algorithm-card hover-effect">
              <h3>Linked List</h3>
              <p>A linear data structure in which elements are stored in nodes, and each node points to the next node in the sequence.</p>
              <a href="/Linked_List" className="card-button">Learn More</a>
            </div>
            <div className="algorithm-card hover-effect">
              <h3>Stack & Queue</h3>
              <p>Stack follows the LIFO principle, while Queue follows FIFO. Both are essential for operations like backtracking and request handling.</p>
              <a href="/Stack_Queue" className="card-button">Learn More</a>
            </div>
            <div className="algorithm-card hover-effect">
              <h3>Tree & Graph</h3>
              <p>Tree is a hierarchical structure used in data organization, while Graph represents relationships between entities, widely used in network analysis.</p>
              <a href="/Tree_Graphs" className="card-button">Learn More</a>
            </div>
          </div>
        </section>
      </div>
    );
  };

  export default DSA;
