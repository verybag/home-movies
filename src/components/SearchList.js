//SEARCH RESULTS //

import React from 'react';
import Card from './Card';
function SearchList({ filteredData }) {
  const filtered = filteredData.map((clip) => (
    <Card key={clip.id} clip={clip} />
  ));

  return <div className="card-container">{filtered}</div>;
}

export default SearchList;
