import React from "react";
import { useTodo } from "../context/TodoContext";

const TaskList = () => {
  const { state, dispatch } = useTodo();

  const handleRemoveTask = (taskId) => {
    dispatch({ type: "REMOVE_TASK", payload: taskId });
  };

  const handleToggleTask = (taskId) => {
    dispatch({ type: "TOGGLE_TASK", payload: taskId });
  };

  const handleStartEditing = (taskId) => {
    dispatch({ type: "START_EDITING", payload: taskId });
  };

  const filteredTasks = state.tasks.filter((task) =>
    task.text.toLowerCase().includes(state.searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-4">
      {filteredTasks.map((task) => (
        <div
          key={task.id}
          className={`flex justify-between items-center p-4 rounded-md ${
            task.completed ? "bg-green-100" : "bg-white"
          } shadow-md`}
        >
          <span
            onClick={() => handleToggleTask(task.id)}
            className={`cursor-pointer ${task.completed ? "line-through text-gray-500" : ""}`}
          >
            {task.text}
          </span>
          <div className="flex space-x-4">
            <button
              onClick={() => handleStartEditing(task.id)}
              className="text-blue-500 hover:text-blue-600 transition duration-300"
            >
              Edit
            </button>
            <button
              onClick={() => handleRemoveTask(task.id)}
              className="text-red-500 hover:text-red-600 transition duration-300"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
