import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddExpense from "./component/AddExpense";
import ExpenseList from "./component/ExpenseList";
import { ExpenseProvider } from "./Context/ExpenseContext";
import Home from "./component/Home";
import Navbar from "./component/Navigation";
import EditExpense from "./component/EditExpense";
import ExpenseSummary from "./component/ExpenseSummary";
function App() {
  return (
    <ExpenseProvider>
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-expense" element={<AddExpense />} />
            <Route path="/expense-list" element={<ExpenseList />} />
            <Route path="/edit-expense/:id" element={<EditExpense />} />
            <Route path="/expense-summary" element={<ExpenseSummary />} />
          </Routes>
      </Router>
   </ExpenseProvider>
  );
}

export default App;
