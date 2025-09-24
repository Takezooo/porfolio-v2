"use client"

import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('green');
	const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'green' ? 'blue' : 'green'));
  };

  const handleNav = () => {
		setMenuOpen((prevMenu) => !prevMenu);
	};

  return (
    <ThemeContext.Provider value={{ theme, menuOpen, toggleTheme, handleNav }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);