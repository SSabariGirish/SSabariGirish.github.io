import React, { createContext, useState, useContext, useEffect } from 'react';

// 1. Check for user's OS preference
const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

// 2. Create the Context
const ThemeContext = createContext();

// 3. Create the Provider (the component that "provides" the theme)
export function ThemeProvider({ children }) {
  // 4. Get the stored theme, or use OS preference, or default to 'dark'
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      return storedTheme;
    }
    return prefersLight ? 'light' : 'dark';
  });

  // 5. Update the <body> tag and localStorage whenever the theme changes
  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // 6. The function to change the theme
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 7. A custom hook to make it easy to use the theme
export const useTheme = () => useContext(ThemeContext);