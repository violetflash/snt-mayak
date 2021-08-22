import React, { useState, createContext } from 'react';

const ThemeContext = createContext();

const LS_THEME_KEY = 'Mayak-theme';

const ThemeProvider = ({ children }) => {
    const initialMode = localStorage.getItem(LS_THEME_KEY) ? JSON.parse(localStorage.getItem(LS_THEME_KEY)) : 'light';
    const [mode, setMode] = useState(initialMode);
    return (
        <ThemeContext.Provider
            value={{
                mode,
                setMode: () => setMode(mode === 'light' ? 'dark' : 'light')
            }}>
            {children}
        </ThemeContext.Provider>
    )

};

export default ThemeProvider;
export { ThemeContext };