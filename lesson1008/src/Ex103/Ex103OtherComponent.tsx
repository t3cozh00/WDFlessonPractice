import { useContext } from "react";
import { ThemeContext } from "./Ex103";
import themeStyles from "./Ex103Themes.module.css";

export default function OtherComponent() {
  const { theme } = useContext(ThemeContext);

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
      <h3>This is Other Component</h3>
      <p>
        This component is doing something and it is using theme for rendering
        its content.
      </p>
      <p>
        Current theme value is: <b>{theme}</b>
      </p>
    </div>
  );
}
