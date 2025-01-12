import React, { useState } from 'react';
import './KMeansQuiz.css';

const KMeansQuiz = () => {
  const questions = [
    {
      question: "What is the primary goal of K-Means clustering?",
      options: ["To predict a continuous value", "To group similar data points into clusters", "To reduce dimensionality", "To find outliers"],
      answer: "To group similar data points into clusters",
    },
    {
      question: "What does the 'K' in K-Means represent?",
      options: ["The number of data points", "The number of clusters", "The distance metric", "The maximum iterations"],
      answer: "The number of clusters",
    },
    {
      question: "How are initial centroids selected in K-Means?",
      options: ["Randomly from the dataset", "Using the mean of the data", "Using the median of the data", "Predefined by the user"],
      answer: "Randomly from the dataset",
    },
    {
      question: "What distance metric is commonly used in K-Means clustering?",
      options: ["Manhattan distance", "Cosine similarity", "Euclidean distance", "Jaccard similarity"],
      answer: "Euclidean distance",
    },
    {
      question: "What happens when you increase the number of clusters (K) in K-Means?",
      options: ["The algorithm becomes slower", "The clusters may become too specific", "The model overfits", "All of the above"],
      answer: "All of the above",
    },
    {
      question: "What is the purpose of the K-Means algorithm's update step?",
      options: ["To assign data points to the nearest cluster", "To recalculate the centroids", "To stop the algorithm", "To scale the data"],
      answer: "To recalculate the centroids",
    },
    {
      question: "How does K-Means handle outliers?",
      options: ["By ignoring them", "By placing them in their own cluster", "By removing them from the dataset", "By assigning them to the nearest centroid"],
      answer: "By assigning them to the nearest centroid",
    },
    {
      question: "What is the time complexity of K-Means clustering?",
      options: ["O(n * K * I)", "O(n^2)", "O(K * log(n))", "O(n)"],
      answer: "O(n * K * I)",
    },
    {
      question: "What is a common method to determine the optimal number of clusters in K-Means?",
      options: ["Silhouette score", "Random sampling", "Mean Squared Error", "P-value"],
      answer: "Silhouette score",
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
      <h1 className="quiz-heading">K-Means Clustering Quiz</h1>
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

export default KMeansQuiz;
