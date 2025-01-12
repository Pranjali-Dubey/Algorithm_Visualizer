import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EvaluatePostfixExpression.css';  // External CSS for styling

const EvaluatePostfixExpression = () => {
  const navigate = useNavigate();

  // Function to navigate to the Evaluate Postfix Expression quiz page
  const goToQuiz = () => {
    navigate('/Evaluate-Postfix-Expression-quiz');
  };

  return (
    <div className="evaluate-postfix-expression-page">
      {/* Container for Heading and Information */}
      <div className="info-container">
        <h1 className="page-title">Evaluate Postfix Expression Algorithm</h1>

        {/* Text Section with Bullet Points */}
        <div className="text-section">
          <h2>What is Postfix Expression?</h2>
          <ul>
            <li>Postfix expressions, also known as Reverse Polish Notation (RPN), are mathematical expressions where operators follow their operands.</li>
            <li>In postfix notation, there is no need for parentheses or operator precedence rules because the order of operations is clearly defined by the position of the operator.</li>
            <li>For example, the postfix expression for the infix expression "3 + 5" is "3 5 +".</li>
          </ul>
          <h2>Uses:</h2>
          <ul>
            <li>Postfix notation is used in stack-based calculators and expression evaluation.</li>
            <li>It helps avoid ambiguity in expression parsing as compared to infix expressions.</li>
            <li>Used in compilers and interpreters for expression evaluation.</li>
          </ul>
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="additional-info">
        <h2>Time Complexity:</h2>
        <ul>
          <li>Best Case: O(n) — Each character of the expression is processed once.</li>
          <li>Average Case: O(n) — As each operator or operand is processed once.</li>
          <li>Worst Case: O(n) — Since the entire expression must be processed.</li>
        </ul>
        <h2>Space Complexity:</h2>
        <ul>
          <li>O(n) — The stack can hold up to n elements in the worst case.</li>
        </ul>
      </div>

      {/* Pseudocode Section */}
      <div className="additional-info">
        <h2>Evaluate Postfix Expression Pseudocode:</h2>
        <pre>
{`function evaluatePostfix(expression):
    stack = empty stack
    for each character in expression:
        if character is a number:
            push number to stack
        if character is an operator:
            operand2 = pop stack
            operand1 = pop stack
            result = apply operator on operand1 and operand2
            push result to stack
    return pop stack as the result`}
        </pre>
      </div>

      {/* Example Section */}
      <div className="additional-info">
        <h2>Example:</h2>
        <p>
          Given the postfix expression "23 5 + 2 *":<br />
          <strong>Original Expression:</strong> "23 5 + 2 *"<br />
        </p>
        <ul>
          <li>Step 1: Start with the first character "2", which is a number. Push it to the stack.</li>
          <li>Step 2: Push "3" to the stack.</li>
          <li>Step 3: Encounter the operator "+". Pop the two numbers from the stack (3 and 2), add them to get 5, and push 5 to the stack.</li>
          <li>Step 4: Push "5" to the stack.</li>
          <li>Step 5: Encounter the operator "*". Pop the two numbers from the stack (5 and 5), multiply them to get 25, and push 25 to the stack.</li>
        </ul>
        <strong>Result: The result of the postfix expression "23 5 + 2 *" is 25.</strong>
      </div>

      {/* Quiz Button */}
      <div className="quiz-button-container">
        <button className="btn-primary" onClick={goToQuiz}>Go to Postfix Expression Quiz</button>
      </div>
    </div>
  );
};

export default EvaluatePostfixExpression;
