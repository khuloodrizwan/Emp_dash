// Navigation Context - manages routing and active page state
import React, { createContext, useContext, useState } from 'react';

const NavigationContext = createContext();

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};

export const NavigationProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('dashboard');

  // Navigate to a specific page
  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  // Check if current page is active
  const isActivePage = (page) => {
    return currentPage === page;
  };

  const value = {
    currentPage,
    navigateTo,
    isActivePage
  };

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};