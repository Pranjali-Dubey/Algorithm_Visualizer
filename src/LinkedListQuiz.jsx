// import React, { useState } from 'react';
// import './LinkedListQuiz.css';
// import { useNavigate } from 'react-router-dom';

// const LinkedListQuiz = () => {
//   const navigate = useNavigate();

//   const questions = [
//     {
//       question: "What is a linked list?",
//       options: [
//         "A linear collection of nodes",
//         "A sorted list of integers",
//         "A collection of key-value pairs",
//         "A list with elements of different data types"
//       ],
//       answer: "A linear collection of nodes",
//     },
//     {
//       question: "What is the main advantage of a linked list over an array?",
//       options: [
//         "Faster element access",
//         "Fixed memory allocation",
//         "Dynamic memory allocation",
//         "Better sorting capabilities"
//       ],
//       answer: "Dynamic memory allocation",
//     },
//     {
//       question: "What is the time complexity for inserting an element at the beginning of a linked list?",
//       options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
//       answer: "O(1)",
//     },
//     {
//       question: "What does a node in a singly linked list contain?",
//       options: [
//         "A value and a pointer to the next node",
//         "Only a value",
//         "Pointers to both previous and next nodes",
//         "A key and a value"
//       ],
//       answer: "A value and a pointer to the next node",
//     },
//     {
//       question: "How do you search for an element in a singly linked list?",
//       options: [
//         "Binary search",
//         "Sequential traversal",
//         "Hashing",
//         "Jump search"
//       ],
//       answer: "Sequential traversal",
//     },
//     {
//       question: "What is the disadvantage of a singly linked list?",
//       options: [
//         "Cannot store elements of different types",
//         "Uses too much memory",
//         "Cannot traverse backward",
//         "Has fixed size"
//       ],
//       answer: "Cannot traverse backward",
//     },
//     {
//       question: "Which type of linked list allows traversal in both directions?",
//       options: [
//         "Singly linked list",
//         "Doubly linked list",
//         "Circular linked list",
//         "Multilevel linked list"
//       ],
//       answer: "Doubly linked list",
//     },
//     {
//       question: "What is the time complexity of deleting the last element in a singly linked list?",
//       options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
//       answer: "O(n)",
//     },
//     {
//       question: "What is a circular linked list?",
//       options: [
//         "A list that connects the last node back to the head",
//         "A list that has no beginning or end",
//         "A list used for circular data",
//         "A list of circular nodes"
//       ],
//       answer: "A list that connects the last node back to the head",
//     },
//   ];

//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [score, setScore] = useState(0);
//   const [showScore, setShowScore] = useState(false);
//   const [feedback, setFeedback] = useState({ message: '', color: '' });
//   const [isSignedUp, setIsSignedUp] = useState(false);

//   const handleAnswerOptionClick = (selectedOption) => {
//     const isCorrect = selectedOption === questions[currentQuestion].answer;
//     setFeedback({
//       message: isCorrect
//         ? 'Correct!'
//         : `Wrong! The correct answer is: ${questions[currentQuestion].answer}`,
//       color: isCorrect ? 'green' : 'red',
//     });

//     if (isCorrect) {
//       setScore((prevScore) => prevScore + 1);
//     }

//     const nextQuestion = currentQuestion + 1;
//     if (nextQuestion < questions.length) {
//       setTimeout(() => {
//         setCurrentQuestion(nextQuestion);
//         setFeedback({ message: '', color: '' });
//       }, 1500);
//     } else {
//       setTimeout(() => {
//         setShowScore(true);
//       }, 1500);
//     }
//   };

//   const resetQuiz = () => {
//     setCurrentQuestion(0);
//     setScore(0);
//     setShowScore(false);
//     setFeedback({ message: '', color: '' });
//   };

//   const handleSignup = () => {
//     setIsSignedUp(true);
//     navigate('/sign-in');
//   };

//   return (
//     <div className={`quiz-container ${isSignedUp ? '' : 'blurred'}`}>
//       {/* Signup overlay */}
//       {!isSignedUp && (
//         <div className="signup-overlay">
//           <div className="signup-card">
//             <h2>Sign Up to Take the Quiz</h2>
//             <button className="signup-button" onClick={handleSignup}>Sign Up</button>
//           </div>
//         </div>
//       )}
      
