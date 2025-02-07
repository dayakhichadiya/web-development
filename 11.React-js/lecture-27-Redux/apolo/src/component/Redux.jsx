import React from 'react'
import {createStore} from 'redux'
import { useDispatch, useSelector } from 'react-redux'


const buy = () => {
    return{
        type : 'BUY_ITEM_1'
    }
}

// const initialState = 10

// const reducer = (state = initialState, action) => {
//     switch(action.type){
//         case 'BUY_ITEM_1' : return state + 1
//         default: return state
//     }
// }


const Redux = () => {

    const data = useSelector(state => state)
    console.log('data', data);

    const dispatch = useDispatch()

  return (
    <>
    <div className='heading'>React-Redux Component</div>
    <button className='btn' onClick={() => dispatch(buy())}>click here</button>
    </>
  )
}

export default Redux

export const store = createStore(reducer)