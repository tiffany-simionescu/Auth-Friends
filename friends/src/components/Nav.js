import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="nav">
      <Link to="/login" className="link">Log in</Link>
      <Link to="/friendlist" className="link">Friend List</Link>
    </div>
  )
}

export default Nav;