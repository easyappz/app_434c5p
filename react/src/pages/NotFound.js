import React from 'react';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found" data-easytag="not-found-react/src/pages/NotFound.js">
      <h1 data-easytag="not-found-title-react/src/pages/NotFound.js">404 - Page Not Found</h1>
      <p data-easytag="not-found-description-react/src/pages/NotFound.js">Sorry, the page you are looking for does not exist.</p>
      <a href="/" data-easytag="home-link-react/src/pages/NotFound.js">Go back to Home</a>
    </div>
  );
};

export default NotFound;