import React from 'react';
import { useTheme } from './ThemeContext'; // 1. Import our custom hook

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme(); // 2. Get the theme and toggle function

  return (
    <button onClick={toggleTheme} id="theme-toggle">
      {/* 3. Show a different emoji based on the current theme */}
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}

export default ThemeToggle;