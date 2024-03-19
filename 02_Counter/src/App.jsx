import { useState } from 'react';
import './App.css'

function App() {

  let [counter, setCounter] = useState(0);

  const increaseCounter = () => {

    if (counter === 20) {
      counter = 20;
    }
    else{
      setCounter(++counter);
    }

    // setCounter(counter++);
    // setCounter(counter + 1);
  }

  const decreaseCounter = () => {
    if (counter === 0) {
      counter = 0;
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
