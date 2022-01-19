import React from 'react';
import Search from '../components/Search';
import data from '../components/data';

function Home() {
  return (
    <div className="home-container">
      <Search details={data} />
    </div>
  );
}

export default Home;
