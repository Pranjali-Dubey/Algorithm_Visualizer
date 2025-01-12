import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StackQueue.css';
import S_V from './assets/videos/Stack_DSA.mp4';

const StackQueue = () => {
  const navigate = useNavigate(); // Initialize navigate

  const goToQuizS = () => {
    navigate('/Stack-quiz'); // Use navigate to redirect to the Stack quiz page
  };

  const goToQuizQ = () => {
    navigate('/Queue-quiz'); // Use navigate to redirect to the Queue quiz page
  };

  return (
    <div className="stack-queue-container">
      
      {/* Merged Hero Section */}
      <section className="stack-queue-hero-section">
        <div className="stack-queue-hero-content">
          <h1>Explore Stack & Queue Operations</h1>
          <p>
            Learn about Stacks (LIFO) and Queues (FIFO), essential data structures for various problem-solving scenarios.
          </p>
          <a href="#concept-details" className="cta-btn">Explore Algorithms</a>
        </div>
      </section>

      {/* Stack Section */}
      <section id="concept-details" className="concept-info-section">
        <div className="concept-info-card">
          <h2>What is a Stack?</h2>
          <p>Stacks follow a LIFO (Last In, First Out) principle, making them perfect for tasks like undo operations, browser history, and recursion.</p>
          <ul className="concept-steps">
            <li><strong>Push:</strong> Add an element to the top of the stack.</li>
            <li><strong>Pop:</strong> Remove the top element from the stack.</li>
            <li><strong>Peek:</strong> View the top element without removing it.</li>
          </ul>
        </div>
        <div className="video-section">
          <video width="700" height="400" controls>
            <source src={S_V} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Link to Download the Video */}
        <div className="download-section">
          <a 
            href={S_V} 
            download="Stack Tutorial.mp4"
            className="download-link"
          >
            Download Stack Video
          </a>
          <div className="quiz-button-container">
            <button className="btn-primary" onClick={goToQuizS}>Go to Stack Quiz</button>
          </div>
        </div>

        <div id="stack-algorithms" className="algorithm-section">
          <h3>Stack Algorithms</h3>
          <div className="algorithm-cards">
            <div className="algorithm-card">
              <h4>Reverse String</h4>
              <p>Reverse a string by pushing characters to a stack and popping them out in reverse order.</p>
              <a href="/Reverse_String" className="learn-more-btn">Learn More</a>
            </div>  
            <div className="algorithm-card">
              <h4>Balanced Parenthesis</h4>
              <p>Check if an expression has balanced parenthesis using a stack.</p>
              <a href="/Balanced_Parenthesis" className="learn-more-btn">Learn More</a>
            </div>
            <div className="algorithm-card">
              <h4>Evaluate Postfix Expression</h4>
              <p>Evaluate arithmetic expressions in postfix notation using a stack.</p>
              <a href="/Evaluate_Postfix" className="learn-more-btn">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Queue Section */}
      <section className="concept-info-section">
        <div className="concept-info-card">
          <h2>Understanding Queues</h2>
          <p>Queues follow a FIFO (First In, First Out) principle, widely used in scheduling, buffering, and data handling tasks.</p>
          <ul className="concept-steps">
            <li><strong>Enqueue:</strong> Add an element to the end of the queue.</li>
            <li><strong>Dequeue:</strong> Remove the front element of the queue.</li>
            <li><strong>Front:</strong> Access the front element without removing it.</li>
          </ul>
          <div className="quiz-button-container">
            <button className="btn-primary" onClick={goToQuizQ}>Go to Queue Quiz</button>
          </div>
        </div>

        <div id="queue-algorithms" className="algorithm-section">
          <h3>Queue Algorithms</h3>
          <div className="algorithm-cards">
            <div className="algorithm-card">
              <h4>Generate Binary Numbers</h4>
              <p>Generate binary numbers from 1 to N using a queue-based approach.</p>
              <a href="/Generate_Binary_Numbers" className="learn-more-btn">Learn More</a>
            </div>
            <div className="algorithm-card">
              <h4>Implement Stack with Queues</h4>
              <p>Implement a stack using two queues for push and pop operations.</p>
              <a href="/Stack_with_Queues" className="learn-more-btn">Learn More</a>
            </div>
            <div className="algorithm-card">
              <h4>Queue Reversal</h4>
              <p>Reverse the elements of a queue using recursion or stack.</p>
              <a href="/Queue_Reversal" className="learn-more-btn">Learn More</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StackQueue;
