import React, { useState } from 'react';
import './TreesQuiz.css';

const TreesQuiz = () => {
  const questions = [
    {
      question: "What is a tree in data structures?",
      options: [
        "A linear data structure",
        "A non-linear hierarchical structure",
        "A set of sorted elements",
        "A structure with only one level"
      ],
      answer: "A non-linear hierarchical structure",
    },
    {
      question: "What is the root node in a tree?",
      options: [
        "A node with no children",
        "A node with one child",
        "The first node in the tree",
        "A node at the bottom level"
      ],
      answer: "The first node in the tree",
    },
    {
      question: "Which traversal method visits nodes in the order: left, root, right?",
      options: ["Preorder", "Postorder", "Inorder", "Level-order"],
      answer: "Inorder",
    },
    {
      question: "What is a leaf node?",
      options: [
        "A node with no children",
        "A node with one child",
        "The root node",
        "A node with two children"
      ],
      answer: "A node with no children",
    },
    {
      question: "In a binary tree, each node has at most how many children?",
      options: ["1", "2", "3", "4"],
      answer: "2",
    },
    {
      question: "What is the height of a tree?",
      options: [
        "The number of nodes",
        "The length of the longest path from root to a leaf",
        "The number of leaf nodes",
        "The total levels minus one"
      ],
      answer: "The length of the longest path from root to a leaf",
    },
    {
      question: "What is a binary search tree?",
      options: [
        "A tree where each node has only one child",
        "A tree where the left child is greater than the root",
        "A tree with elements sorted by level",
        "A tree where the left child is less than the root and the right child is greater"
      ],
      answer: "A tree where the left child is less than the root and the right child is greater",
    },
    {
      question: "Which traversal method is best for creating a copy of a tree?",
      options: [
        "Level-order",
        "Inorder",
        "Preorder",
        "Postorder"
      ],
      answer: "Preorder",
    },
    {
      question: "Which data structure is commonly used in breadth-first traversal of a tree?",
      options: [
        "Stack",
        "Queue",
        "Hash table",
        "List"
      ],
      answer: "Queue",
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
      <h1 className="quiz-heading">Trees Quiz</h1>
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

export default TreesQuiz;
