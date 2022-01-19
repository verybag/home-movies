//SEARCH FUNCTION //

import React, { useState } from 'react';
import SearchList from './SearchList';

function Search({ details }) {
  const [searchField, setSearchField] = useState('');
  const filteredData = details.filter((clip) => {
    return (
      clip.title.toLowerCase().includes(searchField.toLowerCase()) ||
      clip.desc.toLowerCase().includes(searchField.toLowerCase()) ||
      clip.people.includes(searchField.toLowerCase())
    );
  });

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  function searchList() {
    return <SearchList filteredData={filteredData} />;
  }
  return (
    <>
      <div className="search">
        <input
          type="search"
          placeholder="Search..."
          onChange={handleChange}
        />
      </div>
      {searchList()}
    </>
  );
}

export default Search;
