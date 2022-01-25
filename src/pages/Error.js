import React from 'react';
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div>
      <p>Something's not right here!</p>
      <Link to='/'>
        <button>Go Back</button>
      </Link>
    </div>
  );
}

export default Error;
