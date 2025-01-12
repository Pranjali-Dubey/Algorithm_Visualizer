import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the navigate hook for routing
import './LogisticRegression.css';  // External CSS for styling
import BS_V from './assets/videos/Logistic_Regression.mp4';
import LRP from './LRP'; // Assuming LRP is another component

const LogisticRegression = () => {
  const navigate = useNavigate(); // Hook for navigation
  
  // Function to navigate to the Logistic Regression Quiz page
  const goToQuiz = () => {
    navigate('/logistic-regression-quiz'); // Navigate to LogisticRegressionQuiz page
  };

  return (
    <div className="Logistic_Regression-page">
      {/* Container for Heading and Information */}
      <div className="info-container">
        {/* Heading */}
        <h1 className="page-title">Logistic Regression Algorithm</h1>

        {/* Text Section with Bullet Points */}
        <div className="text-section">
          <h2>What is Logistic Regression?</h2>
          <ul>
            <li>Logistic regression is a statistical method used for binary classification that models the probability of a dependent variable belonging to a particular category. It uses the logistic function to transform the linear combination of input features into a value between 0 and 1, enabling the prediction of binary outcomes (e.g., success/failure). This technique is widely used in various fields, including medicine, finance, and social sciences, for tasks like disease diagnosis, credit scoring, and marketing response prediction.</li>
          </ul>
          
          <h2>Uses:</h2>
          <ul>
            <li>Binary classification: Commonly used to predict binary outcomes, such as yes/no or success/failure scenarios.</li>
            <li>Medical diagnosis: Helps in predicting the presence or absence of a disease based on patient data (e.g., predicting whether a tumour is malignant or benign).</li>
            <li>Credit scoring: Assists financial institutions in evaluating the likelihood of a borrower defaulting on a loan.</li>
            <li>Marketing: Used to predict customer behaviour, such as whether a customer will respond to a marketing campaign.</li>
            <li>Risk assessment: Applied in insurance and finance to estimate the risk associated with various policies or investments.</li>
            <li>Spam detection: Utilized in email filtering systems to classify emails as spam or not spam based on various features.</li>
          </ul>
        </div>
      </div>

      {/* Video Section */}
      <div className="video-section">
        <video width="700" height="400" controls>
          <source src={BS_V} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Link to Download the Video */}
      <div className="download-section">
        <a 
          href="videos/Logistic_Regression.mp4" 
          download="Logistic Regression Tutorial.mp4"
          className="download-link"
        >
          Download Logistic Regression Video
        </a>
      </div>

      {/* Additional Information Section */}
      <div className="additional-info">
        <h2>Time Complexity:</h2>
        <ul>
          <li>Training Phase: The time complexity for training logistic regression primarily depends on the optimization algorithm used (commonly gradient descent).</li>
          <li>Gradient Descent: O(n * m * k), where:<br/>
              n is the number of training samples,<br/>
              m is the number of features,<br/>
              k is the number of iterations until convergence.<br/>
          </li>
          <li>Prediction Phase: O(m), where m is the number of features since it requires computing a weighted sum of the features.</li>
        </ul>
        
        <h2>Space Complexity:</h2>
        <ul>
          <li>Space Complexity: O(m), where m is the number of features, since it stores the weights corresponding to each feature. The additional space required for the training data is not considered, as it is generally external to the model itself.</li>
        </ul>
      </div>

      {/* Pseudocode Section */}
      <div className="additional-info">
        <h2>Pseudocode for Logistic Regression:</h2>
        <pre>
          {` LogisticRegression:
Input:
    - X (Features)
    - y (Labels)
    - learning_rate (α)
    - iterations (number of iterations for training)
Output:
    - θ (Trained model parameters)

Initialize θ (weights) to zeros or random values
For i in range(iterations):
    z = X * θ  # Linear combination of input features
    predictions = sigmoid(z)  # Apply sigmoid function to get probability
    error = predictions - y  # Compute error between predicted and actual labels
    gradient = (1/m) * X.T * error  # Compute gradient (partial derivatives)
    θ = θ - learning_rate * gradient  # Update model parameters

Return θ  # Return trained model
`}
        </pre>

        <h2>Explanation:</h2>
        <p>
          1. Initialization: Set weights and bias to zero and define learning rate and number of iterations.<br />
          2. Sigmoid Function: A helper function to compute the sigmoid of the input.<br />
          3. Training:<br />
          Compute the predicted probabilities using the sigmoid function.<br />
          Calculate the gradients for weights and bias.<br />
          Update weights and bias using the gradients and the learning rate.<br />
          4. Prediction: Use the learned weights and bias to predict the class labels for new data points based on the threshold (0.5).<br />
        </p>
      </div>

      <LRP />

      {/* Button to navigate to LogisticRegressionQuiz */}
      <div className="quiz-button-container">
        <button className="btn-primary" onClick={goToQuiz}>Go to Logistic Regression Quiz</button>
      </div>

    </div>
  );
};

export default LogisticRegression;
