import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MergeTwoSortedList.css';  // External CSS for styling

const MergeSortedLists = () => {
  const navigate = useNavigate();

  const goToQuiz = () => {
    navigate('/Merge-Sorted-Lists-quiz');
  };

  return (
    <div className="merge-sorted-lists-page">
      {/* Container for Heading and Information */}
      <div className="info-container">
        <h1 className="page-title">Merge Two Sorted Lists Algorithm</h1>

        {/* Text Section with Bullet Points */}
        <div className="text-section">
          <h2>What is Merge Two Sorted Lists?</h2>
          <ul>
            <li>Merge Two Sorted Lists is a common problem where you are given two sorted linked lists, and the task is to merge them into a single sorted list.</li>
            <li>The algorithm should ensure that the final list maintains the sorting order of both input lists.</li>
            <li>This problem is commonly used in problems related to merging or combining data from multiple sources.</li>
          </ul>
          <h2>Uses:</h2>
          <ul>
            <li>Combining two sorted datasets into a single sorted dataset.</li>
            <li>Used in sorting algorithms like Merge Sort to merge the divided halves back together.</li>
            <li>Applications in database management and handling sorted data efficiently.</li>
          </ul>
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="additional-info">
        <h2>Time Complexity:</h2>
        <ul>
          <li>Best Case: O(n) — when both lists have the same length and merge quickly.</li>
          <li>Average Case: O(n) — iterating through both lists until one of them is completely merged.</li>
          <li>Worst Case: O(n) — when all elements from both lists are merged.</li>
        </ul>
        <h2>Space Complexity:</h2>
        <ul>
          <li>O(1) — since the merge happens in-place, no additional space is required aside from the result list.</li>
        </ul>
      </div>

      {/* Pseudocode Section */}
      <div className="additional-info">
        <h2>Merge Two Sorted Lists Pseudocode:</h2>
        <pre>
{`function mergeTwoLists(list1, list2):
    if list1 is empty:
        return list2
    if list2 is empty:
        return list1
    if list1[0] <= list2[0]:
        return [list1[0]] + mergeTwoLists(list1[1:], list2)
    else:
        return [list2[0]] + mergeTwoLists(list1, list2[1:])`}
        </pre>
      </div>

      {/* Example Section */}
      <div className="additional-info">
        <h2>Example:</h2>
        <p>
          Given two sorted linked lists:<br />
          <strong>List 1:</strong> 1 → 3 → 5 → 7<br />
          <strong>List 2:</strong> 2 → 4 → 6 → 8<br />
        </p>
        <ul>
          <li>Step 1: Compare the first elements of both lists (1 and 2). Since 1 &lt;= 2, add 1 to the result list.</li>
          <li>Step 2: Compare the next element from List 1 (3) with the current element from List 2 (2). Since 2 &lt;= 3, add 2 to the result list.</li>
          <li>Step 3: Continue comparing and adding elements in order until both lists are exhausted.</li>
        </ul>
        <strong>Resulting Merged List:</strong> 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8
      </div>

      {/* Quiz Button */}
      <div className="quiz-button-container">
        <button className="btn-primary" onClick={goToQuiz}>Go to Merge Sorted Lists Quiz</button>
      </div>
    </div>
  );
};

export default MergeSortedLists;
