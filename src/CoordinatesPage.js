import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import StateMachine from './StateMachine';

const characterSet = 'aeiou';
const numPagesPerBook = 20;
const numCharsPerPage = 20;
const machine = new StateMachine(characterSet, numPagesPerBook, numCharsPerPage);

function CoordinatesPage() {
  const { coordinateId, page } = useParams();
  const navigate = useNavigate();
  const [pageText, setPageText] = useState('');

  useEffect(() => {
    const generatedPage = machine.generatePage(coordinateId, page);

    setPageText(generatedPage);
  }, [coordinateId, page]);

  const goBack = () => {
    navigate('/');
  };

  const goToPreviousPage = () => {
    const newPage = Math.max(parseInt(page) - 1, 0);
    navigate(`/coordinates/${coordinateId}/${newPage}`);
  };

  const goToNextPage = () => {
    const newPage = parseInt(page) + 1;
    navigate(`/coordinates/${coordinateId}/${newPage}`);
  };

  return (
    <div>
      <h1>SmallLibrary - Coordinates</h1>
      <h2>Coordinates: {coordinateId}/{page}</h2>
      <div>
        <h3>Page Text:</h3>
        <p>{pageText}</p>
      </div>
      <button onClick={goBack}>Back</button>
      <button onClick={goToPreviousPage}>Previous Page</button>
      <button onClick={goToNextPage}>Next Page</button>
    </div>
  );
}

export default CoordinatesPage;