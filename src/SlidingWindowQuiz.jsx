import React, { useState } from 'react';
import './SlidingWindowQuiz.css';

const SlidingWindowQuiz = () => {
  const questions = [
    {
      question: "What is the Sliding Window technique used for?",
      options: [
        "Finding the maximum element in an array",
        "Solving problems involving arrays or lists by maintaining a subarray or subsequence",
        "Searching for elements in a sorted array",
        "Sorting an array"
      ],
      answer: "Solving problems involving arrays or lists by maintaining a subarray or subsequence",
    },
    {
      question: "What is the time complexity of the Sliding Window technique?",
      options: ["O(n)", "O(n²)", "O(log n)", "O(n log n)"],
      answer: "O(n)",
    },
    {
      question: "In the Sliding Window technique, how does the window size change?",
      options: [
        "The window size is fixed and does not change",
        "The window expands or shrinks based on the condition or problem",
        "The window size always increases",
        "The window size is the size of the entire array"
      ],
      answer: "The window expands or shrinks based on the condition or problem",
    },
    {
      question: "Which of the following is an application of the Sliding Window technique?",
      options: [
        "Finding the sum of every contiguous subarray of size k",
        "Binary Search",
        "Quick Sort",
        "Merge Sort"
      ],
      answer: "Finding the sum of every contiguous subarray of size k",
    },
    {
      question: "Which problem can be solved using the Sliding Window technique?",
      options: [
        "Find the longest subarray with a given sum",
        "Sorting an array",
        "Finding the kth largest element",
        "Binary Search"
      ],
      answer: "Find the longest subarray with a given sum",
    },
    {
      question: "What is the main advantage of using the Sliding Window technique?",
      options: [
        "It reduces the time complexity of brute force solutions by avoiding redundant calculations",
        "It sorts an array",
        "It is only applicable for sorted arrays",
        "It can be used for searching an element in an unsorted list"
      ],
      answer: "It reduces the time complexity of brute force solutions by avoiding redundant calculations",
    },
    {
      question: "What is the space complexity of the Sliding Window technique?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
      answer: "O(1)",
    },
    {
      question: "In a sliding window, when do you update the window size?",
      options: [
        "When the window reaches the end of the array",
        "When the window contains all the elements in the array",
        "When a specific condition is met, such as the sum exceeding a given value",
        "When a certain number of iterations are reached"
      ],
      answer: "When a specific condition is met, such as the sum exceeding a given value",
    },
    {
      question: "Which of the following problems can be solved using the Sliding Window technique?",
      options: [
        "Finding the longest substring with at most two distinct characters",
        "Sorting an array",
        "Finding the median of an array",
        "Finding the kth largest element"
      ],
      answer: "Finding the longest substring with at most two distinct characters",
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
      <h1 className="quiz-heading">Sliding Window Technique Quiz</h1>
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

export default SlidingWindowQuiz;
