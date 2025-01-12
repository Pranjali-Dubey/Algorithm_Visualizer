import React, { useState } from 'react';
import './NotesProblems.css';
import { useNavigate } from 'react-router-dom';

const NotesPage = () => {

  const navigate = useNavigate();
  const notesData = [
    { title: "Arrays", topic: "Linear search, Insertion sort, Two pointer technique, Sliding window", pdf: "/pdfs/Arrays.pdf" },
    { title: "Linked list", topic: "Reverse linked list, Detect Cycle, Merge two sorted lists, Remove duplicates", pdf: "/pdfs/Liked_list.pdf" },
    { title: "Stack", topic: "Stack: Reverse string, Balanced parentheses, Evaluate postfix expression", pdf: "/pdfs/Stack.pdf" },
    { title: "Queue", topic: "Queue: Generate binary numbers, Implement stack with queues, Queue reversal" , pdf: "/pdfs/Queues.pdf"},
    { title: "Graph", topic: "Graph: BFS, DFS, Dijkstra's algorithm", pdf: "/pdfs/Graphs.pdf" },
    { title: "Tree", topic: "Tree: BST, Tree traversals, Lowest common ancestor", pdf: "/pdfs/Tree.pdf" },
    { title: "Divide & Conquer", topic: "Binary search, Merge Sort, Quick Sort & Selection sort" , pdf: "/pdfs/Divide and Conquer.pdf"},
    { title: "Greedy Algorithms", topic: "Activity selection, Fractional knapsack, Huffman Coding, Prim's algorithm", pdf: "/pdfs/Stack.pdf" },
    { title: "Dynamic Programming", topic: "Fibonacci sequence, Knapsack problem, Longest common subsequence, Matrix chain multiplication", pdf: "/pdfs/Stack.pdf" },
    { title: "Backtracking", topic: "N-Queens problem, Sudoku solver, Subset generation, Hamiltonian path", pdf: "/pdfs/Stack.pdf" },
    { title: "Logistic Regression", topic: "Introduction to Logistic Regression" , pdf: "/pdfs/Stack.pdf"},
    { title: "Decision Trees", topic: "Introduction to Decision Trees", pdf: "/pdfs/Stack.pdf" },
    { title: "Support Vector Machine", topic: "Introduction to Support Vector Machine", pdf: "/pdfs/Stack.pdf" },
    { title: "Naive Bayes algorithm", topic: "Introduction to Naive Bayes algorithm", pdf: "/pdfs/Stack.pdf" },
    { title: "K-Means Clustering", topic: "Introduction to K-Means Clustering", pdf: "/pdfs/Stack.pdf" },
  ];

  const problemsData = [
    { title: "Array Problems", pdf: "/pdfs/Problems on Arrays.pdf" },
    { title: "Linked list Problems", pdf: "/pdfs/Problems on Linked List.pdf" },
    { title: "Stack Problems" , pdf: "/pdfs/Problems on Stacks.pdf"},
    { title: "Queue Problems" , pdf: "/pdfs/Problems on Queue.pdf"},
    { title: "Graph Problems" , pdf: "/pdfs/Problems on Graph.pdf"},
    { title: "Tree Problems", pdf: "/pdfs/Problems on Tree.pdf" },
    { title: "Divide & Conquer Problems" },
    { title: "Greedy Algorithms Problems" },
    { title: "Dynamic Programming Problems" },
    { title: "Backtracking Problems" },
    { title: "Logistic Regression Problems" },
    { title: "Decision Trees Problems" },
    { title: "Support Vector Machine Problems" },    
    { title: "Naive Bayes algorithm" },    
    { title: "K-Means Clustering Problems" },
  ];

  const handleDownload = (item) => {
    const link = document.createElement('a');
    link.href = item.pdf;
    link.download = `${item.title}.pdf`;
    link.click();
  };

 
  return (
    <div className="notes-page">
        <h1 className="headline">Get your notes here!</h1>
        <div className="section">
          <h2 className="row-heading">Notes</h2>
          <div className="container">
            {notesData.map((note, index) => (
              <div className="box" key={index} onClick={() => handleDownload(note)}>
                <div className="title">{note.title}</div>
                <div className="topic">{note.topic}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="section">
          <h2 className="row-heading">Problems</h2>
          <div className="container">
            {problemsData.map((problem, index) => (
              <div className="box" key={index} onClick={() => handleDownload(problem)}>
                <div className="title">{problem.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

  );
};

export default NotesPage;
