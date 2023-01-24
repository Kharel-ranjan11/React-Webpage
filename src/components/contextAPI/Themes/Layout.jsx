import React from "react";
import { ThemeContext } from "./Theme";
export const Layout = () => {
  const theme = React.useContext(ThemeContext);
  return <div  style={theme}>{JSON.stringify(theme)}</div>;
};
