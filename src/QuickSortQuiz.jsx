import React, { useState } from 'react';
import './QuickSortQuiz.css';

const QuickSortQuiz = () => {
  const questions = [
    {
      question: "What type of algorithm is Quick Sort?",
      options: [
        "Divide and conquer",
        "Dynamic programming",
        "Greedy algorithm",
        "Backtracking"
      ],
      answer: "Divide and conquer",
    },
    {
      question: "What is the time complexity of Quick Sort in the worst case?",
      options: ["O(n)", "O(log n)", "O(n log n)", "O(n²)"],
      answer: "O(n²)",
    },
    {
      question: "Which of the following statements is true about Quick Sort?",
      options: [
        "It is always stable.",
        "It does not require additional memory for sorting.",
        "It has a time complexity of O(n) in all cases.",
        "It is a dynamic programming algorithm."
      ],
      answer: "It does not require additional memory for sorting.",
    },
    {
      question: "What is the best case time complexity of Quick Sort?",
      options: ["O(n)", "O(log n)", "O(n log n)", "O(n²)"],
      answer: "O(n log n)",
    },
    {
      question: "What is the purpose of the 'pivot' element in Quick Sort?",
      options: [
        "To divide the array into two halves",
        "To identify the largest element",
        "To rearrange elements in descending order",
        "To store the smallest element"
      ],
      answer: "To divide the array into two halves",
    },
    {
      question: "Which partitioning scheme is commonly used in Quick Sort?",
      options: ["Hoare's partitioning", "Merge partitioning", "Bubble partitioning", "Linear partitioning"],
      answer: "Hoare's partitioning",
    },
    {
      question: "What is the average case time complexity of Quick Sort?",
      options: ["O(n)", "O(log n)", "O(n log n)", "O(n²)"],
      answer: "O(n log n)",
    },
    {
      question: "Which of the following is a limitation of Quick Sort?",
      options: [
        "It requires extra memory space",
        "It has a time complexity of O(n) in the worst case",
        "It is not efficient for small arrays",
        "It has a high chance of stack overflow with large datasets"
      ],
      answer: "It has a high chance of stack overflow with large datasets",
    },
    {
      question: "Quick Sort is generally preferred over Merge Sort because it:",
      options: [
        "Is more stable",
        "Requires less memory",
        "Always runs faster",
        "Uses fewer comparisons"
      ],
      answer: "Requires less memory",
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
      <h1 className="quiz-heading">Quick Sort Quiz</h1>
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

export default QuickSortQuiz;
