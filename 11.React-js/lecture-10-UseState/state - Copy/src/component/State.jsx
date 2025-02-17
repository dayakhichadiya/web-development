import React from "react";
import { useState } from "react";

const State = () => {

  const initialState = [{value:20}, {data:40}]

  const [state, setState] = useState(initialState)

  const handleIncrement = ()=> {
    setState((prev) => [
      {value:prev[0].value + 1},
      {data:prev[1].data}
    ])
  }

  const Decrement = ()=> {
    setState((prev) => [
      {value:prev[0].value - 1},
      {data:prev[1].data}
    ])
  }

  const handleDecrement = ()=> {
    setState((prev) => [
      {value:prev[0].value},
      {data:prev[1].data - 1}
    ])
  }
  const Increment = ()=> {
    setState((prev) => [
      {value:prev[0].value},
      {data:prev[1].data + 1}
    ])
  }
  
  return (
    <div>
      <h1 className="heading">Heading tag</h1>
      <p>{state[0].value}</p>
      <p>{state[1].data}</p>
      <button className="next-btn" onClick={handleIncrement}>Increment</button>
      <button className="next-btn" onClick={Decrement}>Decrement</button>
      <button className="next-btn" onClick={Increment}>Increment</button>
      <button className="next-btn" onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default State