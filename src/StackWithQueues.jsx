import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StackWithQueues.css';  // External CSS for styling

const ImplementStackWithQueues = () => {
  const navigate = useNavigate();

  // Function to navigate to the Implement Stack with Queues quiz page
  const goToQuiz = () => {
    navigate('/Implement-Stack-With-Queues-quiz');
  };

  return (
    <div className="implement-stack-with-queues-page">
      {/* Container for Heading and Information */}
      <div className="info-container">
        <h1 className="page-title">Implement Stack Using Two Queues</h1>

        {/* Text Section with Bullet Points */}
        <div className="text-section">
          <h2>What is Stack?</h2>
          <ul>
            <li>A stack is a linear data structure that follows the Last In First Out (LIFO) principle, where elements are added to the top and removed from the top.</li>
            <li>Common operations of a stack include push, pop, and peek.</li>
          </ul>
          <h2>What is Queue?</h2>
          <ul>
            <li>A queue is a linear data structure that follows the First In First Out (FIFO) principle, where elements are added to the rear and removed from the front.</li>
            <li>Common operations of a queue include enqueue and dequeue.</li>
          </ul>
          <h2>Why Implement Stack Using Queues?</h2>
          <ul>
            <li>We can implement a stack using two queues by using one queue for pushing elements and another for popping elements.</li>
            <li>This helps demonstrate the versatility of queues and their ability to simulate the behavior of a stack.</li>
          </ul>
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="additional-info">
        <h2>Time Complexity:</h2>
        <ul>
          <li>Push Operation: O(1) — Enqueueing an element is constant time.</li>
          <li>Pop Operation: O(n) — Dequeueing all elements and rearranging them takes linear time.</li>
        </ul>
        <h2>Space Complexity:</h2>
        <ul>
          <li>O(n) — The space complexity is linear in terms of the number of elements in the stack.</li>
        </ul>
      </div>

      {/* Pseudocode Section */}
      <div className="additional-info">
        <h2>Stack Implementation Using Two Queues - Pseudocode:</h2>
        <pre>
{`class StackWithQueues:
    def __init__(self):
        self.queue1 = Queue()
        self.queue2 = Queue()

    def push(self, element):
        self.queue1.enqueue(element)

    def pop(self):
        if self.queue1.isEmpty():
            return None  # Stack is empty
        while self.queue1.size() > 1:
            self.queue2.enqueue(self.queue1.dequeue())
        popped_element = self.queue1.dequeue()
        self.queue1, self.queue2 = self.queue2, self.queue1
        return popped_element`}
        </pre>
      </div>

      {/* Example Section */}
      <div className="additional-info">
        <h2>Example:</h2>
        <p>
          Let's consider the following operations on the stack:
        </p>
        <ul>
          <li>Push 1</li>
          <li>Push 2</li>
          <li>Push 3</li>
          <li>Pop (should return 3)</li>
          <li>Push 4</li>
          <li>Pop (should return 4)</li>
        </ul>
        <p>
          After these operations, the stack will look like: [1, 2].<br />
          <strong>Explanation:</strong> After pushing 1, 2, and 3, the stack is [3, 2, 1]. Then, popping removes 3, and after pushing 4, the stack becomes [4, 2, 1].
        </p>
      </div>

      {/* Quiz Button */}
      <div className="quiz-button-container">
        <button className="btn-primary" onClick={goToQuiz}>Go to Stack with Queues Quiz</button>
      </div>
    </div>
  );
};

export default ImplementStackWithQueues;
