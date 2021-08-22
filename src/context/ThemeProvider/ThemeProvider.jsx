import React, { useState, createContext } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [mode, setMode] = useState('light');
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