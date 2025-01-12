import React, { useState } from 'react';
import './LogisticRegressionQuiz.css';

const LogisticRegressionQuiz = () => {
  const questions = [
    {
      question: "What is logistic regression primarily used for?",
      options: ["Regression tasks", "Classification tasks", "Clustering tasks", "Dimensionality reduction"],
      answer: "Classification tasks",
    },
    {
      question: "In logistic regression, what is the output of the model?",
      options: ["A continuous value", "A probability value between 0 and 1", "A discrete integer", "A categorical label"],
      answer: "A probability value between 0 and 1",
    },
    {
      question: "Which function is commonly used in logistic regression to model the probability of the dependent variable?",
      options: ["Linear function", "Sigmoid function", "ReLU function", "Exponential function"],
      answer: "Sigmoid function",
    },
    {
      question: "What is the purpose of the threshold in logistic regression?",
      options: ["To determine the model's learning rate", "To convert probabilities into binary outcomes", "To identify outliers in the data", "To optimize the model's coefficients"],
      answer: "To convert probabilities into binary outcomes",
    },
    {
      question: "What does the cost function in logistic regression minimize?",
      options: ["The absolute error", "The squared error", "The logistic loss (log loss)", "The mean squared error"],
      answer: "The logistic loss (log loss)",
    },
    {
      question: "Which of the following assumptions is NOT made by logistic regression?",
      options: ["The dependent variable is binary.", "The independent variables are linearly related to the log odds.", "There is no multicollinearity among the independent variables.", "The independent variables must be normally distributed."],
      answer: "The independent variables must be normally distributed.",
    },
    {
      question: "What is the term for the coefficients in logistic regression that represent the change in log odds?",
      options: ["Weight", "Logit", "Odds Ratio", "Risk Ratio"],
      answer: "Logit",
    },
    {
      question: "Which method is commonly used to evaluate the performance of a logistic regression model?",
      options: ["Mean Squared Error", "Confusion Matrix", "R-squared", "Adjusted R-squared"],
      answer: "Confusion Matrix",
    },
    {
      question: "How does logistic regression handle non-linear relationships?",
      options: ["By using polynomial regression", "By transforming the independent variables", "By increasing the number of independent variables", "It cannot handle non-linear relationships."],
      answer: "By transforming the independent variables",
    },
    {
      question: "In logistic regression, what does a coefficient value greater than 0 indicate?",
      options: ["A negative relationship between the independent variable and the dependent variable", "A positive relationship between the independent variable and the dependent variable", "No relationship between the independent variable and the dependent variable", "The independent variable is not significant."],
      answer: "A positive relationship between the independent variable and the dependent variable",
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
      <h1 className="quiz-heading">Logistic Regression Quiz</h1>
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

export default LogisticRegressionQuiz;
