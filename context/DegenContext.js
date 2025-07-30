// context/DegenContext.js
import { createContext, useContext, useState } from 'react';

const DegenContext = createContext();

export const DegenProvider = ({ children }) => {
  const [isDegenMode, setIsDegenMode] = useState(false);
  const toggleDegenMode = () => setIsDegenMode(prev => !prev);

  return (
    <DegenContext.Provider value={{ isDegenMode, toggleDegenMode }}>
      {children}
    </DegenContext.Provider>
  );
};

export const useDegen = () => useContext(DegenContext);
