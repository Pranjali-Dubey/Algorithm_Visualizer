import React, { useState } from 'react';
import './SortingQuiz.css';

const InsertionSortQuiz = () => {
  const questions = [
    {
      question: "What is the primary operation of the Insertion Sort algorithm?",
      options: [
        "Divide and conquer",
        "Inserting elements at the correct position",
        "Merging sorted arrays",
        "Swapping adjacent elements"
      ],
      answer: "Inserting elements at the correct position",
    },
    {
      question: "What is the time complexity of Insertion Sort in the worst case?",
      options: ["O(n)", "O(n²)", "O(n log n)", "O(n³)"],
      answer: "O(n²)",
    },
    {
      question: "Which of the following is true about Insertion Sort?",
      options: [
        "It is efficient for large datasets",
        "It is a stable sorting algorithm",
        "It is used in divide and conquer algorithms",
        "It is slower than Merge Sort"
      ],
      answer: "It is a stable sorting algorithm",
    },
    {
      question: "What is the space complexity of Insertion Sort?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
      answer: "O(1)",
    },
    {
      question: "In which scenario does Insertion Sort perform the best?",
      options: [
        "When the array is already sorted",
        "When the array is unsorted",
        "When the array is in reverse order",
        "When the array is large"
      ],
      answer: "When the array is already sorted",
    },
    {
      question: "Which type of sorting algorithm is Insertion Sort?",
      options: ["Comparative", "Non-comparative", "Divide and conquer", "Greedy"],
      answer: "Comparative",
    },
    {
      question: "What is the average time complexity of Insertion Sort?",
      options: ["O(n)", "O(n log n)", "O(n²)", "O(n³)"],
      answer: "O(n²)",
    },
    {
      question: "Which of the following is a disadvantage of Insertion Sort?",
      options: [
        "It has a high time complexity in the worst case",
        "It is not a stable sorting algorithm",
        "It is difficult to implement",
        "It requires more memory"
      ],
      answer: "It has a high time complexity in the worst case",
    },
    {
      question: "What is the best case time complexity of Insertion Sort?",
      options: ["O(n)", "O(n²)", "O(log n)", "O(1)"],
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
      <h1 className="quiz-heading">Insertion Sort Technique Quiz</h1>
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

export default InsertionSortQuiz;
