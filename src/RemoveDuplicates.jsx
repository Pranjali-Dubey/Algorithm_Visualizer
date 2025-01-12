import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RemoveDuplicates.css';  // External CSS for styling

const RemoveDuplicates = () => {
  const navigate = useNavigate();

  const goToQuiz = () => {
    navigate('/Remove-Duplicates-quiz');
  };

  return (
    <div className="remove-duplicates-page">
      {/* Container for Heading and Information */}
      <div className="info-container">
        <h1 className="page-title">Remove Duplicates from Sorted List Algorithm</h1>

        {/* Text Section with Bullet Points */}
        <div className="text-section">
          <h2>What is Remove Duplicates from Sorted List?</h2>
          <ul>
            <li>Remove Duplicates from Sorted List is a problem where you are given a sorted linked list, and the task is to remove any duplicate elements from it.</li>
            <li>Since the list is sorted, duplicates will always appear next to each other, making it easier to identify and remove them.</li>
            <li>The result is a list with all the duplicates removed, leaving only unique values.</li>
          </ul>
          <h2>Uses:</h2>
          <ul>
            <li>Data cleanup, where duplicates need to be removed from a dataset.</li>
            <li>Often used in cases where data needs to be processed or inserted into a collection while maintaining uniqueness.</li>
            <li>Helpful in reducing data redundancy in applications like databases or data analysis tasks.</li>
          </ul>
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="additional-info">
        <h2>Time Complexity:</h2>
        <ul>
          <li>Best Case: O(n) — when there are no duplicates or all duplicates are consecutive.</li>
          <li>Average Case: O(n) — as you iterate through the entire list to remove duplicates.</li>
          <li>Worst Case: O(n) — in the worst case, every element may need to be checked to identify duplicates.</li>
        </ul>
        <h2>Space Complexity:</h2>
        <ul>
          <li>O(1) — since the algorithm can be done in-place, without requiring extra space aside from pointers.</li>
        </ul>
      </div>

      {/* Pseudocode Section */}
      <div className="additional-info">
        <h2>Remove Duplicates Pseudocode:</h2>
        <pre>
{`function removeDuplicates(head):
    if head is None:
        return None
    current = head
    while current is not None and current.next is not None:
        if current.value == current.next.value:
            current.next = current.next.next  // Skip duplicate node
        else:
            current = current.next
    return head`}
        </pre>
      </div>

      {/* Example Section */}
      <div className="additional-info">
        <h2>Example:</h2>
        <p>
          Given a sorted linked list:<br />
          <strong>List:</strong> 1 → 1 → 2 → 3 → 3 → 4 → 5<br />
        </p>
        <ul>
          <li>Step 1: Start at the first element (1). Compare it with the next element (1). Since they are equal, skip the next node.</li>
          <li>Step 2: Move to the next distinct element (2). Compare it with the next element (3), and since they are different, move on.</li>
          <li>Step 3: Continue through the list, skipping duplicates.</li>
        </ul>
        <strong>Resulting List:</strong> 1 → 2 → 3 → 4 → 5
      </div>

      {/* Quiz Button */}
      <div className="quiz-button-container">
        <button className="btn-primary" onClick={goToQuiz}>Go to Remove Duplicates Quiz</button>
      </div>
    </div>
  );
};

export default RemoveDuplicates;
