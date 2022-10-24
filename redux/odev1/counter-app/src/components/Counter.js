import React from 'react'

import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement} from '../redux/counter/counterSlice'

function Counter() {

  const countValue = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{countValue}</h1>

      <button onClick={() => {dispatch(decrement())}} >Decrease</button>
      <button onClick={() => {dispatch(increment(12))}} >Increase</button>



    </div>
  )
}

export default Counter