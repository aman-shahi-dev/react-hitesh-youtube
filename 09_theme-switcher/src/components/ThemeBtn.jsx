import React from 'react';
import useTheme from '../contexts/ThemeContext';

export default function ThemeBtn() {
  
  const { defaultTheme, lightMode, darkMode } = useTheme()
  
  return (
    <button
      onClick={() => {
        if (defaultTheme === 'light') {
          darkMode()
        } else {
          lightMode()
        }
      }}
      className="text-xl px-6 py-2 rounded flex mx-auto mt-4 cursor-pointer active:scale-95 shadow-xl dark:shadow-lg dark:shadow-orange-500 transition-all duration-500"
    >
      Switch Theme
    </button>
  );
}
