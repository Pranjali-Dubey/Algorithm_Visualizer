import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ReverseLinkedList.css';  // External CSS for styling

const ReverseLinkedList = () => {
  const navigate = useNavigate();

  const goToQuiz = () => {
    navigate('/Reverse-LinkedList-quiz');
  };

  return (
    <div className="reverse-linked-list-page">
      {/* Container for Heading and Information */}
      <div className="info-container">
        <h1 className="page-title">Reverse Linked List Algorithm</h1>

        {/* Text Section with Bullet Points */}
        <div className="text-section">
          <h2>What is Reverse Linked List?</h2>
          <ul>
            <li>Reversing a linked list means reversing the direction of the pointers in a singly linked list so that the last node becomes the first, and the first node becomes the last.</li>
            <li>It is a common problem that tests your understanding of linked list manipulations.</li>
          </ul>
          <h2>Uses:</h2>
          <ul>
            <li>When you need to reverse the order of elements in a linked list.</li>
            <li>In some algorithms like checking for palindromes or inverting a data structure.</li>
            <li>Linked list reversal is also a useful step in many other data structure algorithms.</li>
          </ul>
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="additional-info">
        <h2>Time Complexity:</h2>
        <ul>
          <li>Best Case: O(n) — as you need to visit each node to reverse the list.</li>
          <li>Average Case: O(n) — the reversal of the entire list takes linear time.</li>
          <li>Worst Case: O(n) — the reversal still takes linear time regardless of the situation.</li>
        </ul>
        <h2>Space Complexity:</h2>
        <ul>
          <li>O(1) — reversal can be done in-place without additional space (except for a few pointers).</li>
        </ul>
      </div>

      {/* Pseudocode Section */}
      <div className="additional-info">
        <h2>Reverse Linked List Pseudocode:</h2>
        <pre>
{`function reverseLinkedList(head):
    previous = null
    current = head
    while current is not null:
        nextNode = current.next
        current.next = previous
        previous = current
        current = nextNode
    return previous  // New head of the reversed list`}
        </pre>
      </div>

      {/* Example Section */}
      <div className="additional-info">
        <h2>Example:</h2>
        <p>
          Given the linked list 1 → 2 → 3 → 4 → 5 and performing a reversal:<br />
          <strong>Initial Linked List:</strong> 1 → 2 → 3 → 4 → 5<br />
        </p>
        <ul>
          <li>Step 1: Set previous = null, current = head (1).</li>
          <li>Step 2: Reverse the next pointer of node 1 to null. Move current to node 2.</li>
          <li>Step 3: Reverse the next pointer of node 2 to node 1. Move current to node 3.</li>
          <li>Step 4: Reverse the next pointer of node 3 to node 2. Continue till the last node.</li>
        </ul>
        <strong>Reversed Linked List: 5 → 4 → 3 → 2 → 1</strong>
      </div>

      {/* Quiz Button */}
      <div className="quiz-button-container">
        <button className="btn-primary" onClick={goToQuiz}>Go to Reverse Linked List Quiz</button>
      </div>
    </div>
  );
};

export default ReverseLinkedList;
