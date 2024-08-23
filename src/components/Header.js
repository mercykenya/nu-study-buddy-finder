import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { useFontSize } from '../contexts/FontSizeContext';

function Header() {
  const location = useLocation();
  const { isDarkMode, toggleDarkMode } = useTheme();
  const { increaseFontSize, decreaseFontSize, resetFontSize } = useFontSize();

  return (
    <header className="bg-nu-purple text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">NU Study Buddy Finder</h1>
        <nav className="space-x-4">
          <Link to="/" className={`hover:text-nu-purple-light ${location.pathname === '/' ? 'font-bold' : ''}`}>Home</Link>
          <Link to="/find-buddies" className={`hover:text-nu-purple-light ${location.pathname === '/find-buddies' ? 'font-bold' : ''}`}>Find Buddies</Link>
          <Link to="/my-study-groups" className={`hover:text-nu-purple-light ${location.pathname === '/my-study-groups' ? 'font-bold' : ''}`}>My Study Groups</Link>
          <Link to="/profile" className={`hover:text-nu-purple-light ${location.pathname === '/profile' ? 'font-bold' : ''}`}>Profile</Link>
        </nav>
        <div className="flex space-x-2">
          <button onClick={toggleDarkMode} className="bg-nu-purple-light px-2 py-1 rounded">
            {isDarkMode ? '☀️' : '🌙'}
          </button>
          <button onClick={decreaseFontSize} className="bg-nu-purple-light px-2 py-1 rounded">A-</button>
          <button onClick={resetFontSize} className="bg-nu-purple-light px-2 py-1 rounded">A</button>
          <button onClick={increaseFontSize} className="bg-nu-purple-light px-2 py-1 rounded">A+</button>
        </div>
      </div>
    </header>
  );
}

export default Header;