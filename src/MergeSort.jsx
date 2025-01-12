import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MergeSort.css';

const MergeSort = () => {
  const navigate = useNavigate();

  const goToQuiz = () => {
    navigate('/Merge-Sort-quiz');
  };

  return (
    <div className="merge-sort-page">
      {/* Container for Heading and Information */}
      <div className="info-container">
        <h1 className="page-title">Merge Sort Algorithm</h1>

        {/* Text Section with Bullet Points */}
        <div className="text-section">
          <h2>What is Merge Sort?</h2>
          <ul>
            <li>Merge Sort is a divide and conquer algorithm that sorts an array by dividing it into halves, sorting each half recursively, and then merging the sorted halves back together.</li>
          </ul>
          <h2>Uses:</h2>
          <ul>
            <li>Sorting large datasets: Efficient for sorting large datasets, especially those that do not fit into memory.</li>
            <li>External sorting: Used for external sorting tasks, like sorting data stored in files.</li>
            <li>Stable sorting: Maintains the order of equal elements, making it suitable for applications requiring stability.</li>
            <li>Linked lists sorting: Effective for sorting linked lists as it merges nodes without requiring random access.</li>
          </ul>
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="additional-info">
        <h2>Time Complexity:</h2>
        <ul>
          <li>Best Case: O(n log n)</li>
          <li>Average Case: O(n log n)</li>
          <li>Worst Case: O(n log n)</li>
        </ul>
        <h2>Space Complexity:</h2>
        <ul>
          <li>O(n)</li>
        </ul>
      </div>

      {/* Pseudocode Section */}
      <div className="additional-info">
        <h2>Merge Sort Pseudocode:</h2>
        <pre>
{`function mergeSort(array):
    if length of array ≤ 1:
        return array  // Base case: an array of 0 or 1 element is already sorted
    middle ← length of array // 2
    left ← mergeSort(array[0..middle])
    right ← mergeSort(array[middle..end])
    return merge(left, right)

function merge(left, right):
    result ← empty array
    while left and right are not empty:
        if left[0] ≤ right[0]:
            append left[0] to result
            remove left[0] from left
        else:
            append right[0] to result
            remove right[0] from right
    append remaining elements of left to result
    append remaining elements of right to result
    return result`}
        </pre>
      </div>

      {/* Example Section */}
      <div className="additional-info">
        <h2>Example:</h2>
        <p>Given the array [38, 27, 43, 3, 9, 82, 10]:</p>
        <ul>
          <li>Step 1: Split the array into two halves: [38, 27, 43] and [3, 9, 82, 10].</li>
          <li>Step 2: Recursively split these halves until each subarray contains only one element.</li>
          <li>Step 3: Merge pairs of subarrays, sorting them in the process: [27, 38, 43] and [3, 9, 10, 82].</li>
          <li>Step 4: Finally, merge these two sorted halves into the fully sorted array: [3, 9, 10, 27, 38, 43, 82].</li>
        </ul>
      </div>

      {/* Quiz Button */}
      <div className="quiz-button-container">
        <button className="btn-primary" onClick={goToQuiz}>Go to Merge Sort Quiz</button>
      </div>
    </div>
  );
};

export default MergeSort;
