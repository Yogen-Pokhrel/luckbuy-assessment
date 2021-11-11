import React from 'react'
import {Nav} from "react-bootstrap";
// import userImage from "Assets/user.png";

const Head = () => {
  return (
    <header className="header header-fixed">
      <div className="w-max-1400">
      <Nav className=" justify-content-end">
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/userdata">Abdul Nasar</Nav.Link>
        </Nav.Item>
      </Nav>
      </div>
    </header>
  )
}

export default Head
