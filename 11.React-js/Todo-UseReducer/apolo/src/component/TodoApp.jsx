import React, { useReducer, useEffect, useState } from "react";

const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasks")) || [], 
  editingTaskId: null,
  taskInput: "",
  searchQuery: "",
  filterStatus: "all", 
};

const ADD_TASK = "ADD_TASK";
const REMOVE_TASK = "REMOVE_TASK";
const TOGGLE_TASK = "TOGGLE_TASK";
const SET_TASK_INPUT = "SET_TASK_INPUT";
const START_EDITING = "START_EDITING";
const SAVE_EDIT = "SAVE_EDIT";
const SET_SEARCH_QUERY = "SET_SEARCH_QUERY";
const SET_FILTER_STATUS = "SET_FILTER_STATUS";

const todoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TASK:
      const newTask = { id: Date.now(), text: state.taskInput, completed: false };
      const updatedTasksAdd = [...state.tasks, newTask];
      localStorage.setItem("tasks", JSON.stringify(updatedTasksAdd));
      return {
        ...state,
        tasks: updatedTasksAdd,
        taskInput: "",
      };

    case REMOVE_TASK:
      const updatedTasksRemove = state.tasks.filter((task) => task.id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(updatedTasksRemove));
      return {
        ...state,
        tasks: updatedTasksRemove,
      };

    case TOGGLE_TASK:
      const updatedTasksToggle = state.tasks.map((task) =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
      localStorage.setItem("tasks", JSON.stringify(updatedTasksToggle));
      return {
        ...state,
        tasks: updatedTasksToggle,
      };

    case SET_TASK_INPUT:
      return {
        ...state,
        taskInput: action.payload,
      };

    case START_EDITING:
      return {
        ...state,
        editingTaskId: action.payload,
        taskInput: state.tasks.find((task) => task.id === action.payload).text,
      };

    case SAVE_EDIT:
      const updatedTasksEdit = state.tasks.map((task) =>
        task.id === state.editingTaskId ? { ...task, text: state.taskInput } : task
      );
      localStorage.setItem("tasks", JSON.stringify(updatedTasksEdit));
      return {
        ...state,
        tasks: updatedTasksEdit,
        editingTaskId: null,
        taskInput: "",
      };

    case SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload,
      };

    case SET_FILTER_STATUS:
      return {
        ...state,
        filterStatus: action.payload,
      };

    default:
      return state;
  }
};

const TodoApp = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [isEditing, setIsEditing] = useState(false);

  const handleAddTask = () => {
    if (state.taskInput.trim()) {
      dispatch({ type: ADD_TASK });
    }
  };

  const handleRemoveTask = (taskId) => {
    dispatch({ type: REMOVE_TASK, payload: taskId });
  };

  const handleToggleTask = (taskId) => {
    dispatch({ type: TOGGLE_TASK, payload: taskId });
  };

  const handleInputChange = (e) => {
    dispatch({ type: SET_TASK_INPUT, payload: e.target.value });
  };

  const handleSearchChange = (e) => {
    dispatch({ type: SET_SEARCH_QUERY, payload: e.target.value });
  };

  // const handleFilterChange = (e) => {
  //   dispatch({ type: SET_FILTER_STATUS, payload: e.target.value });
  // };

  const handleStartEditing = (taskId) => {
    dispatch({ type: START_EDITING, payload: taskId });
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    if (state.taskInput.trim()) {
      dispatch({ type: SAVE_EDIT });
      setIsEditing(false);
    }
  };

  const filteredTasks = state.tasks.filter((task) => {
    const matchesSearch = task.text.toLowerCase().includes(state.searchQuery.toLowerCase());
    const matchesFilter =
      state.filterStatus === "all" ||
      (state.filterStatus === "completed" && task.completed) ||
      (state.filterStatus === "notCompleted" && !task.completed);
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-100 rounded-xl shadow-lg">
      <h1 className="text-3xl font-semibold text-center mb-6">Todo App</h1>

      <div className="flex items-center space-x-4 mb-6">
        <input
          type="text"
          value={state.taskInput}
          onChange={handleInputChange}
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Add a new task..."
        />
        <button
          onClick={isEditing ? handleSaveEdit : handleAddTask}
          className="p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
        >
          {isEditing ? "Save Task" : "Add Task"}
        </button>
      </div>

      <div className="flex justify-between items-center mb-6">
        <input
          type="text"
          value={state.searchQuery}
          onChange={handleSearchChange}
          className="w-2/3 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search tasks..."
        />

      </div>

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
    </div>
  );
};

export default TodoApp;
