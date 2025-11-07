import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import Home from './pages/Home';
import './App.css';

function App() {
  useEffect(() => {
    window.handleRoutes(['/', '/catalog', '/ad', '/profile', '/post', '/search']);
  }, []);

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;