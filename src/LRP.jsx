import React from 'react';
import './LRP.css';

const PythonCode = () => {
  // Python code example
  const pythonCode = `
# Import necessary libraries
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn import datasets
from sklearn.metrics import accuracy_score, confusion_matrix

# Load a sample dataset (e.g., Iris dataset)
iris = datasets.load_iris()

# For simplicity, we'll only use two classes (binary classification)
# and select only two features for visualization purposes
X = iris.data[iris.target != 2, :2]  # Select first two features
y = iris.target[iris.target != 2]    # Only two classes (0 and 1)

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# Create a logistic regression model
log_reg = LogisticRegression()

# Train the model
log_reg.fit(X_train, y_train)

# Make predictions on the test set
y_pred = log_reg.predict(X_test)

# Calculate accuracy
accuracy = accuracy_score(y_test, y_pred)
conf_matrix = confusion_matrix(y_test, y_pred)

# Display results
print(f"Accuracy: {accuracy * 100:.2f}%")
print("Confusion Matrix:")
print(conf_matrix)


Output: Accuracy: 100.00%
Confusion Matrix:
[[17 0]
 [0 13]]

`;

  return (
    <div className="code-container">
      <div className="code-header">
        <h3>Python Code Example</h3>
      </div>
      <div className="code-content">
        <pre className="code-box">
          <code>{pythonCode}</code>
        </pre>
      </div>
    </div>
  );
};

export default PythonCode;
