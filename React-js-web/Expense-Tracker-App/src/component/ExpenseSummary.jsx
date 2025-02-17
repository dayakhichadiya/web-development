import React, { useContext } from "react";
import { ExpenseContext } from "../Context/ExpenseContext";
import { Link } from "react-router";

const ExpenseSummary = () => {
  const { expenses } = useContext(ExpenseContext);

  const categoryTotals = expenses.reduce((totals, expense) => {
    if (!totals[expense.category]){
        totals[expense.category] = 0;
    }
    totals[expense.category] += expense.amount;
    return totals;
}, {});

const sumTotal = expenses.reduce((total, expense) => total + expense.amount, 0)

return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Expense Summary</h2>
        <div className="space-y-4">
          {Object.keys(categoryTotals).map((category) => (
            <div
              key={category}
              className="flex justify-between items-center bg-gray-50 p-4 rounded shadow"
            >
              <span className="font-medium text-gray-700">{category}</span>
              <span className="font-bold text-blue-600">{categoryTotals[category].toFixed(2)}</span>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 bg-blue-50 rounded shadow flex justify-between items-center">
          <span className="font-bold text-gray-800">Total Amount:</span>
          <span className="font-bold text-green-600">{sumTotal.toFixed(2)}</span>
          
        </div>
        <Link to="/expense-list">
        <button
          className="w-full mt-6 bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600">
          Back to list
        </button>
      </Link>

      
      </div>
     
    </div>
  );
};

export default ExpenseSummary;
