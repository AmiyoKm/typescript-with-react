import React from 'react'
import { userContext } from './GlobalState'

const Counter = () => {
    const {counter,increment,decrement} = React.useContext(userContext)
  return (
    <div>
        <h1>{counter}</h1>
        <button className='bg-green-500' onClick={increment}>Increment</button>
        <button className='bg-red-500' onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Counter