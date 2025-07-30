import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDegenMode, setIsDegenMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('degenMode') === 'true';
    setIsDegenMode(savedMode);
  }, []);

  useEffect(() => {
    localStorage.setItem('degenMode', isDegenMode);
  }, [isDegenMode]);

  const toggleDegenMode = () => {
    setIsDegenMode(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDegenMode, toggleDegenMode }}>
      <div className={isDegenMode ? 'degen-mode' : ''}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
