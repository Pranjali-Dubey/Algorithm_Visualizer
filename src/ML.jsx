import React from 'react';
import './ML.css';

const ML = () => {
  return (
    <div className="homepage-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Explore Machine Learning Algorithms</h1>
          <p>Discover powerful machine learning techniques, algorithms, and tutorials to enhance your data science journey.</p>
          <a href="#algorithms-section" className="cta-button">Start Learning</a>
        </div>
      </section>

      {/* Algorithms Section */}
      <section id="algorithms-section" className="algorithms-section">
        <h2>Popular Machine Learning Algorithms</h2>
        <div className="algorithm-cards">
          <div className="algorithm-card hover-effect">
            <h3>Logistic Regression</h3>
            <p>A supervised learning algorithm used for predicting binary outcomes by estimating the probability that a given input point belongs to a certain class.</p>
            <a href="/Logistic_regression" className="card-button">Learn More</a>
          </div>
          <div className="algorithm-card hover-effect">
            <h3>Decision Trees</h3>
            <p>A supervised learning algorithm used for both classification and regression tasks. It works by recursively partitioning the data into subsets based on the value of input features.</p>
            <a href="/Decision_Tree" className="card-button">Learn More</a>
          </div>
          <div className="algorithm-card hover-effect">
            <h3>Support Vector Machines</h3>
            <p>A supervised learning algorithm used for classification and regression tasks. SVM works by finding the optimal hyperplane that separates different classes in the feature space.</p>
            <a href="/SVM" className="card-button">Learn More</a>
          </div>
          <div className="algorithm-card hover-effect">
            <h3>K-Means Clustering</h3>
            <p>An unsupervised learning algorithm used for partitioning data into distinct groups or clusters. </p>
            <a href="/KMeans" className="card-button">Learn More</a>
          </div>
        </div>
      </section>


    </div>
  );
};

export default ML;
