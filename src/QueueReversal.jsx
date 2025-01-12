import React from 'react';
import { useNavigate } from 'react-router-dom';
import './QueueReversal.css';  // External CSS for styling

const QueueReversal = () => {
  const navigate = useNavigate();

  // Function to navigate to the Queue Reversal quiz page
  const goToQuiz = () => {
    navigate('/Queue-Reversal-quiz');
  };

  return (
    <div className="queue-reversal-page">
      {/* Container for Heading and Information */}
      <div className="info-container">
        <h1 className="page-title">Queue Reversal Algorithm</h1>

        {/* Text Section with Bullet Points */}
        <div className="text-section">
          <h2>What is Queue Reversal?</h2>
          <ul>
            <li>Queue reversal is the process of reversing the order of elements in a queue.</li>
            <li>A queue follows the First In, First Out (FIFO) principle, but after reversal, the first element becomes the last, and the last becomes the first.</li>
            <li>The problem can be efficiently solved using recursion or a stack.</li>
          </ul>
          <h2>Applications of Queue Reversal:</h2>
          <ul>
            <li>Reversing the order of elements in a queue is useful in many algorithms that require rearranging the sequence of elements.</li>
            <li>Common in scenarios such as backtracking, evaluating expressions, or reversing paths in graphs.</li>
          </ul>
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="additional-info">
        <h2>Time Complexity:</h2>
        <ul>
          <li>O(n) — Each element is processed once during the reversal, where `n` is the number of elements in the queue.</li>
        </ul>
        <h2>Space Complexity:</h2>
        <ul>
          <li>O(n) — The space complexity is linear in terms of the number of elements, as elements are stored temporarily in a stack or recursion stack.</li>
        </ul>
      </div>

      {/* Pseudocode Section */}
      <div className="additional-info">
        <h2>Queue Reversal Pseudocode:</h2>
        <pre>
{`function reverseQueue(queue):
    if queue is empty:
        return
    element = queue.dequeue()
    reverseQueue(queue)
    queue.enqueue(element)`}
        </pre>
      </div>

      {/* Example Section */}
      <div className="additional-info">
        <h2>Example:</h2>
        <p>
          Let's consider a queue with the following elements: [1, 2, 3, 4, 5]
        </p>
        <ul>
          <li>Step 1: Dequeue 1 from the front of the queue.</li>
          <li>Step 2: Recurse and dequeue 2, 3, 4, and 5 in sequence.</li>
          <li>Step 3: Once the queue is empty, start enqueueing the elements in the reverse order, i.e., enqueue 5, 4, 3, 2, and 1.</li>
        </ul>
        <p>
          <strong>Result:</strong> The queue becomes [5, 4, 3, 2, 1] after reversal.
        </p>
      </div>

      {/* Quiz Button */}
      <div className="quiz-button-container">
        <button className="btn-primary" onClick={goToQuiz}>Go to Queue Reversal Quiz</button>
      </div>
    </div>
  );
};

export default QueueReversal;
