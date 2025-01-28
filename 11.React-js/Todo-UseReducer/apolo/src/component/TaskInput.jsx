import React from "react";
import { useTodo } from "../context/TodoContext";
import { Link } from "react-router";

const TaskInput = () => {
  const { state, dispatch } = useTodo();

  const handleInputChange = (e) => {
    dispatch({ type: "SET_TASK_INPUT", payload: e.target.value });
  };

  const handleAddTask = () => {
    if (state.taskInput.trim()) {
      dispatch({ type: "ADD_TASK" });
    }
  };

  const handleSaveEdit = () => {
    if (state.taskInput.trim()) {
      dispatch({ type: "SAVE_EDIT" });
    }
  };

  return (
    <>
    <div className="flex items-center space-x-4 mb-6">
      <input
        type="text"
        value={state.taskInput}
        onChange={handleInputChange}
        className="w-full p-3 border rounded-md "
        placeholder="Add a new task..."
      />
      <button
        onClick={state.editingTaskId ? handleSaveEdit : handleAddTask}
        className="p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
      >
        {state.editingTaskId ? "Save Task" : "Add Task"}
        </button >

    </div>
    </>
  );
};

export default TaskInput;
