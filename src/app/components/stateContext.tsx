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



interface UpdateStateContextType {
  updateButtonClicked: Boolean;
  pid: string
  name: string,
  type: string,
  price: number,
  desc: string,
  imgUrl: string
  setUpdateButtonStatus: React.Dispatch<React.SetStateAction<Boolean>>;
  setPid: React.Dispatch<React.SetStateAction<string>>;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setType: React.Dispatch<React.SetStateAction<string>>;
  setPrice: React.Dispatch<React.SetStateAction<number>>;
  setDesc: React.Dispatch<React.SetStateAction<string>>;
  setImgUrl: React.Dispatch<React.SetStateAction<string>>;
}

// Create the context
const UpdateStateContext = createContext<UpdateStateContextType | undefined>(undefined);

// Create a provider component
const UpdateStateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [updateButtonClicked, setUpdateButtonStatus] = useState<Boolean>(false)
  const [pid, setPid] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [type, setType] = useState<string>('')
  const [price, setPrice] = useState<number>(0)
  const [desc, setDesc] = useState<string>('')
  const [imgUrl, setImgUrl] = useState<string>('')

  return (
    <UpdateStateContext.Provider value={{ updateButtonClicked, pid, name, type, price, desc, imgUrl, setUpdateButtonStatus, setPid, setName, setType, setPrice, setDesc, setImgUrl }}>
      {children}
    </UpdateStateContext.Provider>
  );
};

// Custom hook to use the StateContext
const useUpdateStateContext = () => {
  const context = useContext(UpdateStateContext);
  if (context === undefined) {
    throw new Error('useUpdateStateContext must be used within a StateProvider');
  }
  return context;
};

export { UpdateStateProvider, useUpdateStateContext };
