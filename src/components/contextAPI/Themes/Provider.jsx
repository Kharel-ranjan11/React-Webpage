import React from "react";
import { Layout } from "./Layout";
import { ThemeContext, Themes } from "./Theme";
export const Provider = () => {
  const [theme, setTheme] = React.useState(Themes.dark);
  const handleChange = (e) => {
    e.preventDefault();
    theme === Themes.dark ? setTheme(Themes.light) : setTheme(Themes.dark)
  };
  return (
    <div>
      <ThemeContext.Provider value={theme}>
        <button type="submit" onClick={handleChange}>
          Toggle Theme
        </button>
        <Layout />
      </ThemeContext.Provider>
    </div>
  );
};
