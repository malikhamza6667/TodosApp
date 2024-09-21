import React, {createContext, useContext, useState} from 'react';
import {useColorScheme} from 'react-native';
import {ThemeContextTypes, ThemeProviderTypes} from '../types';

import {COLORSTYPE, darkModeColors,lightModeColors} from '@assets'


const ThemeContext = createContext<ThemeContextTypes|null>(null);

 const ThemeProvider:React.FC<ThemeProviderTypes> = ({children}) => {
  const scheme = useColorScheme() === 'dark';
  const [isDarkMode, setIsDarkMode] = useState(scheme);
  const colors:COLORSTYPE =isDarkMode ? darkModeColors:lightModeColors

  return (
    <ThemeContext.Provider value={{isDarkMode, colors}}>
{children}

    </ThemeContext.Provider>
  );
};


const useAppTheme=()=>{

  const theme= useContext(ThemeContext)
  if(!theme){
    throw new Error("No Theme Provider Setup")
  }
  return theme
}

export {ThemeProvider,useAppTheme}