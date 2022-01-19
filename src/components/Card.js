import React from 'react';

function Card({ clip }) {
  return (
    <>
      <div className="card" key={clip.id}>
        <div className="play">
          <a href={clip.url}>
            <img src={clip.thumbnail} alt="thumbnail" />
          </a>
        </div>
        <div className="info">
          <h1>{clip.title}</h1>
          <p>{clip.length}</p>
          <div className="desc">
            <p>{clip.desc}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
