import React, { useState } from 'react';
import './BSP.css';

const CodeToggle = () => {
  // State to track the active language tab
  const [activeLanguage, setActiveLanguage] = useState('c');

  // C and C++ code examples
  const cCode = `
#include <stdio.h>

// An iterative binary search function.
int binarySearch(int arr[], int low, int high, int x)
{
    while (low <= high) {
        int mid = low + (high - low) / 2;

        // Check if x is present at mid
        if (arr[mid] == x)
            return mid;

        // If x greater, ignore left half
        if (arr[mid] < x)
            low = mid + 1;

        // If x is smaller, ignore right half
        else
            high = mid - 1;
    }

    // If we reach here, then element was not present
    return -1;
}

// Driver code
int main(void)
{
    int arr[] = { 2, 3, 4, 10, 40 };
    int n = sizeof(arr) / sizeof(arr[0]);
    int x = 10;
    int result = binarySearch(arr, 0, n - 1, x);
   if(result == -1) printf("Element is not present in array");
   else printf("Element is present at index %d",result);

}
Output: Element is present at index 3
`;

  const cppCode = `
#include <bits/stdc++.h>
using namespace std;

// An iterative binary search function.
int binarySearch(int arr[], int low, int high, int x)
{
    while (low <= high) {
        int mid = low + (high - low) / 2;

        // Check if x is present at mid
        if (arr[mid] == x)
            return mid;

        // If x greater, ignore left half
        if (arr[mid] < x)
            low = mid + 1;

        // If x is smaller, ignore right half
        else
            high = mid - 1;
    }

    // If we reach here, then element was not present
    return -1;
}

// Driver code
int main(void)
{
    int arr[] = { 2, 3, 4, 10, 40 };
    int x = 10;
    int n = sizeof(arr) / sizeof(arr[0]);
    int result = binarySearch(arr, 0, n - 1, x);
    if(result == -1) cout << "Element is not present in array";
    else cout << "Element is present at index " << result;
    return 0;
}
Output: Element is present at index 3
`;

  return (
    <div className="code-toggle-container">
      <div className="code-header">
        {/* Language switcher buttons inside the code container */}
        <div className="language-tabs">
          <button
            className={`tab ${activeLanguage === 'c' ? 'active' : ''}`}
            onClick={() => setActiveLanguage('c')}
          >
            C {/* Adding a symbol to indicate code */}
          </button>
          <button
            className={`tab ${activeLanguage === 'cpp' ? 'active' : ''}`}
            onClick={() => setActiveLanguage('cpp')}
          >
            C++  {/* Adding a symbol to indicate code */}
          </button>
        </div>
      </div>

      <div className="code-content">
        {/* Conditionally render code based on the selected language */}
        {activeLanguage === 'c' ? (
          <pre className="code-box">
            <code>{cCode}</code>
          </pre>
        ) : (
          <pre className="code-box">
            <code>{cppCode}</code>
          </pre>
        )}
      </div>
    </div>
  );
};

export default CodeToggle;
