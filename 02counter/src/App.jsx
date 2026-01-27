import { useState } from 'react';
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  // let counter = 0;

  const incrementValue = () => {
    if(counter<20){
      counter = counter + 1
      setCounter(counter)
    }
  }

  const decrementValue = () => {
    if(counter>0) setCounter(counter - 1);
  }

  const resetValue = () => {
    setCounter(0)
  }

  return (
    <>
    <h1>Chai aur React</h1>
    <h2>Counter value: {counter}</h2>
    <p>counter range: 0-20</p>
    <div className='buttons'>
      <button
        onClick={incrementValue}
      >
        Increment Value
      </button>
      <button
        onClick={decrementValue}
      >
        Decrement Value
      </button>
      <button
        onClick={resetValue}
      >
        Reset Value
      </button>
    </div>
    </>
  )
}

export default App
