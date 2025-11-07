import React from 'react';
import { useParams } from 'react-router-dom';
import './Ad.css';

const Ad = () => {
  const { id } = useParams();
  return (
    <div className="ad" data-easytag="ad-react/src/pages/Ad.js">
      <h1 data-easytag="ad-title-react/src/pages/Ad.js">Ad Details for ID: {id}</h1>
      <p data-easytag="ad-description-react/src/pages/Ad.js">Detailed view of the ad.</p>
      {/* Placeholder */}
    </div>
  );
};

export default Ad;