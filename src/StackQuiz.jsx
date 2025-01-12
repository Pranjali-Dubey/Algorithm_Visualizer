import React, { useState } from 'react';
import './StackQuiz.css';

const StackQuiz = () => {
  const questions = [
    {
      question: "What is a stack in data structures?",
      options: [
        "A linear data structure with FIFO order",
        "A collection of sorted elements",
        "A linear data structure with LIFO order",
        "A hierarchical structure"
      ],
      answer: "A linear data structure with LIFO order",
    },
    {
      question: "Which operation removes the top element from a stack?",
      options: [
        "Push",
        "Pop",
        "Peek",
        "Insert"
      ],
      answer: "Pop",
    },
    {
      question: "What is the time complexity of the push operation in a stack?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
      answer: "O(1)",
    },
    {
      question: "What does the peek operation do in a stack?",
      options: [
        "Removes the top element",
        "Adds an element to the top",
        "Returns the top element without removing it",
        "Clears the stack"
      ],
      answer: "Returns the top element without removing it",
    },
    {
      question: "In which scenario are stacks commonly used?",
      options: [
        "Database indexing",
        "Browser history tracking",
        "Binary search",
        "Graph traversal"
      ],
      answer: "Browser history tracking",
    },
    {
      question: "What happens when you try to pop an element from an empty stack?",
      options: [
        "It returns null",
        "It throws an underflow error",
        "It adds a default element",
        "It resets the stack"
      ],
      answer: "It throws an underflow error",
    },
    {
      question: "What is the purpose of a stack frame in function calls?",
      options: [
        "Stores local variables and return address",
        "Manages global variables",
        "Tracks open files",
        "Handles memory allocation"
      ],
      answer: "Stores local variables and return address",
    },
    {
      question: "How do you implement a stack in most programming languages?",
      options: [
        "Using an array or linked list",
        "Using a binary tree",
        "Using a hash table",
        "Using a queue"
      ],
      answer: "Using an array or linked list",
    },
    {
      question: "What is a common application of stacks in arithmetic expressions?",
      options: [
        "Sorting",
        "Evaluating postfix expressions",
        "Binary search",
        "Hashing"
      ],
      answer: "Evaluating postfix expressions",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [feedback, setFeedback] = useState({ message: '', color: '' });

  const handleAnswerOptionClick = (selectedOption) => {
    const isCorrect = selectedOption === questions[currentQuestion].answer;
    setFeedback({
      message: isCorrect
        ? 'Correct!'
        : `Wrong! The correct answer is: ${questions[currentQuestion].answer}`,
      color: isCorrect ? 'green' : 'red',
    });

    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setTimeout(() => {
        setCurrentQuestion(nextQuestion);
        setFeedback({ message: '', color: '' });
      }, 1500);
    } else {
      setTimeout(() => {
        setShowScore(true);
      }, 1500);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setFeedback({ message: '', color: '' });
  };

  return (
    <div className="quiz-container">
      <h1 className="quiz-heading">Stack Quiz</h1>
      <div className="progress-bar" style={{ width: `${(currentQuestion / questions.length) * 100}%` }}></div>
      {showScore ? (
        <div className="score-section">
          <h2>You scored {score} out of {questions.length}</h2>
          <button className="reset-button" onClick={resetQuiz}>Retry Quiz</button>
        </div>
      ) : (
        <div className="quiz-section card">
          <div className="question-section">
            <h2>Question {currentQuestion + 1}/{questions.length}</h2>
            <p>{questions[currentQuestion].question}</p>
            {feedback.message && (
              <div className="feedback" style={{ color: feedback.color }}>
                {feedback.message}
              </div>
            )}
          </div>
          <div className="options-section">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerOptionClick(option)}
                className="option-button"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default StackQuiz;
