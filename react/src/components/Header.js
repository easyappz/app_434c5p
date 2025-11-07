import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header" data-easytag="header-react/src/components/Header.js">
      <div className="header-container">
        <div className="logo" data-easytag="logo-react/src/components/Header.js">Classifieds Board</div>
        <nav className="nav" data-easytag="nav-react/src/components/Header.js">
          <a href="/" data-easytag="home-link-react/src/components/Header.js">Home</a>
          <a href="/catalog" data-easytag="catalog-link-react/src/components/Header.js">Catalog</a>
          <a href="/search" data-easytag="search-link-react/src/components/Header.js">Search</a>
          <a href="/post" data-easytag="post-link-react/src/components/Header.js">Post Ad</a>
          <a href="/profile" data-easytag="profile-link-react/src/components/Header.js">Profile</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;