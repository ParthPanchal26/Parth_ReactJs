import React from 'react'
import { useAppSelector } from './Redux/Hooks';

const CounterComp = () => {
    
    const count = useAppSelector(state => state.counter)
  
    return (
    <h1>
        Counter From CounterComp : {count}
    </h1>
  )
}

export default CounterComp;