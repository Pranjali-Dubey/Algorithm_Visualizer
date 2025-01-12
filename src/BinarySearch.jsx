import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BinarySearch.css';  // External CSS for styling
import BS_V from './assets/videos/binary_search.mp4';
import BSP from './BSP';

const BinarySearch = () => {
  const navigate = useNavigate();

  const goToQuiz = () => {
    navigate('/Binary-Search-quiz');
  };

  return (
    <div className="binary-search-page">
      {/* Container for Heading and Information */}
      <div className="info-container">
        <h1 className="page-title">Binary Search Algorithm</h1>

        {/* Text Section with Bullet Points */}
        <div className="text-section">
          <h2>What is Binary Search?</h2>
          <ul>
            <li>Binary search is an efficient algorithm used to find the position of a target value within a sorted array or list. It works by repeatedly dividing the search interval in half.</li>
          </ul>
          <h2>Uses:</h2>
          <ul>
            <li>Finding an element: Binary search helps quickly locate a specific element in a sorted array.</li>
            <li>Checking if an element exists: It can efficiently check if a value is present in a sorted list.</li>
            <li>Finding boundaries: It is used to find the first or last occurrence of an element (e.g., in range queries or for duplicates).</li>
            <li>Optimization problems: Binary search is applied in problems where the solution space is sorted or can be sorted, such as finding a threshold value (like the maximum/minimum possible value for a condition to be true).</li>
            <li>Guessing games: It is conceptually used in scenarios like guessing a number within a range, halving the possible range of answers each time.</li>
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
          href={BS_V} 
          download="Binary Search Tutorial.mp4"
          className="download-link"
        >
          Download Binary Search Video
        </a>
      </div>

      {/* Additional Information Section */}
      <div className="additional-info">
        <h2>Time Complexity:</h2>
        <ul>
          <li>Best Case: O(1)</li>
          <li>Average Case: O(log n)</li>
          <li>Worst Case: O(log n)</li>
        </ul>
        <h2>Space Complexity:</h2>
        <ul>
          <li>Iterative Binary Search: O(1)</li>
          <li>Recursive Binary Search: O(log n)</li>
        </ul>
      </div>

      {/* Pseudocode Section */}
      <div className="additional-info">
        <h2>Binary Search Pseudocode:</h2>
        <pre>
{`function binarySearchRecursive(array, low, high, target):
    if low > high:
        return -1  // Base case: Target not found
    mid ← (low + high) // 2
    if array[mid] == target:
        return mid  // Target found
    else if array[mid] < target:
        return binarySearchRecursive(array, mid + 1, high, target)  // Search in the right half
    else:
        return binarySearchRecursive(array, low, mid - 1, target)  // Search in the left half`}
        </pre>
      </div>

      {/* Example Section */}
      <div className="additional-info">
        <h2>Example:</h2>
        <p>
          Given the sorted array [2, 5, 8, 12, 16, 23, 38, 56, 72, 91] and the search key 23:<br />
          <strong>Initial array:</strong> [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]<br />
          <strong>Search key:</strong> 23<br />
          <strong>Initial middle index:</strong> 4<br />
        </p>
        <ul>
          <li>Step 1: Initial low = 0, high = 9. Middle element = 16. Since 16 &lt; 23, search in the right half (low = 5).</li>
          <li>Step 2: Subarray = [23, 38, 56, 72, 91]. Middle element = 56. Since 56 &gt; 23, search in the left half (high = 6).</li>
          <li>Step 3: Subarray = [23, 38]. Middle element = 23. Target found at index 5.</li>
        </ul>-
      </div>

      {/* Additional Component */}
      <BSP />

      {/* Quiz Button */}
      <div className="quiz-button-container">
        <button className="btn-primary" onClick={goToQuiz}>Go to Binary Search Quiz</button>
      </div>
    </div>
  );
};

export default BinarySearch;
