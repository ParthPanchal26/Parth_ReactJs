import './App.css'
import CounterComp from './CounterComp';
import { useAppDispatch, useAppSelector } from './Redux/Hooks'
import {increment, decrement} from "./Redux/Slices/Counter/index"

function App() {

  const count = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <>

      <h1>Counter value: {count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>  &nbsp;&nbsp;&nbsp;
      <button onClick={() => dispatch(decrement())}>-</button>

      <CounterComp />

    </>
  )
}

export default App
