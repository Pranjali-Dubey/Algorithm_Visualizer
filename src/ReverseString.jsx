import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ReverseString.css';  // External CSS for styling

const ReverseStringStack = () => {
  const navigate = useNavigate();

  const goToQuiz = () => {
    navigate('/Reverse-String-Stack-quiz');
  };

  return (
    <div className="reverse-string-stack-page">
      {/* Container for Heading and Information */}
      <div className="info-container">
        <h1 className="page-title">Reverse a String Using Stack Algorithm</h1>

        {/* Text Section with Bullet Points */}
        <div className="text-section">
          <h2>What is Reverse a String Using Stack?</h2>
          <ul>
            <li>Reversing a string using a stack is a problem where the goal is to reverse the characters of a string by utilizing a stack data structure.</li>
            <li>The basic idea is to push each character of the string onto the stack and then pop the characters from the stack to get the reversed string.</li>
            <li>This approach makes use of the Last In First Out (LIFO) property of stacks, where the last pushed character is the first to be popped out.</li>
          </ul>
          <h2>Uses:</h2>
          <ul>
            <li>Reversing strings or sequences where order needs to be reversed.</li>
            <li>Used in problems related to expression evaluation, such as reversing an expression.</li>
            <li>Often used in parsing and solving problems involving parentheses or other bracketed structures.</li>
          </ul>
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="additional-info">
        <h2>Time Complexity:</h2>
        <ul>
          <li>Best Case: O(n) — when the string is processed from start to end and reversed.</li>
          <li>Average Case: O(n) — as each character is pushed and popped from the stack once.</li>
          <li>Worst Case: O(n) — same as the average case, where all characters are processed.</li>
        </ul>
        <h2>Space Complexity:</h2>
        <ul>
          <li>O(n) — the stack will store all characters of the string, requiring space proportional to the length of the string.</li>
        </ul>
      </div>

      {/* Pseudocode Section */}
      <div className="additional-info">
        <h2>Reverse String Using Stack Pseudocode:</h2>
        <pre>
{`function reverseStringUsingStack(input):
    stack = empty stack
    for each character in input:
        push character to stack
    reversedString = ""
    while stack is not empty:
        reversedString += pop character from stack
    return reversedString`}
        </pre>
      </div>

      {/* Example Section */}
      <div className="additional-info">
        <h2>Example:</h2>
        <p>
          Given the string "hello":<br />
          <strong>Original String:</strong> "hello"<br />
        </p>
        <ul>
          <li>Step 1: Push each character of the string onto the stack: [h, e, l, l, o]</li>
          <li>Step 2: Pop each character from the stack to form the reversed string: [o, l, l, e, h]</li>
        </ul>
        <strong>Reversed String:</strong> "olleh"
      </div>

      {/* Quiz Button */}
      <div className="quiz-button-container">
        <button className="btn-primary" onClick={goToQuiz}>Go to Reverse String Stack Quiz</button>
      </div>
    </div>
  );
};

export default ReverseStringStack;
