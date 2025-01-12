import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TreeGraphs.css';

const TreeGraph = () => {
  const navigate = useNavigate(); // Initialize navigate

  const goToQuizT = () => {
    navigate('/Trees-quiz'); // Navigate to the Tree quiz page
  };

  const goToQuizG = () => {
    navigate('/Graphs-quiz'); // Navigate to the Graph quiz page
  };

  return (
    <div className="tree-graph-container">
      
      {/* Merged Hero Section */}
      <section className="tree-graph-hero-section">
        <div className="tree-graph-hero-content">
          <h1>Explore Tree & Graph Concepts</h1>
          <p>
            Dive into Trees and Graphs, essential data structures for representing hierarchical and networked data.
          </p>
          <a href="#concept-details" className="cta-btn">Explore Algorithms</a>
        </div>
      </section>

      {/* Tree Section */}
      <section id="concept-details" className="concept-info-section">
        <div className="concept-info-card">
          <h2>What is a Tree?</h2>
          <p>Trees are hierarchical structures with nodes connected by edges, useful for representing hierarchical data like file systems and organizational structures.</p>
          <ul className="concept-steps">
            <li><strong>Root:</strong> The topmost node in a tree.</li>
            <li><strong>Child:</strong> A node that descends from another node.</li>
            <li><strong>Leaf:</strong> A node with no children.</li>
          </ul>
          <div className="quiz-button-container">
            <button className="btn-primary" onClick={goToQuizT}>Go to Trees Quiz</button>
          </div>
        </div>

        <div id="tree-algorithms" className="algorithm-section">
          <h3>Tree Algorithms</h3>
          <div className="algorithm-cards">
            <div className="algorithm-card">
              <h4>Binary Search Tree (BST) Insertion</h4>
              <p>Insert elements into a BST to maintain sorted order for efficient searching.</p>
              <a href="/BST_Insertion" className="learn-more-btn">Learn More</a>
            </div>
            <div className="algorithm-card">
              <h4>Tree Traversals</h4>
              <p>Visit nodes in Preorder, Inorder, and Postorder sequences.</p>
              <a href="/Tree_Traversals" className="learn-more-btn">Learn More</a>
            </div>
            <div className="algorithm-card">
              <h4>Lowest Common Ancestor</h4>
              <p>Find the common ancestor of two nodes in a tree.</p>
              <a href="/Lowest_Common_Ancestor" className="learn-more-btn">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Graph Section */}
      <section className="concept-info-section">
        <div className="concept-info-card">
          <h2>Understanding Graphs</h2>
          <p>Graphs consist of nodes (vertices) connected by edges, commonly used to model networks like social connections or transport routes.</p>
          <ul className="concept-steps">
            <li><strong>Vertex:</strong> A node in the graph.</li>
            <li><strong>Edge:</strong> A connection between two vertices.</li>
            <li><strong>Path:</strong> A sequence of edges connecting vertices.</li>
          </ul>
          <div className="quiz-button-container">
            <button className="btn-primary" onClick={goToQuizG}>Go to Graphs Quiz</button>
          </div>
        </div>

        <div id="graph-algorithms" className="algorithm-section">
          <h3>Graph Algorithms</h3>
          <div className="algorithm-cards">
            <div className="algorithm-card">
              <h4>Breadth-First Search (BFS)</h4>
              <p>Traverse the graph level by level, ideal for shortest path problems.</p>
              <a href="/BFS" className="learn-more-btn">Learn More</a>
            </div>
            <div className="algorithm-card">
              <h4>Depth-First Search (DFS)</h4>
              <p>Explore as far as possible along each branch before backtracking.</p>
              <a href="/DFS" className="learn-more-btn">Learn More</a>
            </div>
            <div className="algorithm-card">
              <h4>Dijkstra's Algorithm</h4>
              <p>Find the shortest path between nodes in a weighted graph.</p>
              <a href="/Dijkstra" className="learn-more-btn">Learn More</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TreeGraph;
