import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LinearSearch.css';  // External CSS for styling

const LinearSearch = () => {
  const navigate = useNavigate();

  const goToQuiz = () => {
    navigate('/Linear-Search-quiz');
  };

  return (
    <div className="linear-search-page">
      {/* Container for Heading and Information */}
      <div className="info-container">
        <h1 className="page-title">Linear Search Algorithm</h1>

        {/* Text Section with Bullet Points */}
        <div className="text-section">
          <h2>What is Linear Search?</h2>
          <ul>
            <li>Linear search is the simplest search algorithm. It checks every element of the array sequentially until the target element is found or all elements are checked.</li>
            <li>It is an unoptimized search approach, which makes it slow for large datasets but easy to implement.</li>
          </ul>
          <h2>Uses:</h2>
          <ul>
            <li>When the dataset is small: Linear search can be effective for small arrays or lists.</li>
            <li>Unsorted data: It works even if the array is not sorted, unlike binary search.</li>
            <li>When simplicity is a priority: Linear search is straightforward and doesn’t require any advanced algorithms or complex logic.</li>
          </ul>
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="additional-info">
        <h2>Time Complexity:</h2>
        <ul>
          <li>Best Case: O(1) — when the element is found at the first index.</li>
          <li>Average Case: O(n) — when the element is somewhere in the middle of the array.</li>
          <li>Worst Case: O(n) — when the element is not found or is at the last index.</li>
        </ul>
        <h2>Space Complexity:</h2>
        <ul>
          <li>O(1) — Linear search is an in-place search algorithm, requiring no extra space.</li>
        </ul>
      </div>

      {/* Pseudocode Section */}
      <div className="additional-info">
        <h2>Linear Search Pseudocode:</h2>
        <pre>
{`function linearSearch(array, target):
    for i ← 0 to length(array) - 1:
        if array[i] == target:
            return i  // Target found at index i
    return -1  // Target not found`}
        </pre>
      </div>

      {/* Example Section */}
      <div className="additional-info">
        <h2>Example:</h2>
        <p>
          Given the array [10, 20, 30, 40, 50] and the search key 30:<br />
          <strong>Initial array:</strong> [10, 20, 30, 40, 50]<br />
          <strong>Search key:</strong> 30<br />
        </p>
        <ul>
          <li>Step 1: Start at index 0, element = 10. 10 is not 30, continue to next element.</li>
          <li>Step 2: At index 1, element = 20. 20 is not 30, continue to next element.</li>
          <li>Step 3: At index 2, element = 30. 30 is the target, return index 2.</li>
        </ul>
        <strong>Target found at index 2</strong>
      </div>

      {/* Quiz Button */}
      <div className="quiz-button-container">
        <button className="btn-primary" onClick={goToQuiz}>Go to Linear Search Quiz</button>
      </div>
    </div>
  );
};

export default LinearSearch;
