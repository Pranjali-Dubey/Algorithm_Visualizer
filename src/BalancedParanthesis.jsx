import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BalancedParanthesis.css';  // External CSS for styling

const BalancedParentheses = () => {
  const navigate = useNavigate();

  // Function to navigate to the Balanced Parentheses quiz page
  const goToQuiz = () => {
    navigate('/Balanced-Parentheses-quiz');
  };

  return (
    <div className="balanced-parentheses-page">
      {/* Container for Heading and Information */}
      <div className="info-container">
        <h1 className="page-title">Balanced Parentheses Algorithm</h1>

        {/* Text Section with Bullet Points */}
        <div className="text-section">
          <h2>What is Balanced Parentheses?</h2>
          <ul>
            <li>Balanced parentheses is a problem where the task is to check whether a string has balanced parentheses, i.e., every opening parenthesis has a corresponding closing parenthesis in the correct order.</li>
            <li>The problem is typically solved using a stack data structure, which helps ensure the Last In, First Out (LIFO) property to match pairs of parentheses.</li>
            <li>The parentheses can be of various types, such as round `()`, square `[]`, and curly `{}` brackets.</li>
          </ul>
          <h2>Uses:</h2>
          <ul>
            <li>Validating expressions in compilers and interpreters.</li>
            <li>Ensuring correct matching of parentheses in mathematical or logical expressions.</li>
            <li>Used in problems related to parsing and expression evaluation, such as checking for balanced brackets in an HTML document or code.</li>
          </ul>
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="additional-info">
        <h2>Time Complexity:</h2>
        <ul>
          <li>Best Case: O(n) — when the string is processed from start to end with no extra characters.</li>
          <li>Average Case: O(n) — each character is processed once, and the stack operations are constant time.</li>
          <li>Worst Case: O(n) — as every character must be checked.</li>
        </ul>
        <h2>Space Complexity:</h2>
        <ul>
          <li>O(n) — the stack could hold all characters in the worst case (if the string is unbalanced and consists only of opening parentheses).</li>
        </ul>
      </div>

      {/* Pseudocode Section */}
      <div className="additional-info">
        <h2>Balanced Parentheses Pseudocode:</h2>
        <pre>
{`function isBalanced(string):
    stack = empty stack
    for each character in string:
        if character is an opening parenthesis:
            push character to stack
        if character is a closing parenthesis:
            if stack is empty or top of stack is not matching opening parenthesis:
                return False
            pop character from stack
    return True if stack is empty, else return False`}
        </pre>
      </div>

      {/* Quiz Button */}
      <div className="quiz-button-container">
        <button className="btn-primary" onClick={goToQuiz}>Go to Balanced Parentheses Quiz</button>
      </div>
    </div>
  );
};

export default BalancedParentheses;
