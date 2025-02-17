import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import { increment, decrement } from './Redux/ProductSlice'

function App() {

  const data = useSelector((state) => state.counter)

  const dispatch = useDispatch()

  return (
    <>
     <div>
      <h1 className='bg-blue-400'>Main component</h1>
      <div>{data}</div>
      <button className='bg-blue-200' onClick={() => dispatch(increment())}>Increment </button>
      <button className='bg-blue-200' onClick={() => dispatch(decrement())}>Decrement </button>
     </div>
    </>
  )
}

export default App
