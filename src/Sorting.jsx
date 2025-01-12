import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Sorting.css';  // External CSS for styling
//import IS_V from './assets/videos/insertion_sort.mp4';
//import ISP from './ISP';

const InsertionSort = () => {
  const navigate = useNavigate();

  const goToQuiz = () => {
    navigate('/Sorting-quiz');
  };

  return (
    <div className="insertion-sort-page">
      {/* Container for Heading and Information */}
      <div className="info-container">
        <h1 className="page-title">Insertion Sort Algorithm</h1>

        {/* Text Section with Bullet Points */}
        <div className="text-section">
          <h2>What is Insertion Sort?</h2>
          <ul>
            <li>Insertion sort is a simple sorting algorithm that builds the sorted array one element at a time.</li>
            <li>It works similarly to the way you might sort playing cards in your hands.</li>
          </ul>
          <h2>Uses:</h2>
          <ul>
            <li>Small datasets: Insertion sort is efficient for small datasets.</li>
            <li>Adaptive sorting: It performs well when the list is nearly sorted.</li>
            <li>Real-time applications: Insertion sort can be used for streaming data or continuous data where insertion order matters.</li>
          </ul>
        </div>
      </div>

      {/* Video Section */}
      {/* <div className="video-section">
        <video width="700" height="400" controls>
          <source src={IS_V} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> */}

      {/* Link to Download the Video */}
      {/* <div className="download-section">
        <a 
          href={IS_V} 
          download="Insertion Sort Tutorial.mp4"
          className="download-link"
        >
          Download Insertion Sort Video
        </a>
      </div> */}

      {/* Additional Information Section */}
      <div className="additional-info">
        <h2>Time Complexity:</h2>
        <ul>
          <li>Best Case: O(n) — when the array is already sorted.</li>
          <li>Average Case: O(n²) — when the array is unsorted.</li>
          <li>Worst Case: O(n²) — when the array is in reverse order.</li>
        </ul>
        <h2>Space Complexity:</h2>
        <ul>
          <li>O(1) — Insertion sort is an in-place sorting algorithm.</li>
        </ul>
      </div>

      {/* Pseudocode Section */}
      <div className="additional-info">
        <h2>Insertion Sort Pseudocode:</h2>
        <pre>
{`function insertionSort(array):
    for i ← 1 to length(array) - 1:
        key ← array[i]
        j ← i - 1
        while j ≥ 0 and array[j] > key:
            array[j + 1] ← array[j]
            j ← j - 1
        array[j + 1] ← key`}
        </pre>
      </div>

      {/* Example Section */}
      <div className="additional-info">
        <h2>Example:</h2>
        <p>
          Given the unsorted array [5, 2, 9, 1, 5, 6]:<br />
          <strong>Initial array:</strong> [5, 2, 9, 1, 5, 6]<br />
        </p>
        <ul>
          <li>Step 1: Initial element 5, key = 2. Insert 2 before 5: [2, 5, 9, 1, 5, 6]</li>
          <li>Step 2: Next element 9, key = 9. No change: [2, 5, 9, 1, 5, 6]</li>
          <li>Step 3: Next element 1, key = 1. Insert 1 before 2: [1, 2, 5, 9, 5, 6]</li>
          <li>Step 4: Next element 5, key = 5. No change: [1, 2, 5, 5, 9, 6]</li>
          <li>Step 5: Next element 6, key = 6. Insert 6 before 9: [1, 2, 5, 5, 6, 9]</li>
          <li>Sorted array: [1, 2, 5, 5, 6, 9]</li>
        </ul>
      </div>

      {/* Additional Component */}
      

      {/* Quiz Button */}
      <div className="quiz-button-container">
        <button className="btn-primary" onClick={goToQuiz}>Go to Insertion Sort Quiz</button>
      </div>
    </div>
  );
};

export default InsertionSort;
