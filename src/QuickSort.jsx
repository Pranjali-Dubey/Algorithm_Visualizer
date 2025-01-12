import React from 'react';
import { useNavigate } from 'react-router-dom';
import './QuickSort.css';

const QuickSort = () => {
  const navigate = useNavigate();

  const goToQuiz = () => {
    navigate('/Quick-Sort-quiz');
  };

  return (
    <div className="quick-sort-page">
      {/* Container for Heading and Information */}
      <div className="info-container">
        <h1 className="page-title">Quick Sort Algorithm</h1>

        <div className="text-section">
          <h2>What is Quick Sort?</h2>
          <ul>
            <li>Quick Sort is a divide-and-conquer algorithm that selects a 'pivot' element and partitions the array around the pivot, placing smaller elements before it and larger elements after it. The process is then repeated recursively for each partition.</li>
          </ul>
          <h2>Uses:</h2>
          <ul>
            <li>Sorting large datasets: Quick Sort is efficient for large datasets and works well with in-memory sorting.</li>
            <li>General-purpose sorting: Due to its average-case performance of O(n log n), Quick Sort is commonly used in general-purpose sorting applications.</li>
            <li>Efficient with random data: When applied to randomly ordered data, Quick Sort performs efficiently.</li>
            <li>Common in libraries: Quick Sort, or its variations, is widely used in standard libraries due to its efficiency.</li>
          </ul>
        </div>
      </div>

      {/* Complexity Section */}
      <div className="additional-info">
        <h2>Time Complexity:</h2>
        <ul>
          <li>Best Case: O(n log n)</li>
          <li>Average Case: O(n log n)</li>
          <li>Worst Case: O(n²) (occurs when the pivot selection consistently results in highly unbalanced partitions)</li>
        </ul>
        <h2>Space Complexity:</h2>
        <ul>
          <li>O(log n) (for the recursive stack space in the average case)</li>
        </ul>
      </div>

      {/* Pseudocode Section */}
      <div className="additional-info">
        <h2>Quick Sort Pseudocode:</h2>
        <pre>
{`function quickSort(array, low, high):
    if low < high:
        pivotIndex = partition(array, low, high)
        quickSort(array, low, pivotIndex - 1)
        quickSort(array, pivotIndex + 1, high)

function partition(array, low, high):
    pivot = array[high]
    i = low - 1
    for j from low to high - 1:
        if array[j] < pivot:
            i += 1
            swap(array[i], array[j])
    swap(array[i + 1], array[high])
    return i + 1`}
        </pre>
      </div>

      {/* Example Section */}
      <div className="additional-info">
        <h2>Example:</h2>
        <p>Given the array [10, 7, 8, 9, 1, 5]:</p>
        <ul>
          <li>Step 1: Choose the last element as pivot (5).</li>
          <li>Step 2: Partition the array around the pivot to get [1, 5, 10, 7, 8, 9]. Now, 5 is in its correct position.</li>
          <li>Step 3: Recursively apply Quick Sort on the left subarray [1] and the right subarray [10, 7, 8, 9].</li>
          <li>Step 4: Continue this process until the entire array is sorted: [1, 5, 7, 8, 9, 10].</li>
        </ul>
      </div>

      {/* Quiz Button */}
      <div className="quiz-button-container">
        <button className="btn-primary" onClick={goToQuiz}>Go to Quick Sort Quiz</button>
      </div>
    </div>
  );
};

export default QuickSort;
