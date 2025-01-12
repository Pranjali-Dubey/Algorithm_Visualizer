import React, { useState } from 'react';
import './SSP.css';

const CodeToggle = () => {
  // State to track the active language tab
  const [activeLanguage, setActiveLanguage] = useState('c');

  // C and C++ code examples
  const cCode = `
#include <stdio.h>

// function to swap the the position of two elements
void swap(int *a, int *b) {
  int temp = *a;
  *a = *b;
  *b = temp;
}

void selectionSort(int array[], int size) {
  for (int step = 0; step < size - 1; step++) {
    int min_idx = step;
    for (int i = step + 1; i < size; i++) {

      // To sort in descending order, change > to < in this line.
      // Select the minimum element in each loop.
      if (array[i] < array[min_idx])
        min_idx = i;
    }

    // put min at the correct position
    swap(&array[min_idx], &array[step]);
  }
}

// function to print an array
void printArray(int array[], int size) {
  for (int i = 0; i < size; ++i) {
    printf("%d  ", array[i]);
  }
  printf("\n");
}

// driver code
int main() {
  int data[] = {20, 12, 10, 15, 2};
  int size = sizeof(data) / sizeof(data[0]);
  selectionSort(data, size);
  printf("Sorted array in Acsending Order:\n");
  printArray(data, size);
}
Output: Sorted array in Acsending Order:
2  10  12  15  20  

`;

  const cppCode = `
#include <iostream>
using namespace std;

// function to swap the the position of two elements
void swap(int *a, int *b) {
  int temp = *a;
  *a = *b;
  *b = temp;
}

// function to print an array
void printArray(int array[], int size) {
  for (int i = 0; i < size; i++) {
    cout << array[i] << " ";
  }
  cout << endl;
}

void selectionSort(int array[], int size) {
  for (int step = 0; step < size - 1; step++) {
    int min_idx = step;
    for (int i = step + 1; i < size; i++) {

      // To sort in descending order, change > to < in this line.
      // Select the minimum element in each loop.
      if (array[i] < array[min_idx])
        min_idx = i;
    }

    // put min at the correct position
    swap(&array[min_idx], &array[step]);
  }
}

// driver code
int main() {
  int data[] = {20, 12, 10, 15, 2};
  int size = sizeof(data) / sizeof(data[0]);
  selectionSort(data, size);
  cout << "Sorted array in Acsending Order:\n";
  printArray(data, size);
}
Output: Sorted array in Acsending Order:
2 10 12 15 20
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
