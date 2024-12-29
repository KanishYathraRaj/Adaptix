import React from 'react'
import BlackBoard from './pages/BlackBoard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlackBoard />} />
      </Routes>
    </Router>
  );
}

export default App;