import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import StateMachine from './StateMachine';
import SearchBox from './SearchBox';

const characterSet = 'aeiou';
const numPagesPerBook = 20;
const numCharsPerPage = 20;

function SearchPage() {
  const navigate = useNavigate();
  const { queryText } = useParams();

  

  useEffect(() => {
    const performSearch = (query) => {
        const machine = new StateMachine(characterSet, numPagesPerBook, numCharsPerPage);
        console.log(query)
        const { coordinates, page } = machine.search(query);
        if (coordinates !== '-1-1-1-1' && page >= 0) {
          navigate(`/coordinates/${coordinates}/${page}`);
        } else {
          alert("not found");
        }
      };
    if (queryText) {
      performSearch(queryText);
    }
  }, [queryText, navigate]);

  return (
    <div>
      <h1>SmallLibrary - Search</h1>
      <SearchBox />
    </div>
  );
}

export default SearchPage;
