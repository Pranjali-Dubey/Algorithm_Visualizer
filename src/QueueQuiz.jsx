import React, { useState } from 'react';
import './QueueQuiz.css';

const QueueQuiz = () => {
  const questions = [
    {
      question: "What is a queue in data structures?",
      options: [
        "A linear data structure with FIFO order",
        "A linear data structure with LIFO order",
        "A hierarchical structure",
        "A sorted collection of elements"
      ],
      answer: "A linear data structure with FIFO order",
    },
    {
      question: "Which operation removes the front element from a queue?",
      options: [
        "Dequeue",
        "Enqueue",
        "Peek",
        "Insert"
      ],
      answer: "Dequeue",
    },
    {
      question: "What is the time complexity of the enqueue operation in a queue?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
      answer: "O(1)",
    },
    {
      question: "What does the peek operation do in a queue?",
      options: [
        "Removes the front element",
        "Adds an element to the back",
        "Returns the front element without removing it",
        "Clears the queue"
      ],
      answer: "Returns the front element without removing it",
    },
    {
      question: "In which scenario are queues commonly used?",
      options: [
        "Printer job scheduling",
        "Graph traversal",
        "Binary search",
        "Database indexing"
      ],
      answer: "Printer job scheduling",
    },
    {
      question: "What happens when you try to dequeue from an empty queue?",
      options: [
        "It returns null",
        "It throws an underflow error",
        "It adds a default element",
        "It resets the queue"
      ],
      answer: "It throws an underflow error",
    },
    {
      question: "How do you implement a queue in most programming languages?",
      options: [
        "Using an array or linked list",
        "Using a stack",
        "Using a binary tree",
        "Using a hash table"
      ],
      answer: "Using an array or linked list",
    },
    {
      question: "What is a common application of queues in operating systems?",
      options: [
        "Memory management",
        "Sorting",
        "Process scheduling",
        "Binary search"
      ],
      answer: "Process scheduling",
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
      <h1 className="quiz-heading">Queue Quiz</h1>
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

export default QueueQuiz;
