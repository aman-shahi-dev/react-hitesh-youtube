import { useState } from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import { useEffect } from "react";
import Card from "./components/Card";
import ThemeBtn from "./components/ThemeBtn";

function App() {
  const [defaultTheme, setDefaultTheme] = useState("light");

  const lightMode = () => {
    setDefaultTheme("light");
  };

  const darkMode = () => {
    setDefaultTheme("dark");
  };

  // actual change in a theme
  useEffect(() => {
    const HTML = document.querySelector("html").classList;
    HTML.remove("light", "dark");
    HTML.add(defaultTheme);
  }, [defaultTheme]);

  return (
    <ThemeProvider value={{ defaultTheme, lightMode, darkMode }}>
      <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen flex flex-col gap-6 items-center justify-center transition-all duration-500">
        <Card />
        <ThemeBtn />
      </div>
    </ThemeProvider>
  );
}

export default App;
