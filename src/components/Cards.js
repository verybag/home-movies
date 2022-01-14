import React from 'react';
import Data from './data';
import { useState } from 'react';
function Cards() {
  const [searchTerm, setSearchTerm] = useState('');
  const [foundClips, setFoundClips] = useState(Data);
  const filter = (e) => {
    const keyword = e.target.value;
    if (keyword !== '') {
      const results = Data.filter((clip) => {
        return clip.title.toLowerCase().includes(keyword.toLowerCase());
      });
      setFoundClips(results);
    } else {
      setFoundClips(Data);
    }
    setSearchTerm(keyword);
  };

  return (
    <>
      <input
        type="search"
        placeholder="Search..."
        value={searchTerm}
        onChange={filter}
        className="input"
      />
      <div className="card-container">
        {foundClips && foundClips.length > 0 ? (
          foundClips.map((clip) => (
            <div className="card" key={clip.id}>
              <div className="play">
                <a href={clip.url}>
                  <img src={clip.thumbnail} alt="thumbnail" />
                </a>
              </div>
              <div className="info">
                <h1>{clip.title}</h1>
                <p>{clip.length}</p>
                <button className="btn">Description</button>
                <div className="desc">
                  <p>{clip.desc}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h1>no results</h1>
        )}
      </div>
    </>
  );
}

export default Cards;
