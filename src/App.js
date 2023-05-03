import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import SearchPage from './SearchPage';
import CoordinatesPage from './CoordinatesPage';


function App() {
  return (
    <Router basename="small-library-of-babel">
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/search/:queryText" element={<SearchPage/>} />
        <Route path="/coordinates/:coordinateId/:page" element={<CoordinatesPage/>} />
      </Routes>
    </Router>
  );
}

export default App;