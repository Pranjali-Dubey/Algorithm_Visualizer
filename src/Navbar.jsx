import React from 'react';
import './Navbar.css';
import logo from './assets/images/Algorithm_Visualizer_logo.png'; 
export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="">
          <img src={logo} alt="Logo" className="navbar-logo" />
          Algorithm Visualizer
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="Home_page">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="About_us">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="sign-in">
                Sign Up
              </a>
            </li>
             <li className="nav-item">
              <a className="nav-link" href="feedback">
               Feedback
              </a>
            </li> 
            <li className="nav-item">
              <a className="nav-link" href="Notes_page">
                Notes & Problems
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Subjects
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="DSA">
                    Data Structures
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="DAA">
                    Design and Analysis of Algorithms
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="ML">
                    Machine Learning
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          {/* Search and Theme Switch */}
          <div className="d-flex align-items-center">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
