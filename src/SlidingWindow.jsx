import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SlidingWindow.css';  // External CSS for styling

const SlidingWindowTechnique = () => {
  const navigate = useNavigate();

  const goToQuiz = () => {
    navigate('/Sliding-Window-quiz');
  };

  return (
    <div className="sliding-window-technique-page">
      {/* Container for Heading and Information */}
      <div className="info-container">
        <h1 className="page-title">Sliding Window Technique</h1>

        {/* Text Section with Bullet Points */}
        <div className="text-section">
          <h2>What is the Sliding Window Technique?</h2>
          <ul>
            <li>The sliding window technique is a method used to efficiently calculate or find results over a contiguous block (or "window") of elements in an array or list, usually to optimize a brute force solution.</li>
            <li>It works by maintaining a window of fixed size or variable size, sliding it across the array to calculate the desired result, and adjusting the window boundaries as you go.</li>
          </ul>
          <h2>Uses:</h2>
          <ul>
            <li>Maximum/Minimum of subarrays: It is commonly used to find the maximum or minimum sum of a subarray of fixed length.</li>
            <li>Substring problems: Used for finding substrings or patterns in a string (e.g., finding the longest substring with at most K distinct characters).</li>
            <li>Sliding window for problems like finding a subarray of fixed sum, finding the longest subarray with specific conditions, etc.</li>
          </ul>
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="additional-info">
        <h2>Time Complexity:</h2>
        <ul>
          <li>Best Case: O(n) — each element is processed once in a linear scan.</li>
          <li>Average Case: O(n) — the window slides across the array in linear time.</li>
          <li>Worst Case: O(n) — the algorithm runs in linear time for all cases as each element is visited once.</li>
        </ul>
        <h2>Space Complexity:</h2>
        <ul>
          <li>O(1) — Only a few variables are used to maintain the window, making it an in-place algorithm.</li>
        </ul>
      </div>

      {/* Pseudocode Section */}
      <div className="additional-info">
        <h2>Sliding Window Pseudocode:</h2>
        <pre>
{`function slidingWindow(array, k):
    windowSum ← 0
    maxSum ← -∞
    for i ← 0 to length(array) - 1:
        windowSum ← windowSum + array[i]  // Add current element to the window
        if i >= k - 1:
            maxSum ← max(maxSum, windowSum)  // Update max sum if window is valid
            windowSum ← windowSum - array[i - k + 1]  // Remove the element leaving the window
    return maxSum`}
        </pre>
      </div>

      {/* Example Section */}
      <div className="additional-info">
        <h2>Example:</h2>
        <p>
          Given the array [1, 2, 3, 4, 5, 6, 7, 8, 9] and the window size 3:<br />
          <strong>Initial array:</strong> [1, 2, 3, 4, 5, 6, 7, 8, 9]<br />
          <strong>Window size:</strong> 3<br />
        </p>
        <ul>
          <li>Step 1: Window = [1, 2, 3]. Sum = 6. Move the window one step right.</li>
          <li>Step 2: Window = [2, 3, 4]. Sum = 9. Move the window one step right.</li>
          <li>Step 3: Window = [3, 4, 5]. Sum = 12. Move the window one step right.</li>
          <li>Step 4: Window = [4, 5, 6]. Sum = 15. Move the window one step right.</li>
          <li>Step 5: Window = [5, 6, 7]. Sum = 18. Move the window one step right.</li>
          <li>Step 6: Window = [6, 7, 8]. Sum = 21. Move the window one step right.</li>
          <li>Step 7: Window = [7, 8, 9]. Sum = 24. Maximum sum found is 24.</li>
        </ul>
        <strong>Maximum sum of any subarray of size 3: 24</strong>
      </div>

      {/* Quiz Button */}
      <div className="quiz-button-container">
        <button className="btn-primary" onClick={goToQuiz}>Go to Sliding Window Technique Quiz</button>
      </div>
    </div>
  );
};

export default SlidingWindowTechnique;
