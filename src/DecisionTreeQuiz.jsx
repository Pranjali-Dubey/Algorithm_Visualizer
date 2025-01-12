import React, { useState } from 'react';
import './DecisionTreeQuiz.css';

const DecisionTreeQuiz = () => {
  const questions = [
    {
      question: "What is a Decision Tree primarily used for?",
      options: ["Regression tasks", "Classification tasks", "Clustering tasks", "Both regression and classification tasks"],
      answer: "Both regression and classification tasks",
    },
    {
      question: "What does each internal node in a Decision Tree represent?",
      options: ["A feature", "A class label", "An outcome", "A threshold value"],
      answer: "A feature",
    },
    {
      question: "Which algorithm is commonly used to build Decision Trees?",
      options: ["ID3", "K-Means", "Linear Regression", "K-Nearest Neighbors"],
      answer: "ID3",
    },
    {
      question: "What is the purpose of pruning in Decision Trees?",
      options: ["To increase complexity", "To reduce overfitting", "To improve training time", "To enhance model accuracy"],
      answer: "To reduce overfitting",
    },
    {
      question: "Which criterion is commonly used to split nodes in a Decision Tree?",
      options: ["Mean Squared Error", "Information Gain", "Entropy", "Gini Impurity"],
      answer: "Information Gain",
    },
    {
      question: "What is the maximum depth of a Decision Tree?",
      options: ["The number of classes", "The number of features", "The longest path from the root to a leaf", "The total number of nodes"],
      answer: "The longest path from the root to a leaf",
    },
    {
      question: "How does a Decision Tree handle missing values?",
      options: ["It cannot handle missing values", "By ignoring them", "By using surrogate splits", "By imputing them with the mean"],
      answer: "By using surrogate splits",
    },
    {
      question: "What is the main advantage of Decision Trees?",
      options: ["They require feature scaling", "They are easy to interpret", "They always provide high accuracy", "They are less prone to overfitting"],
      answer: "They are easy to interpret",
    },
    {
      question: "What happens when a Decision Tree is too deep?",
      options: ["It becomes simpler", "It may overfit the training data", "It cannot make predictions", "It reduces bias"],
      answer: "It may overfit the training data",
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
      <h1 className="quiz-heading">Decision Tree Quiz</h1>
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

export default DecisionTreeQuiz;
