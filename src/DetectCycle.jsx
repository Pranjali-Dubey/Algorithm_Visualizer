import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DetectCycle.css';  // External CSS for styling

const DetectCycle = () => {
  const navigate = useNavigate();

  const goToQuiz = () => {
    navigate('/Detect-Cycle-quiz');
  };

  return (
    <div className="detect-cycle-page">
      {/* Container for Heading and Information */}
      <div className="info-container">
        <h1 className="page-title">Detect Cycle in Linked List Algorithm</h1>

        {/* Text Section with Bullet Points */}
        <div className="text-section">
          <h2>What is Detect Cycle in Linked List?</h2>
          <ul>
            <li>Detecting a cycle in a linked list means determining whether there is a loop in the list where a node's next pointer points back to a previous node.</li>
            <li>It is a common problem that tests your understanding of linked list manipulations and pointer-based algorithms.</li>
            <li>Detecting a cycle is important as it prevents infinite loops and ensures the integrity of a list.</li>
          </ul>
          <h2>Uses:</h2>
          <ul>
            <li>To detect infinite loops in a linked list, ensuring the integrity of data structures.</li>
            <li>In applications like detecting looped references or circular dependencies in data.</li>
            <li>When implementing algorithms that traverse a list, detecting cycles is essential to avoid infinite traversals.</li>
          </ul>
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="additional-info">
        <h2>Time Complexity:</h2>
        <ul>
          <li>Best Case: O(1) — if the list has no cycle, the first check determines it.</li>
          <li>Average Case: O(n) — when traversing through the list to detect a cycle.</li>
          <li>Worst Case: O(n) — the algorithm might need to traverse the entire list if a cycle exists at the end.</li>
        </ul>
        <h2>Space Complexity:</h2>
        <ul>
          <li>O(1) — Cycle detection can be done in-place without using extra space, such as with the Floyd's Tortoise and Hare algorithm.</li>
        </ul>
      </div>

      {/* Pseudocode Section */}
      <div className="additional-info">
        <h2>Detect Cycle Pseudocode:</h2>
        <pre>
{`function detectCycle(head):
    slowPointer = head
    fastPointer = head
    while fastPointer != null and fastPointer.next != null:
        slowPointer = slowPointer.next
        fastPointer = fastPointer.next.next
        if slowPointer == fastPointer:
            return true  // Cycle detected
    return false  // No cycle detected`}
        </pre>
      </div>

      {/* Example Section */}
      <div className="additional-info">
        <h2>Example:</h2>
        <p>
          Given a linked list 1 → 2 → 3 → 4 → 5 and a cycle is introduced at node 3:<br />
          <strong>Initial Linked List:</strong> 1 → 2 → 3 → 4 → 5 → (points back to node 3)<br />
        </p>
        <ul>
          <li>Step 1: The slow pointer moves one node at a time, while the fast pointer moves two nodes at a time.</li>
          <li>Step 2: If there is a cycle, both pointers will eventually meet inside the loop.</li>
          <li>Step 3: If the fast pointer reaches null, then there is no cycle.</li>
        </ul>
        <strong>Cycle detected at node 3</strong>
      </div>

      {/* Quiz Button */}
      <div className="quiz-button-container">
        <button className="btn-primary" onClick={goToQuiz}>Go to Detect Cycle Quiz</button>
      </div>
    </div>
  );
};

export default DetectCycle;
