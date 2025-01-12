import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './LinkedList.css';

const LinkedList = () => {
  const navigate = useNavigate();

  const goToQuiz = () => {
    navigate('/Linked-list-quiz'); // Use navigate to redirect to the quiz page
  };

  return (
    <div className="linked-list-container">
      {/* Hero Section */}
      <section className="ll-hero-section">
        <div className="ll-hero-content">
          <h1>Master Linked Lists</h1>
          <p>
            Discover the versatility of linked lists, a dynamic data structure that stores elements as nodes with pointers, allowing for efficient insertion and deletion.
          </p>
          <a href="#ll-concept-details" className="cta-btn">Explore Linked List Algorithms</a>
        </div>
      </section>

      {/* Concept Details Section */}
      <section id="ll-concept-details" className="ll-concept-info-card">
        <h2>Understanding Linked Lists</h2>
        <div className="ll-concept-details">
          <p>Linked lists consist of nodes where each node contains data and a pointer to the next node.</p>
          <ul className="ll-concept-steps">
            <li><strong>Singly Linked List:</strong> Each node points to the next node, forming a single sequence.</li>
            <li><strong>Doubly Linked List:</strong> Each node has pointers to both previous and next nodes.</li>
            <li><strong>Circular Linked List:</strong> The last node points back to the first, forming a circular sequence.</li>
          </ul>
          <p>
            Linked lists are ideal for applications needing dynamic memory allocation, such as managing lists of items where frequent insertions and deletions are required.
          </p>
          <div className="quiz-button-container">
            <button className="btn-primary" onClick={goToQuiz}>Go to Linked List Quiz</button>
          </div>
        </div>
      </section>

      {/* Algorithms Section */}
      <section id="ll-algorithms-list" className="ll-algorithms-section">
        <h2>Key Linked List Algorithms</h2>
        <div className="ll-algorithm-cards">
          <div className="ll-algorithm-card">
            <h3>Reverse Linked List</h3>
            <p>Reverse the order of nodes in a linked list by adjusting pointers.</p>
            <a href="/Reverse_Linked_List" className="learn-more-btn">Learn More</a>
          </div>
          <div className="ll-algorithm-card">
            <h3>Detect Cycle</h3>
            <p>Determine if a linked list contains a cycle using a two-pointer technique.</p>
            <a href="/Detect_Cycle" className="learn-more-btn">Learn More</a>
          </div>
          <div className="ll-algorithm-card">
            <h3>Merge Two Sorted Lists</h3>
            <p>Merge two sorted linked lists into a single sorted list.</p>
            <a href="/Merge_Sorted_Lists" className="learn-more-btn">Learn More</a>
          </div>
          <div className="ll-algorithm-card">
            <h3>Remove Duplicates</h3>
            <p>Remove duplicate nodes from a sorted linked list for uniqueness.</p>
            <a href="/Remove_Duplicates" className="learn-more-btn">Learn More</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LinkedList;
