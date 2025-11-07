import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getFeaturedAds } from '../api/ads';
import './Home.css';

const Home = () => {
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const data = await getFeaturedAds();
        setAds(data);
      } catch (err) {
        setError('Failed to load ads');
      } finally {
        setLoading(false);
      }
    };
    fetchAds();
  }, []);

  return (
    <div data-easytag="home-src/pages/Home.js" className="home-container">
      <header className="home-banner">
        <h1>Welcome to Our Custom Bulletin Board</h1>
        <p>Your go-to platform for buying and selling items.</p>
      </header>
      <section className="featured-ads">
        <h2>Featured Ads</h2>
        {loading && <p>Loading ads...</p>}
        {error && <p>{error}</p>}
        <div className="ads-list">
          {ads.map((ad) => (
            <div key={ad.id} data-easytag="ad-src/pages/Home.js" className="ad-item">
              <h3>{ad.title}</h3>
              <p>{ad.description}</p>
            </div>
          ))}
        </div>
      </section>
      <nav className="home-nav">
        <Link to="/catalog" className="nav-link" data-easytag="catalog-link-src/pages/Home.js">Browse Catalog</Link>
        <Link to="/search" className="nav-link" data-easytag="search-link-src/pages/Home.js">Search Ads</Link>
      </nav>
    </div>
  );
};

export default Home;