
import React, { useState, useContext, useEffect } from "react";
import { ExpenseContext } from "../Context/ExpenseContext";

const EditExpense = ({ expenseId, onClose }) => {
  const { expenses, dispatch } = useContext(ExpenseContext);
  const expenseToEdit = expenses.find((expense) => expense.id === expenseId);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (expenseToEdit) {
      setDescription(expenseToEdit.description);
      setAmount(expenseToEdit.amount);
      setCategory(expenseToEdit.category);
    }
  }, [expenseToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount || !category) {
      alert("All fields are required!");
      return;
    }

    const updatedExpense = {
      id: expenseToEdit.id,
      description,
      amount: parseFloat(amount),
      category,
    };

    dispatch({ type: "EDIT_EXPENSE", payload: updatedExpense });
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Edit Expense</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
              placeholder="Enter description"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Amount
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
              placeholder="Enter amount"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
            >
              <option value="" disabled>
                Select a category
              </option>
              <option value="Food">Food</option>
              <option value="Travelling">Travelling</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Cosmetics">Cosmetics</option>
              <option value="Grocery">Grocery</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditExpense;
