import React from 'react';

import { Link } from 'react-router-dom';

import './Navbar.scss';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to="/" className='logo'>THE WORX</Link>
      <div className='links'>
        <Link to='/'>Home</Link>
        <Link to='/'>Services</Link>
        <Link to='/'>Schedule</Link>
        <Link to='/'>Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;