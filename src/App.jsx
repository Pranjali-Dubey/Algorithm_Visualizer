import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Navbar from './Navbar'; 
import Signin from './SignUp'
import DSA from './DSA';
import DAA from './DAA';
import ML from'./ML';
import SVM from './SVM.JSX';
import SVMQuiz from './SVMQuiz';
import LogisticRegression from './LogisticRegression';
import LogisticRegressionQuiz from './LogisticRegressionQuiz';
import AboutUs from './AboutUs';
import DecisionTree from './DecisionTree';
import DecisionTreeQuiz from './DecisionTreeQuiz';
import KMeans from './KMeans';
import KMeansQuiz from './KMeansQuiz';
import DivideConquer from './DivideConquer';
import BinarySearch from'./BinarySearch';
import BinarySearchQuiz from './BinarySearchQuiz';
import SelectionSort from './SelectionSort';
import SelectionSortQuiz from './SelectionSortQuiz';
import MergeSort from './MergeSort';
import MergeSortQuiz from './MergeSortQuiz'
import QuickSort from './QuickSort';
import QuickSortQuiz from './QuickSortQuiz';
import DynamicProgramming from './DynamicProgramming';
import GreedyAlgorithms from './GreedyAlgorithms';
import Backtracking from './Backtracking';
import Arrays from'./Arrays';
import Sorting from './Sorting';
import LinkedList from './LinkedList';
import StackQueue from'./StackQueue';
import TreeGraphs from './TreeGraphs';
import Pointer from './Pointer';
import LinearSearch from './LinearSearch';
import SlidingWindow from './SlidingWindow';
import PointerQuiz from './PointerQuiz';
import LinearSearchQuiz from './LinearSearchQuiz';
import SlidingWindowQuiz from './SlidingWindowQuiz';
import SortingQuiz from './SortingQuiz';
import ArraysQuiz from './ArraysQuiz'
import Login from './Login';
import LinkedListQuiz from'./LinkedListQuiz';
import StackQuiz from './StackQuiz';
import QueueQuiz from './QueueQuiz';
import TreesQuiz from './TreesQuiz';
import GraphsQuiz from './GraphsQuiz';
import NotesPage from './NotesPage';
import ReverseLinkedList from './ReverseLinkedList';
import DetectCycle from './DetectCycle'
import MergeTwoSortedList from './MergeTwoSortedList';
import RemoveDuplicates from './RemoveDuplicates';
import ReverseString from './ReverseString';
import BalancedParanthesis from  './BalancedParanthesis';
import EvaluatePostfixExpression from './EvaluatePostfixExpression'
import GenerateBinaryNumbers from './GenerateBinaryNumbers';
import StackWithQueue from './StackWithQueues';
import QueueReversal from './QueueReversal'
import Payments from './Payments';
// import ContentPage from '../Client/src/Components/contentPage';
// import Stripe from 'stripe';
import NotesProblems from './NotesProblems'
import Feedback from './Feedback'


