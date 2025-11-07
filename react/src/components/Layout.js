import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout" data-easytag="layout-react/src/components/Layout.js">
      <Header />
      <main className="main" data-easytag="main-react/src/components/Layout.js">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;