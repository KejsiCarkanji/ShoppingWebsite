import { createContext, useState, useContext, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
    const getTheme = () => {
        const savedTheme = localStorage.getItem("darkMode");
        return savedTheme ? JSON.parse(savedTheme) : true; 
    };
    const [darkMode, setDarkMode] = useState(() => 
        getTheme()
    );

    const toggleTheme = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
        localStorage.setItem("darkMode", JSON.stringify(darkMode));
    }, [darkMode]);

    return (
        <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useThemeContext = () => {
    return useContext(ThemeContext);
};
