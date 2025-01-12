import React from 'react';
import './KMeans.css';  // External CSS for styling
//import KMeansQuiz from './KMeansQuiz'; // Update the quiz component
import { useNavigate } from 'react-router-dom';  // Import for navigation

const KMeans = () => {
  const navigate = useNavigate();  // Initialize the navigation function

  // Function to navigate to the KMeans Quiz page
  const goToQuiz = () => {
    navigate('/K-Means-quiz');  // Navigate to KMeansQuiz page
  };

  return (
    <div className="KMeans-page">
      {/* Container for Heading and Information */}
      <div className="info-container">
        {/* Heading */}
        <h1 className="page-title">K-Means Clustering Algorithm</h1>

        {/* Text Section with Bullet Points */}
        <div className="text-section">
          <h2>What is K-Means Clustering?</h2>
          <ul>
            <li>K-Means is an unsupervised machine learning algorithm used for clustering tasks. It partitions the dataset into K distinct clusters based on feature similarity.</li>
            <h2>Uses:</h2>
            <li>Market Segmentation: Groups customers based on purchasing behavior.</li>
            <li>Image Compression: Reduces the number of colors in an image by clustering similar colors.</li>
            <li>Anomaly Detection: Identifies outliers in data by finding data points that do not belong to any cluster.</li>
            <li>Document Clustering: Organizes documents into similar groups for efficient retrieval.</li>
            <li>Social Network Analysis: Groups individuals based on their interactions or connections.</li>
            <li>Pattern Recognition: Identifies patterns in data, such as clustering similar patterns in time series data.</li>
          </ul>
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="additional-info">
        <h2>Time Complexity:</h2>
        <ul>
          <li>Training Phase: The time complexity primarily depends on the number of clusters (K) and the number of data points (n).</li>
          <li>Time Complexity: O(n * K * I), where:<br />
              n is the number of data points.<br />
              K is the number of clusters.<br />
              I is the number of iterations until convergence.</li>
          <li>Prediction Phase: O(n * K), where n is the number of data points.</li>
        </ul>
      </div>

      {/* Pseudocode Section */}
      <div className="additional-info">
        <h2>Pseudocode for K-Means:</h2>
        <pre>
          {`KMeansClustering:
Input:
    - Data (features)
    - K (clusters)
    - max_iterations (optional)
Output:
    - Cluster centers, labels

Function KMeans(data, K, max_iterations=100):
    Initialize K random centers
    for iteration in range(max_iterations):
        labels = assign_labels(data, K)
        new_centers = update_centers(data, labels, K)
        if new_centers == old_centers:
            break
        old_centers = new_centers
    return new_centers, labels

Function assign_labels(data, K):
    return [find_closest_center(point) for point in data]

Function update_centers(data, labels, K):
    return [calculate_mean([point for i, point in enumerate(data) if labels[i] == k]) for k in range(K)]

Function find_closest_center(point):
    return min(range(len(centers)), key=lambda i: distance(point, centers[i]))

Function calculate_mean(points):
    return sum(points) / len(points)

Function distance(point1, point2):
    return sqrt(sum((a - b) ** 2 for a, b in zip(point1, point2)))
`}
        </pre>

        <h2>Explanation:</h2>
        <p>
          1. Initialization: Choose K initial centroids randomly from the dataset.<br />
          2. Assignment: Assign each data point to the nearest centroid based on distance (e.g., Euclidean distance).<br />
          3. Update: Recalculate centroids as the average of all points assigned to each cluster.<br />
          4. Repeat the assignment and update steps until the centroids do not change significantly or a maximum number of iterations is reached.<br />
        </p>
      </div>

     

      {/* Button to navigate to KMeansQuiz */}
      <div className="quiz-button-container">
        <button className="btn-primary" onClick={goToQuiz}>Go to K-Means Quiz</button>
      </div>
    </div>
  );
};

export default KMeans;
