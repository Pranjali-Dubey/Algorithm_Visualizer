import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate from react-router-dom
import './SVM.css';  // External CSS for styling
import SVM_V from './assets/videos/support_vector_machine.mp4';
// import SVMQuiz from './SVMQuiz';
import SVMP from './SVMP';

const SVM = () => {
  const navigate = useNavigate();  // Define navigate function using useNavigate

  const goToQuiz = () => {
    navigate('/SVM-quiz');  // Navigate to SVM quiz page
  };

  return (
    <div className="SVM-page">
      {/* Container for Heading and Information */}
      <div className="info-container">
        {/* Heading */}
        <h1 className="page-title">Support Vector Machine (SVM) Algorithm</h1>
        <br/>
        {/* Text Section with Bullet Points */}
        <div className="text-section">
          <h2>What is Support Vector Machine (SVM)?</h2>
          <ul>
            <li>Support Vector Machine (SVM) is a supervised machine learning algorithm used for classification and regression tasks. It works by finding the optimal hyperplane that maximizes the margin between different classes in a high-dimensional space, effectively separating them. SVM is particularly effective in high-dimensional datasets and is robust against overfitting, especially in cases with a clear margin of separation.</li>
          </ul>
          <h2>Uses:</h2>
          <ul>
            <li>Text Classification: Widely used for spam detection and sentiment analysis in natural language processing tasks.</li>
            <li>Image Recognition: Effective in classifying images, such as handwritten digit recognition and facial recognition.</li>
            <li>Bioinformatics: Utilized for classifying genes and proteins, such as predicting cancer types based on gene expression data.</li>
            <li>Financial Forecasting: Applied in predicting stock prices, credit scoring, and risk management.</li>
            <li>Handwriting Recognition: Used in optical character recognition (OCR) systems to interpret handwritten text.</li>
            <li>Anomaly Detection: Helpful in identifying outliers in datasets, useful in fraud detection and network security.</li>
          </ul>
        </div>
      </div>

      {/* Video Section */}
      <div className="video-section">
        <video width="700" height="400" controls>
          <source src={SVM_V} type="video/mp4" />
          {/* Fallback message if the video is unsupported */}
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Link to Download the Video */}
      <div className="download-section">
        <a 
          href="videos/support_vector_machine.mp4" 
          download="SVM Tutorial.mp4"
          className="download-link"
        >
          Download Support Vector Machine Video
        </a>
      </div>

      {/* Additional Information Section */}
      <div className="additional-info">
        <h2>Time Complexity:</h2>
        <ul>
          <li>Training Phase: The time complexity of training an SVM model depends on the algorithm used and the number of support vectors:<br/>
             Using Quadratic Programming: O(n² * m) to O(n³), where:<br/>
             n is the number of training examples,<br/>
             m is the number of features.</li>
          <li>Prediction Phase: O(k * m), where:</li>
          <li>k is the number of support vectors,</li>
          <li>m is the number of features. The prediction requires computing the dot product between support vectors and the input features.</li>
        </ul>
        <h2>Space Complexity:</h2>
        <ul>
          <li>Space Complexity: O(n + k * m), where:<br/>
            n is the number of training examples,<br/>
            k is the number of support vectors,<br/>
            m is the number of features.</li>
          <li>This includes storing the training data, the support vectors, and the weights for the hyperplane.</li>
        </ul>
      </div>

      {/* SVM Pseudocode Section */}
      <div className="additional-info">
        <h2>Pseudocode for Support Vector Machine (SVM)</h2>
        <pre className="pseudocode">
          {`SVM:
Input:
    - X (Features)
    - y (Labels)
    - C (Regularization parameter)
    - kernel (Kernel type)
Output:
    - w (Weights)
    - b (Bias)

Initialize w = 0, b = 0
For each iteration:
    For each data point (X[i], y[i]):
        If margin (y[i] * (w * X[i] + b)) < 1:
            Update w and b
Return w, b

`}
        </pre>

        <h2>Explanation:</h2>
        <p>
          1. Initialization: Initialize Lagrange multipliers and bias to zero, and define parameters like the regularization parameter (C), tolerance, and maximum number of passes.<br />
          2. Main Loop: Iteratively update the Lagrange multipliers (alpha) based on the conditions of the Karush-Kuhn-Tucker (KKT) conditions, selecting pairs of examples to optimize.<br />
          3. Kernel Function: Compute the kernel function to find the similarity between input vectors. Here, a linear kernel is used, but other kernels can be applied depending on the problem.<br />
          4. Prediction: After training, use the learned weights (alphas) and bias to make predictions on new data points.<br />
        </p>
      </div>

      <SVMP />

      {/* Quiz Button */}
      <div className="quiz-button-container">
        <button className="btn-primary" onClick={goToQuiz}>Go to SVM Quiz</button>
      </div>
    </div>
  );
};

export default SVM;
  