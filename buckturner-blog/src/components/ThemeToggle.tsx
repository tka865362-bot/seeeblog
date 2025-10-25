import React from 'react';
import { useTheme } from '../context/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="theme-toggle-container">
      <span className="theme-label">Light</span>
      <button 
        onClick={toggleTheme} 
        className="theme-toggle"
        aria-label="Toggle theme"
      >
        <span className={`toggle-knob ${theme === 'dark' ? 'active' : ''}`}></span>
      </button>
      <span className="theme-label">Dark</span>
    </div>
  );
};
