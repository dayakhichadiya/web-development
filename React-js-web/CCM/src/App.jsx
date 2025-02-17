import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import LoginPage from "./pages/Login";

function App() {
  return (
    // <ExpenseProvider>
      <Router>
        {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<LoginPage />} />
           <Route path="/Navbar" element={<Navbar />} />
            {/* <Route path="/expense-list" element={<ExpenseList />} />
            <Route path="/edit-expense/:id" element={<EditExpense />} />
            <Route path="/expense-summary" element={<ExpenseSummary />} />  */}
          </Routes>
      </Router>
  //  </ExpenseProvider>
  );
}

export default App;
