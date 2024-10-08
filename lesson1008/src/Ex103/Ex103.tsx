import { createContext, useState } from "react";
import ThemeSwitcher from "./Ex103ThemeSwitcher";
import OtherComponent from "./Ex103OtherComponent";

/* This is a starting point for the exercise.
   It contains a theme switching functionality implemented with 
   normal state and props passing.

   Your task is to convert it to use the Context API instead. */

export const ThemeContext = createContext(null);

export default function Exercise10_3() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div>
        <h2>Theme Switcher App</h2>
        <ThemeSwitcher />
        <OtherComponent />
      </div>
    </ThemeContext.Provider>
  );
}

//caveats注意事项
