import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import OneboxPage from './components/OneboxPage'; // Placeholder for now

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/onebox" element={<OneboxPage />} />
    </Routes>
  );
}

export default App;
