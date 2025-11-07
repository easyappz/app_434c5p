import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import Layout from './components/Layout';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Ad from './pages/Ad';
import Profile from './pages/Profile';
import Post from './pages/Post';
import Search from './pages/Search';
import NotFound from './pages/NotFound';
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
            <Route path="/" element={<Layout><Home /></Layout>} />
            <Route path="/catalog" element={<Layout><Catalog /></Layout>} />
            <Route path="/ad/:id" element={<Layout><Ad /></Layout>} />
            <Route path="/profile" element={<Layout><Profile /></Layout>} />
            <Route path="/post" element={<Layout><Post /></Layout>} />
            <Route path="/search" element={<Layout><Search /></Layout>} />
            <Route path="*" element={<Layout><NotFound /></Layout>} />
          </Routes>
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;