import React, { createContext, useState, useEffect } from 'react';
import John1 from './images/pic1.png';
import John2 from './images/pic2.png';
import John3 from './images/pic3.png';
import John4 from './images/pic4.png';
import John5 from './images/pic5.png';

// Create a context
export const ThemeContext = createContext();

// Create a provider component
export const ThemeProvider = ({ children }) => {
  const [themeColor, setThemeColor] = useState(getInitialThemeColor());
  const [isDarkMode, setIsDarkMode] = useState(getInitialDarkMode());
  const [currentImage, setCurrentImage] = useState(getImageForColor(themeColor));

  useEffect(() => {
    // Update the CSS variable for primary color
    document.documentElement.style.setProperty('--primary', themeColor);

    // Save the theme color to local storage
    localStorage.setItem('themeColor', themeColor);

    // Update image based on theme color
    setCurrentImage(getImageForColor(themeColor));
  }, [themeColor]);

  useEffect(() => {
    // Apply dark mode styles
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }

    // Save dark mode preference to local storage
    localStorage.setItem('isDarkMode', isDarkMode);
  }, [isDarkMode]);

  function toggleThemeMode() {
    setIsDarkMode(prevMode => !prevMode);
  }

  function getInitialThemeColor() {
    // Check local storage for saved theme color
    const savedThemeColor = localStorage.getItem('themeColor');
    return savedThemeColor ? savedThemeColor : '#e78211';
  }

  function getInitialDarkMode() {
    // Check local storage for saved dark mode preference
    const savedDarkMode = localStorage.getItem('isDarkMode');
    return savedDarkMode ? JSON.parse(savedDarkMode) : false;
  }

  function getImageForColor(color) {
    switch (color) {
      case '#e78211': return John1;
      case '#00bc91': return John2;
      case '#fd1a93': return John3;
      case '#e2d810': return John4;
      case '#8b3dff': return John5;
      default: return John1;
    }
  }

  return (
    <ThemeContext.Provider
      value={{
        themeColor,
        setThemeColor,
        isDarkMode,
        toggleThemeMode,
        currentImage,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
