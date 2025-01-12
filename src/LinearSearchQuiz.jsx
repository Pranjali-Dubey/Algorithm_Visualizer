import React, { useState } from 'react';
import './LinearSearchQuiz.css';

const LinearSearchQuiz = () => {
  const questions = [
    {
      question: "What type of algorithm is Linear Search?",
      options: [
        "Divide and conquer",
        "Brute force",
        "Greedy algorithm",
        "Backtracking"
      ],
      answer: "Brute force",
    },
    {
      question: "What is the time complexity of Linear Search in the worst case?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
      answer: "O(n)",
    },
    {
      question: "Linear Search is most efficient when:",
      options: [
        "The list is sorted",
        "The list is small",
        "The list is large",
        "The list is unsorted"
      ],
      answer: "The list is small",
    },
    {
      question: "What is the worst-case scenario for Linear Search?",
      options: ["The element is not in the array", "The element is in the middle", "The element is at the beginning", "The list is sorted"],
      answer: "The element is not in the array",
    },
    {
      question: "Which of the following is true about Linear Search?",
      options: [
        "It is an in-place algorithm",
        "It has a time complexity of O(n) in the best case",
        "It requires additional memory",
        "It is a divide-and-conquer algorithm"
      ],
      answer: "It is an in-place algorithm",
    },
    {
      question: "Linear Search is best used in which situation?",
      options: [
        "When data is small or unsorted",
        "When data is large and sorted",
        "When data is large and unsorted",
        "When data is in a graph format"
      ],
      answer: "When data is small or unsorted",
    },
    {
      question: "What is the average time complexity of Linear Search?",
      options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
      answer: "O(n)",
    },
    {
      question: "Which of the following is a limitation of Linear Search?",
      options: [
        "It requires sorting of the array",
        "It is not suitable for large datasets",
        "It is not an in-place algorithm",
        "It requires extra memory"
      ],
      answer: "It is not suitable for large datasets",
    },
    {
      question: "In Linear Search, how does the algorithm search the element?",
      options: [
        "By dividing the array into smaller parts",
        "By sequentially checking each element until a match is found",
        "By sorting the array first",
        "By using binary search"
      ],
      answer: "By sequentially checking each element until a match is found",
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
      <h1 className="quiz-heading">Linear Search Quiz</h1>
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

export default LinearSearchQuiz;
