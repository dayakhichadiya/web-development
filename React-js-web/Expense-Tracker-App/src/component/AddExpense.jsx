import React, { useState, useContext } from "react";
import { ExpenseContext } from "../Context/ExpenseContext";
import { Link } from "react-router-dom"; 


const AddExpense = () => {
  const { dispatch } = useContext(ExpenseContext);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount || !category) {
      alert("Please fill in all fields!");
      return;
    }

    const newExpense = {
      id: Date.now(),
      description,
      amount: parseFloat(amount),
      category,
    };

    dispatch({ type: "ADD_EXPENSE", payload: newExpense });
    setDescription("");
    setAmount("");
    setCategory("");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Add Expense</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
              placeholder="Enter expense description"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
              placeholder="Enter expense amount"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Category</label>
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
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600"
          >
            Add Expense
          </button>

          <Link to = "/expense-list">
          <button
            className="w-full mt-6 bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600">
            Expense List
          </button>
            </Link>
        </form>
      </div>
    </div>
  );
};

export default AddExpense;
