import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SelectionSort.css';
import SS_V from './assets/videos/selection_sort.mp4';

import SSP from './SSP';

const SelectionSort = () => {
  const navigate = useNavigate();

  const goToQuiz = () => {
    navigate('/Selection-Sort-quiz');
  };

  return (
    <div className="selection-sort-page">
      {/* Container for Heading and Information */}
      <div className="info-container">
        <h1 className="page-title">Selection Sort Algorithm</h1>

        <div className="text-section">
          <h2>What is Selection Sort?</h2>
          <ul>
            <li>Selection Sort is a simple comparison-based sorting algorithm that repeatedly selects the smallest (or largest) element from the unsorted portion of the list and swaps it with the first unsorted element.</li>
          </ul>
          <h2>Uses:</h2>
          <ul>
            <li>Small datasets: Ideal for sorting small collections where performance is not a primary concern.</li>
            <li>Limited swaps: Minimizes memory writes, making it useful when writing to memory is expensive.</li>
            <li>Simple implementation: Easy to implement and understand, making it ideal for educational purposes.</li>
            <li>Partial sorting: Useful for finding the smallest/largest elements without fully sorting.</li>
            <li>In-place sorting: Requires O(1) auxiliary space, making it space-efficient.</li>
            <li>Deterministic behavior: Predictable performance and order regardless of input.</li>
          </ul>
        </div>
      </div>

      {/* Video Section */}
      <div className="video-section">
        <video width="700" height="400" controls>
          <source src={SS_V} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Link to Download the Video */}
      <div className="download-section">
        <a href={SS_V} download="Selection Sort Tutorial.mp4" className="download-link">
          Download Selection Sort Video
        </a>
      </div>

      {/* Additional Information Section */}
      <div className="additional-info">
        <h2>Time Complexity:</h2>
        <ul>
          <li>Best case: O(n²)</li>
          <li>Average case: O(n²)</li>
          <li>Worst case: O(n²)</li>
        </ul>
        <h2>Space Complexity:</h2>
        <ul>
          <li>O(1) - Selection Sort is an in-place sorting algorithm, requiring constant extra space.</li>
        </ul>
      </div>

      {/* Pseudocode Section */}
      <div className="additional-info">
        <h2>Selection Sort Pseudocode:</h2>
        <pre>
{`SelectionSort(array, n):
    for i = 0 to n - 1:
        minIndex = i
        for j = i + 1 to n - 1:
            if array[j] < array[minIndex]:
                minIndex = j
        if minIndex != i:
            swap(array[i], array[minIndex])`}
        </pre>
        <h2>Explanation:</h2>
        <p>
          1. The outer loop iterates over each element of the array.<br />
          2. The inner loop finds the minimum element in the unsorted part of the array.<br />
          3. After finding the minimum, the algorithm swaps it with the first unsorted element.<br />
          4. This process repeats until the array is sorted.
        </p>
      </div>

      {/* Example Section */}
      <div className="additional-info">
        <h2>Example:</h2>
        <p>An array is given: <strong>arr = [64, 25, 12, 22, 11]</strong></p>
        <ul>
          <li><strong>Initial array:</strong> [64, 25, 12, 22, 11]</li>
          <li>Step 1: Find the minimum in the rest of the array [25, 12, 22, 11]. The minimum is 11. Swap 64 with 11. Array after Step 1: [11, 25, 12, 22, 64]</li>
          <li>Step 2: Find the minimum in the rest of the array [12, 22, 64]. The minimum is 12. Swap 25 with 12. Array after Step 2: [11, 12, 25, 22, 64]</li>
          <li>Step 3: Find the minimum in the rest of the array [22, 64]. The minimum is 22. Swap 25 with 22. Array after Step 3: [11, 12, 22, 25, 64]</li>
          <li>Step 4: The remaining unsorted portion is [64], which is already in order. Final sorted array: [11, 12, 22, 25, 64]</li>
        </ul>
      </div>

      <SSP />

      {/* Quiz Button */}
      <div className="quiz-button-container">
        <button className="btn-primary" onClick={goToQuiz}>Go to Selection Sort Quiz</button>
      </div>
    </div>
  );
};

export default SelectionSort;
