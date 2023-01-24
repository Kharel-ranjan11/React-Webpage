import React from "react";
export const Themes = {
  dark: {
    backgroundColor: "#212121",
    color: "#eceff1",
    padding:'5px'
  },
  light: {
    color: "#212121",
    backgroundColor: "#eceff1",
    padding:'5px'
  },
};
export const ThemeContext=React.createContext(Themes)
