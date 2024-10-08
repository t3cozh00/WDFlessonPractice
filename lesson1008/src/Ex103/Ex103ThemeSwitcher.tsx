import { useContext } from "react";
import themeStyles from "./Ex103Themes.module.css";
import { ThemeContext } from "./Ex103";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  //   let themeStyle = null;
  //   if (theme === "light") {
  //     themeStyle = themeStyles.lightTheme;
  //   } else {
  //     themeStyle = themeStyles.darkTheme;
  //   }

  const themeStyle =
    theme === "light" ? themeStyles.lightTheme : themeStyles.darkTheme;

  return (
    <div className={themeStyle}>
      <h3>This is theme switcher component</h3>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
