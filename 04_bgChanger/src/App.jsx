import { useState } from "react";
import cn from "clsx";

function App() {
  const [color, setColor] = useState('gray');

  const colorOptions = [
    {
      title: "white",
      textColor: "black",
    },
    {
      title: "black",
      textColor: "white",
    },
    {
      title: "red",
      textColor: "white",
    },
    {
      title: "blue",
      textColor: "white",
    },
    {
      title: "green",
      textColor: "white",
    },
    {
      title: "yellow",
      textColor: "black",
    },
    {
      title: "orange",
      textColor: "black",
    },
    {
      title: "olive",
      textColor: "white",
    },
    {
      title: "pink",
      textColor: "black",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: color,
      }}
      className={cn(
        `min-h-screen flex items-center justify-center text-lg md:text-xl transition duration-300 relative`,
      )}
    >
      <div className="fixed grid grid-cols-3 gap-2 md:gap-4 bottom-20 max-w-xl">
        {colorOptions.map((c) => (
          <button
            style={{
              backgroundColor: c.title,
              color: c.textColor,
            }}
            className={cn(
              `px-4 py-1.5 rounded hover:scale-105 transition duration-300 cursor-pointer hover:-translate-y-1 hover:translate-x-1 shadow-xl hover:shadow-2xl outline-none`,
            )}
            key={c.title}
            onClick={() => setColor(c.title)}
          >
            {c.title}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
