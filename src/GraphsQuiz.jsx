import React, { useState } from 'react';
import './GraphsQuiz.css';

const GraphsQuiz = () => {
  const questions = [
    {
      question: "What is a graph in data structures?",
      options: [
        "A collection of nodes and edges",
        "A linear data structure",
        "A hierarchical structure",
        "A collection of sorted elements"
      ],
      answer: "A collection of nodes and edges",
    },
    {
      question: "In an undirected graph, what is true about the edges?",
      options: [
        "Edges have a direction",
        "Edges do not have a direction",
        "Each node has at most one edge",
        "Each node is connected to all other nodes"
      ],
      answer: "Edges do not have a direction",
    },
    {
      question: "What is a weighted graph?",
      options: [
        "A graph with equal-length edges",
        "A graph where each edge has a value or weight",
        "A graph with no cycles",
        "A graph with nodes of equal degree"
      ],
      answer: "A graph where each edge has a value or weight",
    },
    {
      question: "Which data structure is commonly used for Depth-First Search (DFS)?",
      options: [
        "Queue",
        "Stack",
        "Hash table",
        "Binary tree"
      ],
      answer: "Stack",
    },
    {
      question: "What is an adjacency matrix?",
      options: [
        "A matrix representing node distances",
        "A 2D array representing edges between nodes",
        "A list of nodes with their degrees",
        "A linear list of nodes"
      ],
      answer: "A 2D array representing edges between nodes",
    },
    {
      question: "In which traversal method are all neighboring nodes visited first?",
      options: [
        "Depth-First Search",
        "Breadth-First Search",
        "Inorder traversal",
        "Preorder traversal"
      ],
      answer: "Breadth-First Search",
    },
    {
      question: "What is a directed acyclic graph (DAG)?",
      options: [
        "A graph with no edges",
        "A directed graph with no cycles",
        "An undirected graph with cycles",
        "A graph where each node has one neighbor"
      ],
      answer: "A directed graph with no cycles",
    },
    {
      question: "What is the purpose of Dijkstra's algorithm?",
      options: [
        "To find the shortest path between nodes",
        "To find the maximum path in a graph",
        "To traverse a tree",
        "To find the longest path in a cycle"
      ],
      answer: "To find the shortest path between nodes",
    },
    {
      question: "Which data structure is most efficient for implementing an adjacency list?",
      options: [
        "Array",
        "Linked list",
        "Queue",
        "Stack"
      ],
      answer: "Linked list",
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
      <h1 className="quiz-heading">Graphs Quiz</h1>
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

export default GraphsQuiz;
