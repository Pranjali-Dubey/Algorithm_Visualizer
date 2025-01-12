import React, { useState } from 'react';
import './ArraysQuiz.css';

const ArraysQuiz = () => {
  const questions = [
    {
      question: "What is the time complexity of accessing an element in an array?",
      options: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
      answer: "O(1)",
    },
    {
      question: "Which of the following operations can be performed in constant time on an array?",
      options: [
        "Insert an element at the beginning",
        "Delete an element from the middle",
        "Access an element by index",
        "Resize the array"
      ],
      answer: "Access an element by index",
    },
    {
      question: "What is the space complexity of a dynamic array?",
      options: ["O(1)", "O(n)", "O(n log n)", "O(2n)"],
      answer: "O(n)",
    },
    {
      question: "Which of the following is a limitation of arrays?",
      options: [
        "Fixed size",
        "It requires extra memory",
        "Cannot store elements of different data types",
        "Insertion at the end is not efficient"
      ],
      answer: "Fixed size",
    },
    {
      question: "Which of the following operations has the worst time complexity in a dynamic array?",
      options: [
        "Insert an element at the end",
        "Insert an element at the beginning",
        "Access an element by index",
        "Delete an element from the middle"
      ],
      answer: "Insert an element at the beginning",
    },
    {
      question: "How is a multidimensional array represented in memory?",
      options: [
        "As a matrix in row-major or column-major order",
        "As a tree",
        "As a linked list",
        "As a single list"
      ],
      answer: "As a matrix in row-major or column-major order",
    },
    {
      question: "Which of the following can be a drawback of arrays?",
      options: [
        "Static size",
        "Dynamic resizing",
        "Slow access to elements",
        "Cannot store primitive data types"
      ],
      answer: "Static size",
    },
    {
      question: "What is the time complexity of searching for an element in an unsorted array?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
      answer: "O(n)",
    },
    {
      question: "Which of the following types of data structures uses arrays as the underlying structure?",
      options: [
        "Linked List",
        "Stack",
        "Queue",
        "Tree"
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

    // Update score if the answer is correct
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    // Move to the next question or show score after the last question
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setTimeout(() => {
        setCurrentQuestion(nextQuestion);
        setFeedback({ message: '', color: '' });
      }, 1500); // Delay feedback reset before showing next question
    } else {
      setTimeout(() => {
        setShowScore(true);
      }, 1500); // Delay score display
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
      <h1 className="quiz-heading">Arrays Quiz</h1>
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

export default ArraysQuiz;
