'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of the state and actions
interface StateContextType {
  buttonClicked: Boolean;
  setButtonStatus: React.Dispatch<React.SetStateAction<Boolean>>;
}

// Create the context
const StateContext = createContext<StateContextType | undefined>(undefined);

// Create a provider component
const StateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [buttonClicked, setButtonStatus] = useState<Boolean>(false)

  return (
    <StateContext.Provider value={{ buttonClicked, setButtonStatus }}>
      {children}
    </StateContext.Provider>
  );
};

// Custom hook to use the StateContext
const useStateContext = () => {
  const context = useContext(StateContext);
  if (context === undefined) {
    throw new Error('useStateContext must be used within a StateProvider');
  }
  return context;
};

export { StateProvider, useStateContext };
