import { useState } from 'react';
import './App.css'

function App() {

  let [counter, setCounter] = useState(0);

  const increaseCounter = () => {

    if (counter >= 10) {
      setCounter(counter = 0)
    }
    else{
      setCounter(counter => counter + 1);
      setCounter(counter => counter + 1);
      setCounter(counter => counter + 1);
    }

    // setCounter(counter++);
    // setCounter(counter + 1);
  }

  const decreaseCounter = () => {
    if (counter <= -10) {
      setCounter(counter = 0);
    }
    else{
      setCounter(--counter);
    }
    
    // setCounter(counter--);
    // setCounter(counter - 1);
  }

  return (
    <>
      <h1>Hello React!</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={increaseCounter}>Add Value</button>
      <button onClick={decreaseCounter}>Remove Value</button>
    </>
  )
}

export default App
