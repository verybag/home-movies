import React from 'react';
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi,
        nisi.
      </p>
      <Link to='/'>
        <button>Go Back</button>
      </Link>
    </div>
  );
}

export default Error;