export const App = () => {
  return (
    <Router>
      <div>
        {/* Navbar that stays on all pages */}
        <Navbar />
        

        {/* Sidebar that stays on all pages 
        <Sidebar />*/}

        {/* Define Routes to switch between pages */}
        <Routes>
          {/* Home Route */}
          <Route exact path="/Home_page" element={<Homepage />} />
          <Route exact path="/Notes_page" element={<NotesPage />} />
          <Route exact path="/DSA" element={<DSA/>} />
         <Route exact path="/DAA" element={<DAA/>} />
          <Route exact path="/About_us" element={<AboutUs />} />
   
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/ML" element={<ML />} />
          <Route exact path="/SVM" element={<SVM/>} />
          <Route exact path="/Logistic-Regression" element={<LogisticRegression/>} />
          <Route exact path="/Decision_Tree" element={<DecisionTree/>} />
          <Route exact path="/KMeans" element={<KMeans/>} />
          <Route exact path="/Binary_Search" element={<BinarySearch/>} />
          <Route exact path="/Selection_Sort" element={<SelectionSort/>} />
          <Route exact path="/Divide_Conquer" element={<DivideConquer/>} />
          <Route exact path="/Merge_Sort" element={<MergeSort/>} />
          <Route exact path="/Quick_Sort" element={<QuickSort/>} />
          <Route exact path="/Dynamic_Programming" element={<DynamicProgramming/>} />
          <Route exact path="/Greedy_Algorithms" element={<GreedyAlgorithms/>} />
          <Route exact path="/Backtracking" element={<Backtracking/>} />
          <Route exact path="/Arrays" element={<Arrays/>} />
          <Route exact path="/Linked_List" element={<LinkedList/>} />
          <Route exact path="/Stack_Queue" element={<StackQueue/>} />
          <Route exact path="/Tree_Graphs" element={<TreeGraphs/>} />
          <Route exact path="/Logistic-Regression-quiz" element={<LogisticRegressionQuiz/>} />
          <Route exact path="/Decision-Tree-quiz" element={<DecisionTreeQuiz/>} />
          <Route exact path="/K-Means-quiz" element={<KMeansQuiz/>} />
          <Route exact path="/SVM-quiz" element={<SVMQuiz/>} />
          <Route exact path="/Merge-Sort-quiz" element={<MergeSortQuiz/>} />
          <Route exact path="/Quick-Sort-quiz" element={<QuickSortQuiz/>} />
          <Route exact path="/Binary-Search-quiz" element={<BinarySearchQuiz/>} />
          <Route exact path="/Selection-Sort-quiz" element={<SelectionSortQuiz/>} />
          <Route exact path="/Sorting" element={<Sorting/>} />
          <Route exact path="/Pointer" element={<Pointer/>} />
          <Route exact path="/Linear_Search" element={<LinearSearch/>} />
          <Route exact path="/Sliding_Window" element={<SlidingWindow/>} />
          <Route exact path="/Sorting-quiz" element={<SortingQuiz/>} />
          <Route exact path="/Linear-Search-quiz" element={<LinearSearchQuiz/>} />
          <Route exact path="/Sliding-Window-quiz" element={<SlidingWindowQuiz/>} />
          <Route exact path="/Pointer-quiz" element={<PointerQuiz/>} />
          <Route exact path="/Arrays-quiz" element={<ArraysQuiz/>} />
          <Route exact path="/Linked-list-quiz" element={<LinkedListQuiz/>} />
          <Route exact path="/Stack-quiz" element={<StackQuiz/>} />
          <Route exact path="/Trees-quiz" element={<TreesQuiz/>} />
          <Route exact path="/Graphs-quiz" element={<GraphsQuiz/>} />
          <Route exact path="/Queue-quiz" element={<QueueQuiz/>} />
          <Route exact path="/sign-in" element={<Signin/>} />
          <Route exact path="/Reverse_Linked_List" element={<ReverseLinkedList/>} />
          <Route exact path="/Detect_Cycle" element={<DetectCycle/>} />
          <Route exact path="/Merge_Sorted_Lists" element={<MergeTwoSortedList/>} />
          <Route exact path="/Remove_Duplicates" element={<RemoveDuplicates/>} />
          <Route exact path="/Reverse_String" element={<ReverseString/>} />
          <Route exact path="/Balanced_Parenthesis" element={<BalancedParanthesis/>} />
          <Route exact path="/Evaluate_Postfix" element={<EvaluatePostfixExpression/>} />
          <Route exact path="/Generate_Binary_Numbers" element={<GenerateBinaryNumbers/>} />
          <Route exact path="/Stack_with_Queues" element={<StackWithQueue/>} />
          <Route exact path="/Queue_Reversal" element={<QueueReversal/>} />
         <Route exact path="/Payments" element={<Payments/>} />
          {/*  <Route exact path="/Content" element={<ContentPage/>} />
          <Route exact path="/stripe" element={<Stripe/>} /> */}
              <Route exact path="/Notes_Problems" element={<NotesProblems/>} />
              <Route exact path="/feedback" element={<Feedback/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;



