import React, { useContext, useState } from "react";
import { ExpenseContext } from "../Context/ExpenseContext";
import { Link } from "react-router-dom";
import EditExpense from "./EditExpense";


const ExpenseList = () => {

  const { expenses, dispatch } = useContext(ExpenseContext);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedExpenseId, setSelectedExpenseId] = useState(null);


  if (!expenses) {
    return <p>Loading expenses...</p>;
  }

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this expense?")) {
      dispatch({ type: "DELETE_EXPENSE", payload: id });
    }
  };

  const handleEdit = (id) => {
    setSelectedExpenseId(id);
    setIsEditing(true);
  };
  
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Expense List</h2>
      {expenses.length === 0 ? (
        <p className="text-center text-gray-500">Your expense list is empty.</p>
      ) : (
        <ul className="space-y-4">
          {expenses.map((expense) => (
            <li
              key={expense.id}
              className="flex justify-between items-center p-4 bg-gray-100 rounded shadow-md hover:shadow-lg"
            >
              <div>
                <p className="text-lg font-semibold">{expense.description}</p>
                <p className="text-sm text-gray-500">{expense.category}</p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-black font-semibold">
                  {expense.amount}
                </span>
                <button
                  onClick={() => handleEdit(expense.id)}
                  className="text-white px-3 py-2 rounded-md bg-green-400"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(expense.id)}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      {isEditing && (
        <EditExpense
          expenseId={selectedExpenseId}
          onClose={() => setIsEditing(false)}
        />
      )}
      <Link to="/expense-summary">
        <button className="px-4 mt-6 bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600">
          Expense Summary
        </button>
      </Link>

        <Link to="/add-expense">
              <button
                className="px-4 m-6 mt-6 bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600">
                Back 
              </button>
            </Link>
    </div>
  );
  
};

export default ExpenseList;

