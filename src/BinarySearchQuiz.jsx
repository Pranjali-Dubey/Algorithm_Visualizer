import React, { useState } from 'react';
import './BinarySearchQuiz.css';

const BinarySearchQuiz = () => {
  const questions = [
    {
      question: "What is the main requirement for using binary search?",
      options: [
        "The array must be unsorted",
        "The array must be sorted",
        "The array must contain unique elements",
        "The array must be of even length"
      ],
      answer: "The array must be sorted",
    },
    {
      question: "What is the time complexity of binary search in the worst case?",
      options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
      answer: "O(log n)",
    },
    {
      question: "Which of the following statements is true about binary search?",
      options: [
        "It can be used on linked lists.",
        "It always finds the minimum element.",
        "It divides the search interval in half.",
        "It requires multiple passes through the array."
      ],
      answer: "It divides the search interval in half.",
    },
    {
      question: "In binary search, what happens if the target value is not found?",
      options: [
        "The search continues until the end of the array.",
        "It returns the index of the largest element.",
        "It returns -1.",
        "It throws an error."
      ],
      answer: "It returns -1.",
    },
    {
      question: "What type of algorithm is binary search?",
      options: ["Recursive only", "Iterative only", "Both recursive and iterative", "None of the above"],
      answer: "Both recursive and iterative",
    },
    {
      question: "Which of the following is a limitation of binary search?",
      options: [
        "It is slower than linear search.",
        "It requires additional memory.",
        "It can only be used with sorted arrays.",
        "It is not efficient."
      ],
      answer: "It can only be used with sorted arrays.",
    },
    {
      question: "What happens to the search space after each iteration of binary search?",
      options: [
        "It doubles in size.",
        "It remains the same.",
        "It is halved.",
        "It is completely discarded."
      ],
      answer: "It is halved.",
    },
    {
      question: "What is the average case time complexity of binary search?",
      options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
      answer: "O(log n)",
    },
    {
      question: "In binary search, what is the purpose of the mid index?",
      options: [
        "To find the smallest element in the array",
        "To find the middle element of the array",
        "To keep track of the number of iterations",
        "To store the target value"
      ],
      answer: "To find the middle element of the array",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [feedback, setFeedback] = useState({ message: '', color: '' });

  const handleAnswerOptionClick = (selectedOption) => {
    const isCorrect = selectedOption === questions[currentQuestion].answer;
    if (isCorrect) {
      setScore(score + 1);
      setFeedback({ message: 'Correct!', color:'green' });
    } else {
      setFeedback({
        message: `Wrong! The correct answer is: ${questions[currentQuestion].answer}`,
        color: 'red'
      });
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
      <h1 className="quiz-heading">Binary Search Quiz</h1>
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

export default BinarySearchQuiz;
