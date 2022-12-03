import React, { createContext, useContext, useState } from "react";

const ToggleContext = createContext();
const ToggleContextProvider = ({ children }) => {
  const [isLightModeOn, setIsLightModeOn] = useState(true);
  const toggleHandler = () => {
    setIsLightModeOn(!isLightModeOn);
  };

  return (
    <ToggleContext.Provider value={{ isLightModeOn, toggleHandler }}>
      {children}
    </ToggleContext.Provider>
  );
};

export const useToggle = () => useContext(ToggleContext);

export { ToggleContext, ToggleContextProvider };
