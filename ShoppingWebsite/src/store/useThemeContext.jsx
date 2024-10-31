import { createContext, useState, useContext, useEffect } from "react";

const ThemeContext = createContext()

export const ThemeContextProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(true)

    const toggleTheme = () => {
        setDarkMode((prevMode) => !prevMode)
    }

    useEffect(() => {
        document.documentElement.setAttribute(
          "data-theme",
          darkMode ? "dark" : "light"
        );
      }, [darkMode]);

    return (
        <ThemeContext.Provider value={{darkMode, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useThemeContext = () => {
    return useContext(ThemeContext)
}