import React, { useState } from 'react';
import './SelectionSortQuiz.css';

const SelectionSortQuiz = () => {
  const questions = [
    {
      question: "What is the basic idea behind selection sort?",
      options: [
        "Divide and conquer",
        "Find the smallest element and place it in the sorted array",
        "Swap elements in a specific order",
        "Iterate through the array multiple times"
      ],
      answer: "Find the smallest element and place it in the sorted array",
    },
    {
      question: "What is the time complexity of selection sort in the worst case?",
      options: ["O(n)", "O(n log n)", "O(n^2)", "O(1)"],
      answer: "O(n^2)",
    },
    {
      question: "Selection sort is an example of which type of sorting algorithm?",
      options: [
        "Stable sort",
        "In-place sort",
        "Non-comparison based sort",
        "Adaptive sort"
      ],
      answer: "In-place sort",
    },
    {
      question: "How many passes does selection sort take to sort an array of n elements?",
      options: ["n", "n-1", "n/2", "n^2"],
      answer: "n-1",
    },
    {
      question: "What is the space complexity of selection sort?",
      options: ["O(1)", "O(n)", "O(n log n)", "O(n^2)"],
      answer: "O(1)",
    },
    {
      question: "Which of the following is true about selection sort?",
      options: [
        "It is a stable sorting algorithm.",
        "It is faster than bubble sort.",
        "It is efficient for large datasets.",
        "It always requires the least number of swaps."
      ],
      answer: "It is faster than bubble sort.",
    },
    {
      question: "What type of algorithm is selection sort?",
      options: [
        "Recursive",
        "Iterative",
        "Randomized",
        "Greedy"
      ],
      answer: "Iterative",
    },
    {
      question: "Which of the following is an advantage of selection sort?",
      options: [
        "It is adaptive.",
        "It has low memory requirements.",
        "It is stable.",
        "It is fast for large datasets."
      ],
      answer: "It has low memory requirements.",
    },
    {
      question: "What happens to the array during each pass of selection sort?",
      options: [
        "The largest element is found and swapped to the end.",
        "The smallest element is found and moved to the beginning.",
        "Elements are compared and shifted.",
        "The array is divided into sub-arrays."
      ],
      answer: "The smallest element is found and moved to the beginning.",
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
      setFeedback({ message: 'Correct!', color: 'green'});
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
      <h1 className="quiz-heading">Selection Sort Quiz</h1>
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

export default SelectionSortQuiz;
