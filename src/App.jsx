import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import HighlightedCars from './pages/HighlightedCars';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Car-Market-Analytics/" element={<Dashboard />} />
        <Route path="/Car-Market-Analytics/highlighted" element={<HighlightedCars />} />
      </Routes>
    </Router>
  );
}

export default App;
