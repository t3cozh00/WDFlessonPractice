//import React from "react";
import themeStyles from "./Ex103Themes.module.css";

export default function ThemeSwitcher({ theme, toggleTheme }) {
  let themeStyle = null;
  if (theme === "light") {
    themeStyle = themeStyles.lightTheme;
  } else {
    themeStyle = themeStyles.darkTheme;
  }

  return (
    <div className={themeStyle}>
      <h3>This is theme switcher component</h3>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
