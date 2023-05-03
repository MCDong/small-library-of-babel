import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import StateMachine from './StateMachine';

const characterSet = 'aeiou';
const numPagesPerBook = 20;
const numCharsPerPage = 20;
const machine = new StateMachine(characterSet, numPagesPerBook, numCharsPerPage);

function SearchBox() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchClick = () => {
    const { coordinates, page } = machine.search(query);
    if (coordinates !== '-1-1-1-1' && page >= 0) {
      navigate(`/coordinates/${coordinates}/${page}`);
    } else {
      alert('Not found');
    }
  };



  return (
    <div>
      <input type="text" value={query} onChange={handleQueryChange} placeholder="Search..." />
      <button onClick={handleSearchClick}>Search</button>
    </div>
  );
}

export default SearchBox;