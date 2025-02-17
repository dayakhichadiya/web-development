import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementAmount } from "./CounterSlice";

const Counter = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return(
        <div>
            <h1>Counter : {count}</h1>
            <button type="button" className="btn btn-primary" onClick={() => dispatch(increment())}>+</button>
            <button type="button" className="btn btn-primary" onClick={() => dispatch(decrement())}>-</button>
            <button type="button" className="btn btn-primary" onClick={() => dispatch(incrementAmount(5))}>+5</button>
        </div>
    )
}

export default Counter