//       {/* Quiz content */}
//       {isSignedUp && (
//         <div className="quiz-content">
//           <h1 className="quiz-heading">Linked List Quiz</h1>
//           <div className="progress-bar" style={{ width: `${(currentQuestion / questions.length) * 100}%` }}></div>
//           {showScore ? (
//             <div className="score-section">
//               <h2>You scored {score} out of {questions.length}</h2>
//               <button className="reset-button" onClick={resetQuiz}>Retry Quiz</button>
//             </div>
//           ) : (
//             <div className="quiz-section card">
//               <div className="question-section">
//                 <h2>Question {currentQuestion + 1}/{questions.length}</h2>
//                 <p>{questions[currentQuestion].question}</p>
//                 {feedback.message && (
//                   <div className="feedback" style={{ color: feedback.color }}>
//                     {feedback.message}
//                   </div>
//                 )}
//               </div>
//               <div className="options-section">
//                 {questions[currentQuestion].options.map((option, index) => (
//                   <button
//                     key={index}
//                     onClick={() => handleAnswerOptionClick(option)}
//                     className="option-button"
//                   >
//                     {option}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default LinkedListQuiz;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LinkedListQuiz.css';

const LinkedListQuiz = () => {
  const navigate = useNavigate();

  const questions = [
    {
            question: "What is a linked list?",
            options: [
              "A linear collection of nodes",
              "A sorted list of integers",
              "A collection of key-value pairs",
              "A list with elements of different data types"
            ],
            answer: "A linear collection of nodes",
          },
          {
            question: "What is the main advantage of a linked list over an array?",
            options: [
              "Faster element access",
              "Fixed memory allocation",
              "Dynamic memory allocation",
              "Better sorting capabilities"
            ],
            answer: "Dynamic memory allocation",
          },
          {
            question: "What is the time complexity for inserting an element at the beginning of a linked list?",
            options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
            answer: "O(1)",
          },
          {
            question: "What does a node in a singly linked list contain?",
            options: [
              "A value and a pointer to the next node",
              "Only a value",
              "Pointers to both previous and next nodes",
              "A key and a value"
            ],
            answer: "A value and a pointer to the next node",
          },
          {
            question: "How do you search for an element in a singly linked list?",
            options: [
              "Binary search",
              "Sequential traversal",
              "Hashing",
              "Jump search"
            ],
            answer: "Sequential traversal",
          },
          {
            question: "What is the disadvantage of a singly linked list?",
            options: [
              "Cannot store elements of different types",
              "Uses too much memory",
              "Cannot traverse backward",
              "Has fixed size"
            ],
            answer: "Cannot traverse backward",
          },
          {
            question: "Which type of linked list allows traversal in both directions?",
            options: [
              "Singly linked list",
              "Doubly linked list",
              "Circular linked list",
              "Multilevel linked list"
            ],
            answer: "Doubly linked list",
          },
          {
            question: "What is the time complexity of deleting the last element in a singly linked list?",
            options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
            answer: "O(n)",
          },
          {
            question: "What is a circular linked list?",
            options: [
              "A list that connects the last node back to the head",
              "A list that has no beginning or end",
              "A list used for circular data",
              "A list of circular nodes"
            ],
            answer: "A list that connects the last node back to the head",
          },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [feedback, setFeedback] = useState({ message: '', color: '' });
  const [isSignedUp, setIsSignedUp] = useState(false);

  useEffect(() => {
    // Check if the user is signed up and if there's quiz state stored in localStorage
    const savedQuizState = JSON.parse(localStorage.getItem('quizState'));
    if (savedQuizState && savedQuizState.isSignedUp) {
      setIsSignedUp(true);
      setCurrentQuestion(savedQuizState.currentQuestion);
      setScore(savedQuizState.score);
      setShowScore(savedQuizState.showScore);
    }
  }, []);

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
        saveQuizState();
      }, 1500);
    } else {
      setTimeout(() => {
        setShowScore(true);
        saveQuizState();
      }, 1500);
    }
  };

  const saveQuizState = () => {
    const quizState = {
      currentQuestion,
      score,
      showScore,
      isSignedUp,
    };
    localStorage.setItem('quizState', JSON.stringify(quizState));
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setFeedback({ message: '', color: '' });
    saveQuizState();
  };

  const handleSignup = () => {
    // Save the current quiz state to localStorage
    saveQuizState();
    // Navigate to the signup page
    navigate('/sign-in');
  };

  const handleSignUpSuccess = () => {
    // After successful signup, mark the user as signed up and redirect back to quiz page
    setIsSignedUp(true);
    navigate('/Linked-list-quiz');
  };

  return (
    <div className="quiz-container">
      {!isSignedUp && (
        <div className="signup-overlay">
          <div className="signup-card">
            <h2>Sign Up to Take the Quiz</h2>
            <button className="signup-button" onClick={handleSignup}>Sign Up</button>
          </div>
        </div>
      )}
      
      {isSignedUp && (
        <div className="quiz-content">
          <h1 className="quiz-heading">Linked List Quiz</h1>
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
      )}
    </div>
  );
};

export default LinkedListQuiz;
