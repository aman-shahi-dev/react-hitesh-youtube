import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const incrementValue = () => {
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
  };

  const decrementValue = () => {
    setCounter((prevCounter) => prevCounter - 1);
    setCounter((prevCounter) => prevCounter - 1);
    setCounter((prevCounter) => prevCounter - 1);
    setCounter((prevCounter) => prevCounter - 1);
  };

  const resetValue = () => {
    setCounter(0);
  };

  return (
    <div className="mainContainer">
      <h1>Counter Value: {counter}</h1>
      <div className="buttons">
        <button onClick={incrementValue}>Increment</button>
        <button onClick={decrementValue}>Decrement</button>
        <button onClick={resetValue}>Reset</button>
      </div>
      <p>
        increment button will increase the value of count by 1, because this is
        the function used by increment button
      </p>
      <code className="code">{`
        const incrementValue = () => {
          setCounter(counter + 1);
          setCounter(counter + 1);
          setCounter(counter + 1);
          setCounter(counter + 1);
        };
      `}</code>
      <p>
        decrement button will decrement the value of count by -4, because this
        is the function used by decrement button
      </p>
      <code className="code">{`
        const decrementValue = () => {
          setCounter((prevCounter) => prevCounter - 1);
          setCounter((prevCounter) => prevCounter - 1);
          setCounter((prevCounter) => prevCounter - 1);
          setCounter((prevCounter) => prevCounter - 1);
        };
      `}</code>
    </div>
  );
}

export default App;
