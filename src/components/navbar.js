import React from 'react';
import { Link } from 'react-router-dom';

function navbar() {
  return (
    <nav className='navbar'>
      <div>
        <ul>
          <Link to='/home-movies' style={{ textDecoration: 'none' }}>
            <li className='link'>Home</li>
          </Link>
          <Link to='/about' style={{ textDecoration: 'none' }}>
            <li className='link'>Why?</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default navbar;
