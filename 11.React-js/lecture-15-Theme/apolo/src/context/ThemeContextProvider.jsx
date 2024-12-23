import ThemeContext from "./themeContext";
import { useState } from "react";

import React from 'react'

const ThemeContextProvider = ({children}) => {

  const [theme, setTheme] = useState()
  const [value, setValue] = useState(false)
  
  return (
    <div>
      <ThemeContext.Provider value={{setTheme, value, setValue}}>
        {children}
      </ThemeContext.Provider>
    </div>
  )
}

export default ThemeContextProvider