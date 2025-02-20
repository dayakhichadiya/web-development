import { combineReducers, createStore } from "redux";
import themeReducer from "./themeReducer";

const rootReducer = combineReducers({
  theme: themeReducer,
});

const store = createStore(rootReducer);

export default store;
