import React, { useState } from 'react';
import './PointerQuiz.css';

const TwoPointerQuiz = () => {
  const questions = [
    {
      question: "What is the primary use of the Two Pointer technique?",
      options: [
        "To find the maximum element in an array",
        "To solve problems involving pairs or subarrays",
        "To sort an array",
        "To divide an array into two halves"
      ],
      answer: "To solve problems involving pairs or subarrays",
    },
    {
      question: "Which of the following is a common application of the Two Pointer technique?",
      options: [
        "Finding a pair with a given sum",
        "Sorting an array",
        "Merging two sorted arrays",
        "Finding the median of an array"
      ],
      answer: "Finding a pair with a given sum",
    },
    {
      question: "What is the time complexity of the Two Pointer technique when used for finding pairs in a sorted array?",
      options: ["O(n)", "O(n²)", "O(log n)", "O(n log n)"],
      answer: "O(n)",
    },
    {
      question: "Which of the following is a key advantage of the Two Pointer technique?",
      options: [
        "It reduces the time complexity of problems",
        "It is easier to implement than brute force",
        "It always works with unsorted arrays",
        "It requires less memory than divide and conquer algorithms"
      ],
      answer: "It reduces the time complexity of problems",
    },
    {
      question: "In the Two Pointer technique, what do the pointers typically represent?",
      options: [
        "One pointer represents the start and the other represents the end",
        "Both pointers represent the middle of the array",
        "Both pointers move towards each other",
        "Pointers represent the index of the maximum element"
      ],
      answer: "One pointer represents the start and the other represents the end",
    },
    {
      question: "Which problem can be solved using the Two Pointer technique?",
      options: [
        "Finding the maximum subarray sum",
        "Reversing an array",
        "Finding the longest palindrome substring",
        "Finding a pair that sums to a given value"
      ],
      answer: "Finding a pair that sums to a given value",
    },
    {
      question: "What is the space complexity of the Two Pointer technique?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
      answer: "O(1)",
    },
    {
      question: "In the Two Pointer technique, if the array is unsorted, what must be done first?",
      options: [
        "Sort the array",
        "Reverse the array",
        "Find the median",
        "Nothing needs to be done"
      ],
      answer: "Sort the array",
    },
    {
      question: "What is the best case time complexity for solving a problem using the Two Pointer technique on a sorted array?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
      answer: "O(n)",
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
      <h1 className="quiz-heading">Two Pointer Technique Quiz</h1>
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

export default TwoPointerQuiz;
