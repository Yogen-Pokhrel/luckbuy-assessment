import React, { useState } from 'react'
import {Nav} from "react-bootstrap";
import userImage from "assets/images/user.png";
import ReactDOM from 'react-dom';

const Head = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const toggleDropdownMenu = () => {
    setToggleDropdown(!toggleDropdown);
    if(!toggleDropdown){
      document.addEventListener('click', handleClickOutside, true);
    }else{
      clearEventListener();
    }
  }

  const handleClickOutside = event => {
    const domNode = ReactDOM.findDOMNode(document.getElementById("dropdown-menu-home"));
    const domNodeToggler = ReactDOM.findDOMNode(document.getElementById("dropdown-toggler"));

    if ((!domNode || !domNode.contains(event.target)) && (!domNodeToggler || !domNodeToggler.contains(event.target))) {
      setToggleDropdown(false);
      clearEventListener();
    }
}

const clearEventListener = () => {
  document.removeEventListener('click', handleClickOutside, true);
}

  return (
    <header className="header header-fixed">
      <div className="w-max-1400">
      <Nav className=" justify-content-end">
        <Nav.Item>
          <Nav.Link href="/" className="font-size-sm text-dark nav-color "><i className="bi bi-house-door"></i> Home </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#" className="font-size-sm text-dark relative" >
            <div id="dropdown-toggler" className="nav-color" onClick={toggleDropdownMenu}><img className="img-fluid profile-image me-2" alt="User" src={userImage}  /> Abdul Nasar <i className="bi bi-caret-down-fill"></i></div>
            <div className={`dropdown-custom-wrapper `+ ((toggleDropdown === true) ? 'visible' : '')} id="dropdown-menu-home">
              <div className="dropdown-inner">
                <ul className="dropdown-list">
                  <li className="dropdown-item">Your Profile</li>
                  <li className="dropdown-item">Your Address</li>
                  <li className="dropdown-item">Your Files</li>
                  <li className="dropdown-item">Logout</li>
                </ul>
              </div>
            </div>
          </Nav.Link>
        </Nav.Item>
      </Nav>
      </div>
    </header>
  )
}

export default Head
