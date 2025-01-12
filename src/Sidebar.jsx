/*import React, { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const hamburgerStyle = {
    position: 'absolute',
    top: '0px',
    left: '0px',
    cursor: 'pointer',
    backgroundColor: 'skyblue',
    fontSize: '39px'
  };
  
  const CloseStyle = {

  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div style={hamburgerStyle} onClick={toggleSidebar}>
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
          </svg>
        )}
      </div>
      <div style={{
        position: 'fixed',
        top: 50,
        left: 0,
        width: '250px',
        height: '100vh',
        backgroundColor: 'skyblue ',
        color: 'black',
        padding: '20px',
        transition: 'all 0.3s ease-in-out',
        transform: isOpen ? 'translateX(0)' : 'translateX(-250px)'
      }}>
        {/*<div style={CloseStyle} onClick={closeSidebar}>
        <svg xmlns="http://www.w3.org/2000/svg"  width="20" height="30"  fill="currentColor" className="bi bi-x-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg>
</div>
        <ul>
          
          <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Array
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
          <li><a href="#">Linked List</a></li>

          
  
          <ul>
              <li><a href="#">Option 1</a></li>
              <li><a href="#">Option 2</a></li>
              <li><a href="#">Option 3</a></li>
            </ul>
          <li><a href="#">Searching</a></li>
          <ul>
              <li><a href="#">Option 1</a></li>
              <li><a href="#">Option 2</a></li>
              <li><a href="#">Option 3</a></li>
            </ul>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;*/

import React, { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const hamburgerStyle = {
    position: 'absolute',
    top: 'px',
     width:'30',
     height:'62px',
    left: '3px',
    cursor: 'pointer',
    backgroundColor: 'skyblue',
    fontSize: '29px',
    padding: '10px',
    borderRadius: '5px',
    zIndex: '1000',
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Hamburger Icon */}
      <div style={hamburgerStyle} onClick={toggleSidebar}>
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-x"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        )}
      </div>

      {/* Sidebar */}
      <div
        style={{
          position: 'fixed',
          top: '60px',
          left: '0',
          width: '250px',
          height: '100vh',
          backgroundColor: '#87CEEB',
          color: 'black',
          padding: '20px',
          transition: 'all 0.3s ease-in-out',
          transform: isOpen ? 'translateX(0)' : 'translateX(-250px)',
          zIndex: '999',
          boxShadow: '2px 0 5px rgba(0, 0, 0, 0.2)',
        }}
      >
        <ul style={{ listStyle: 'none', padding: '0' }}>
          <li style={{ marginBottom: '20px' }}>
            <a
              href="#"
              style={{
                textDecoration: 'none',
                color: 'black',
                fontSize: '18px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <i
                className="bi bi-caret-right-fill"
                style={{ marginRight: '10px' }}
              ></i>
              Array
            </a>
            <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '10px' }}>
                <a
                  href="#"
                  style={{
                    textDecoration: 'none',
                    color: 'black',
                    fontSize: '16px',
                  }}
                >
                  Action
                </a>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <a
                  href="#"
                  style={{
                    textDecoration: 'none',
                    color: 'black',
                    fontSize: '16px',
                  }}
                >
                  Another action
                </a>
              </li>
            </ul>
          </li>

          <li style={{ marginBottom: '20px' }}>
            <a
              href="#"
              style={{
                textDecoration: 'none',
                color: 'black',
                fontSize: '18px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <i
                className="bi bi-caret-right-fill"
                style={{ marginRight: '10px' }}
              ></i>
              Linked List
            </a>
          </li>

          <li style={{ marginBottom: '20px' }}>
            <a
              href="#"
              style={{
                textDecoration: 'none',
                color: 'black',
                fontSize: '18px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <i
                className="bi bi-caret-right-fill"
                style={{ marginRight: '10px' }}
              ></i>
              Searching
            </a>
            <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '10px' }}>
                <a
                  href="#"
                  style={{
                    textDecoration: 'none',
                    color: 'black',
                    fontSize: '16px',
                  }}
                >
                  Option 1
                </a>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <a
                  href="#"
                  style={{
                    textDecoration: 'none',
                    color: 'black',
                    fontSize: '16px',
                  }}
                >
                  Option 2
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;