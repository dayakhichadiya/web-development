import React, { createContext, useReducer } from "react";

export const ExpenseContext = createContext();

const expenseReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.payload];
    case "DELETE_EXPENSE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
};
 export const ExpenseProvider = ({ children }) => {
  const [expenses, dispatch] = useReducer(
    expenseReducer, 
    JSON.parse(localStorage.getItem("expenses")) || []
  )

  React.useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  },[expenses]);

  return (
    <ExpenseContext.Provider value={{ expenses, dispatch }}>
      {children}
    </ExpenseContext.Provider>
  );
};

