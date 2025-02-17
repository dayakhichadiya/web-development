import { createStore } from "redux";

const initialState = { darkMode: false };

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, darkMode: !state.darkMode };
    default:
      return state;
  }
};

const store = createStore(themeReducer);

export default store;
