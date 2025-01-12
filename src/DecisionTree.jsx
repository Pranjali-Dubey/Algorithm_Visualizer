import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DecisionTree.css';

const DecisionTree = () => {
  const navigate = useNavigate();

  const goToQuiz = () => {
    navigate('/Decision-Tree-quiz');
  };

  return (
    <div className="Decision_Tree-page">
      {/* Container for Heading and Information */}
      <div className="info-container">
        <h1 className="page-title">Decision Tree Algorithm</h1>

        {/* Text Section with Bullet Points */}
        <div className="text-section">
          <h2>What is a Decision Tree?</h2>
          <ul>
            <li>A Decision Tree is a supervised machine learning algorithm used for classification and regression tasks. It utilizes a tree-like model of decisions and consequences, splitting data based on feature values to create leaf nodes representing the output. They are easy to interpret and are popular in various domains like finance, healthcare, and marketing.</li>
          </ul>

          <h2>Uses:</h2>
          <ul>
            <li>Classification: Classifies data into categories, e.g., predicting customer purchases.</li>
            <li>Regression: Predicts continuous values, e.g., house prices based on features.</li>
            <li>Risk Analysis: Assesses risks in finance and insurance.</li>
            <li>Customer Segmentation: Segments customers based on behavior in marketing.</li>
            <li>Feature Selection: Identifies significant features impacting the outcome.</li>
            <li>Medical Diagnosis: Determines disease presence based on symptoms.</li>
          </ul>
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="additional-info">
        <h2>Time Complexity:</h2>
        <ul>
          <li>Training Phase: O(n * log(n)), where n is the number of training samples.</li>
          <li>Prediction Phase: O(log(n)), where n is the number of samples in the tree.</li>
        </ul>

        <h2>Space Complexity:</h2>
        <ul>
          <li>O(n), where n is the number of training samples, as the data used to build the tree is stored.</li>
        </ul>
      </div>

      {/* Pseudocode Section */}
      <div className="additional-info">
        <h2>Pseudocode for Decision Tree:</h2>
        <pre>
{`DecisionTree:
Input:
    - Data (features, labels)
    - max_depth, min_samples_split
Output:
    - Trained tree

Function BuildTree(data, depth=0):
    if stop_criteria_met(data, depth):
        return create_leaf_node(data)

    best_split = find_best_split(data)
    left_data, right_data = split_data(data, best_split)
    left_node = BuildTree(left_data, depth + 1)
    right_node = BuildTree(right_data, depth + 1)
    return create_internal_node(best_split, left_node, right_node)
`}
        </pre>

        <h2>Explanation:</h2>
        <p>
          1. Tree Construction: Recursively splits the dataset based on feature values until stopping criteria are met or max depth is reached.<br />
          2. Prediction: Follows the feature values of the input sample down the tree, returning the prediction at the leaf node.
        </p>
      </div>

      <div className="quiz-button-container">
        <button className="btn-primary" onClick={goToQuiz}>Go to Decision Tree Quiz</button>
      </div>
    </div>
  );
};

export default DecisionTree;
