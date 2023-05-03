// src/HomePage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchPage from './SearchPage';
import SearchBox from './SearchBox';

function HomePage() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [coordinates, setCoordinates] = useState({
    room: '',
    wall: '',
    shelf: '',
    volume: '',
    page: ''
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    if (query) {
      navigate(`/search?query=${encodeURIComponent(query)}`);
    }
  };

  const onCoordinatesSubmit = (e) => {
    e.preventDefault();
    const { room, wall, shelf, volume, page } = coordinates;
    if (room && wall && shelf && volume && page) {
      const coordinateId = `${room}-${wall}-${shelf}-${volume}`;
      navigate(`/coordinates/${coordinateId}/${page}`);
    }
  };

  const onCoordinatesChange = (e) => {
    const { name, value } = e.target;
    setCoordinates((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <h1>Small Library</h1>
      <section>
        <SearchBox/>
      </section>
      <section>
        <h2>Enter Coordinates</h2>
        <form onSubmit={onCoordinatesSubmit}>
          <input
            type="text"
            name="room"
            value={coordinates.room}
            onChange={onCoordinatesChange}
            placeholder="Room"
          />
          <input
            type="text"
            name="wall"
            value={coordinates.wall}
            onChange={onCoordinatesChange}
            placeholder="Wall"
          />
          <input
            type="text"
            name="shelf"
            value={coordinates.shelf}
            onChange={onCoordinatesChange}
            placeholder="Shelf"
          />
          <input
            type="text"
            name="volume"
            value={coordinates.volume}
            onChange={onCoordinatesChange}
            placeholder="Volume"
          />
          <input
            type="text"
            name="page"
            value={coordinates.page}
            onChange={onCoordinatesChange}
            placeholder="Page"
          />
          <button type="submit">Go to Page</button>
        </form>
      </section>
    </div>
  );
}

export default HomePage;
