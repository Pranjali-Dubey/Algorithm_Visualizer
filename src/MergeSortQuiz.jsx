import React, { useState } from 'react';
import './MergeSortQuiz.css';

const MergeSortQuiz = () => {
  const questions = [
    {
      question: "What type of algorithm is Merge Sort?",
      options: [
        "Divide and conquer",
        "Dynamic programming",
        "Greedy algorithm",
        "Backtracking"
      ],
      answer: "Divide and conquer",
    },
    {
      question: "What is the time complexity of Merge Sort in the worst case?",
      options: ["O(n)", "O(log n)", "O(n log n)", "O(n²)"],
      answer: "O(n log n)",
    },
    {
      question: "Which of the following statements is true about Merge Sort?",
      options: [
        "It is not stable.",
        "It has a time complexity of O(n).",
        "It is a recursive algorithm.",
        "It does not require extra space."
      ],
      answer: "It is a recursive algorithm.",
    },
    {
      question: "What is the main advantage of Merge Sort over Quick Sort?",
      options: [
        "Merge Sort is faster than Quick Sort.",
        "Merge Sort works better on smaller datasets.",
        "Merge Sort is stable and works well with large datasets.",
        "Merge Sort requires less memory."
      ],
      answer: "Merge Sort is stable and works well with large datasets.",
    },
    {
      question: "What is the space complexity of Merge Sort?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
      answer: "O(n)",
    },
    {
      question: "In Merge Sort, the array is divided into halves until each subarray contains how many elements?",
      options: ["One element", "Two elements", "Three elements", "No elements"],
      answer: "One element",
    },
    {
      question: "What happens during the 'merge' step in Merge Sort?",
      options: [
        "The arrays are split further.",
        "The elements are rearranged in descending order.",
        "The sorted subarrays are combined into a single sorted array.",
        "The pivot element is selected."
      ],
      answer: "The sorted subarrays are combined into a single sorted array.",
    },
    {
      question: "Which of the following is a limitation of Merge Sort?",
      options: [
        "It is not stable.",
        "It requires additional memory space.",
        "It cannot be used with linked lists.",
        "It has a time complexity of O(n²)."
      ],
      answer: "It requires additional memory space.",
    },
    {
      question: "What is the best case time complexity of Merge Sort?",
      options: ["O(n)", "O(log n)", "O(n log n)", "O(n²)"],
      answer: "O(n log n)",
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
      setFeedback({ message: 'Correct!', color: 'green' });
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
      <h1 className="quiz-heading">Merge Sort Quiz</h1>
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

export default MergeSortQuiz;
