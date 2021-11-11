import React, { createContext, useState, useEffect } from 'react';
import {lightTheme, darkTheme} from "./theme/theme";

export const contextGlobal = createContext(undefined, undefined);

export const DataProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [theme, setTheme] = useState(darkTheme);

  useEffect(()=>{
    isDarkTheme ? setTheme(darkTheme) : setTheme(lightTheme)
  }, [isDarkTheme]);

  const state = {
    isDarkTheme: [isDarkTheme, setIsDarkTheme],
    theme : [theme, setTheme]
  };

  return <contextGlobal.Provider value={state}>
    {children}
  </contextGlobal.Provider>;
};
