import React, { createContext, useState, useContext } from 'react';

const FontSizeContext = createContext();

export const FontSizeProvider = ({ children }) => {
  const [fontSizes, setFontSizes] = useState({
    base: 16,
    small: 14,
    medium: 18,
    large: 22,
    extraLarge: 28
  });

  const increaseFontSize = () => {
    setFontSizes(prev => ({
      base: Math.min(prev.base + 2, 24),
      small: Math.min(prev.small + 2, 22),
      medium: Math.min(prev.medium + 2, 26),
      large: Math.min(prev.large + 2, 30),
      extraLarge: Math.min(prev.extraLarge + 2, 36)
    }));
  };

  const decreaseFontSize = () => {
    setFontSizes(prev => ({
      base: Math.max(prev.base - 2, 12),
      small: Math.max(prev.small - 2, 10),
      medium: Math.max(prev.medium - 2, 14),
      large: Math.max(prev.large - 2, 18),
      extraLarge: Math.max(prev.extraLarge - 2, 24)
    }));
  };

  const resetFontSize = () => {
    setFontSizes({
      base: 16,
      small: 14,
      medium: 18,
      large: 22,
      extraLarge: 28
    });
  };

  return (
    <FontSizeContext.Provider value={{ fontSizes, increaseFontSize, decreaseFontSize, resetFontSize }}>
      {children}
    </FontSizeContext.Provider>
  );
};

export const useFontSize = () => useContext(FontSizeContext);