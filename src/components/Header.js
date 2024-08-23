import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { useFontSize } from '../contexts/FontSizeContext';
import '../styles/Header.css';

function Header() {
  const location = useLocation();
  const { isDarkMode, toggleDarkMode } = useTheme();
  const { increaseFontSize, decreaseFontSize, resetFontSize } = useFontSize();

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">NU Study Buddy Finder</h1>
        <nav className="nav">
          <Link to="/" className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
          <Link to="/find-buddies" className={`nav-item ${location.pathname === '/find-buddies' ? 'active' : ''}`}>Find Buddies</Link>
          <Link to="/my-study-groups" className={`nav-item ${location.pathname === '/my-study-groups' ? 'active' : ''}`}>My Study Groups</Link>
          <Link to="/profile" className={`nav-item ${location.pathname === '/profile' ? 'active' : ''}`}>Profile</Link>
        </nav>
        <div className="accessibility-controls">
          <button onClick={toggleDarkMode} className="accessibility-btn">
            {isDarkMode ? '☀️' : '🌙'}
          </button>
          <button onClick={decreaseFontSize} className="accessibility-btn">A-</button>
          <button onClick={resetFontSize} className="accessibility-btn">A</button>
          <button onClick={increaseFontSize} className="accessibility-btn">A+</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
