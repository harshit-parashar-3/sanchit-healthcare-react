import React, { createContext, useContext, useState, useEffect } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.textColor};
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  button {
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.textColor};
  }

  footer {
    background-color: ${(props) => props.theme.secondary};
  }
`;

const lightTheme = {
  background: "#f4f4f4",
  primary: "#4a7dff",
  secondary: "#363b4d",
  textColor: "#000",
};

const darkTheme = {
  background: "#121212",
  primary: "#90caf9",
  secondary: "#121212",
  textColor: "#fff",
};

export const ThemeProviderComponent = ({ children }) => {
  const [themeMode, setThemeMode] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", themeMode);
  }, [themeMode]);

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      <ThemeProvider theme={themeMode === "light" ? lightTheme : darkTheme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
