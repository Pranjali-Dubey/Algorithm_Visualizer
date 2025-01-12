import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Pointer.css';  // External CSS for styling

const TwoPointerTechnique = () => {
  const navigate = useNavigate();

  const goToQuiz = () => {
    navigate('/Pointer-quiz');
  };

  return (
    <div className="two-pointer-technique-page">
      {/* Container for Heading and Information */}
      <div className="info-container">
        <h1 className="page-title">Two Pointer Technique in Arrays</h1>

        {/* Text Section with Bullet Points */}
        <div className="text-section">
          <h2>What is the Two Pointer Technique?</h2>
          <ul>
            <li>The two pointer technique is an algorithmic approach used to solve problems with arrays or lists efficiently, by using two pointers (or indices) that move toward each other or in the same direction.</li>
            <li>It is often used in problems like searching for pairs or subarrays, checking for palindrome, and many others.</li>
          </ul>
          <h2>Uses:</h2>
          <ul>
            <li>Finding pairs: It can be used to find pairs of numbers in a sorted array that add up to a specific target.</li>
            <li>Reversing an array: Two pointers can be used to reverse an array in-place.</li>
            <li>Finding the middle of a list: It can be used to find the middle element in an array or linked list.</li>
            <li>Checking for palindrome: The two pointer technique helps efficiently check if a string or list is a palindrome.</li>
          </ul>
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="additional-info">
        <h2>Time Complexity:</h2>
        <ul>
          <li>Best Case: O(n) — as the pointers move linearly through the array.</li>
          <li>Average Case: O(n) — the two pointers will likely need to scan the whole array.</li>
          <li>Worst Case: O(n) — the algorithm runs in linear time for all use cases.</li>
        </ul>
        <h2>Space Complexity:</h2>
        <ul>
          <li>O(1) — as the algorithm only uses two pointers and doesn't require additional space.</li>
        </ul>
      </div>

      {/* Pseudocode Section */}
      <div className="additional-info">
        <h2>Two Pointer Technique Pseudocode:</h2>
        <pre>
{`function twoPointerTechnique(array, target):
    left ← 0
    right ← length(array) - 1
    while left < right:
        sum ← array[left] + array[right]
        if sum == target:
            return left, right  // Pair found
        else if sum < target:
            left ← left + 1  // Move left pointer right
        else:
            right ← right - 1  // Move right pointer left
    return -1  // No pair found`}
        </pre>
      </div>

      {/* Example Section */}
      <div className="additional-info">
        <h2>Example:</h2>
        <p>
          Given the sorted array [1, 2, 3, 4, 5, 6, 7, 8, 9] and the target sum 10:<br />
          <strong>Initial array:</strong> [1, 2, 3, 4, 5, 6, 7, 8, 9]<br />
          <strong>Target sum:</strong> 10<br />
        </p>
        <ul>
          <li>Step 1: Initial left = 0, right = 8. Sum = 1 + 9 = 10. Pair found at indices 0 and 8.</li>
          <li>Pair: (1, 9) at indices (0, 8).</li>
        </ul>
      </div>

      {/* Quiz Button */}
      <div className="quiz-button-container">
        <button className="btn-primary" onClick={goToQuiz}>Go to Two Pointer Technique Quiz</button>
      </div>
    </div>
  );
};

export default TwoPointerTechnique;
