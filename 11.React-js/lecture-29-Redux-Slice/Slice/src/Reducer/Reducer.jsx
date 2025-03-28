import reducer from "../Redux/ProductSlice"

const initialState = 20

const Reducer = (state = initialState, action) => {
    switch(action.type){
        case 'INCREMENT' : return state + 1
        case 'DECREMENT' : return state - 1
        default : return state
    }
}

export default Reducer