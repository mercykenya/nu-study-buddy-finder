import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useFontSize } from '../contexts/FontSizeContext';
import '../styles/AccessibilityControls.css';

function AccessibilityControls() {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const { increaseFontSize, decreaseFontSize, resetFontSize } = useFontSize();

  return (
    <div className="accessibility-controls">
      <button onClick={toggleDarkMode}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <div className="font-size-controls">
        <button onClick={decreaseFontSize}>A-</button>
        <button onClick={resetFontSize}>Reset</button>
        <button onClick={increaseFontSize}>A+</button>
      </div>
    </div>
  );
}

export default AccessibilityControls;