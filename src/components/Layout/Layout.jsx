import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Layout.css';
import Footer from './Footer';

function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  React.useEffect(() => {
    // Check if Font Awesome is already loaded
    const fontAwesomeLink = document.querySelector('link[href*="font-awesome"]');
    
    if (!fontAwesomeLink) {
      // Add Font Awesome if it's not already loaded
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
      link.integrity = 'sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==';
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    }
  }, []);

  return (
    <div className="layout">
      <header className="header">
        <div className="social-icons">
          <a href="https://www.instagram.com/bit.uci/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://discord.gg/H7RdmRXh32" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-discord"></i>
          </a>
        </div>
        <nav className={mobileMenuOpen ? 'active' : ''}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/resources">Resources</Link></li>
            <li><Link to="/get-involved">Get Involved</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
        <button className="mobile-menu-button" onClick={toggleMobileMenu}>
          <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </header>

      <main className="main-content">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout; 