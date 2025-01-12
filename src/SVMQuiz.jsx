import React, { useState } from 'react';
import './SVMQuiz.css';

const SVMQuiz = () => {
  const questions = [
    {
      question: "What is the main purpose of Support Vector Machines?",
      options: ["Classification", "Regression", "Clustering", "Dimensionality reduction"],
      answer: "Classification",
    },
    {
      question: "What is the role of the kernel function in SVM?",
      options: ["To map data into higher dimensions", "To reduce dimensionality", "To normalize data", "To calculate distance"],
      answer: "To map data into higher dimensions",
    },
    {
      question: "Which kernel is the default in most SVM implementations?",
      options: ["Linear", "Polynomial", "RBF", "Sigmoid"],
      answer: "RBF",
    },
    {
      question: "What is the ‘margin’ in SVM?",
      options: ["The distance between support vectors", "The distance between the decision boundary and nearest data points", "The width of the decision boundary", "The area covered by the hyperplane"],
      answer: "The distance between the decision boundary and nearest data points",
    },
    {
      question: "Which of the following is true for a soft-margin SVM?",
      options: ["It allows some misclassification", "It has no misclassification", "It uses a linear kernel only", "It cannot handle outliers"],
      answer: "It allows some misclassification",
    },
    {
      question: "What is the C parameter in SVM responsible for?",
      options: ["Regularization", "Learning rate", "Kernel selection", "Max iterations"],
      answer: "Regularization",
    },
    {
      question: "What is the goal of the support vectors in SVM?",
      options: ["To create decision boundaries", "To represent misclassified points", "To support dimensionality reduction", "To determine margin width"],
      answer: "To determine margin width",
    },
    {
      question: "Which SVM kernel works well with non-linearly separable data?",
      options: ["Linear", "Polynomial", "RBF", "None of the above"],
      answer: "RBF",
    },
    {
      question: "What is the significance of slack variables in SVM?",
      options: ["They allow some misclassification", "They represent outliers", "They are used to increase dimensionality", "They control regularization"],
      answer: "They allow some misclassification",
    },
    {
      question: "What does a high value of C in SVM indicate?",
      options: ["The model allows more misclassification", "The model allows less misclassification", "The margin is wider", "The margin is smaller"],
      answer: "The model allows less misclassification",
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
      <h1 className="quiz-heading">Support Vector Machine (SVM) Quiz</h1>
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

export default SVMQuiz;
