import React, { createContext, useReducer } from "react";

const TodoContext = createContext();

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

const todoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TASK:
      const newTask = { id: Date.now(), text: state.taskInput, completed: false };
      const updatedTasksAdd = [...state.tasks, newTask];
      localStorage.setItem("tasks", JSON.stringify(updatedTasksAdd));
      return { ...state, tasks: updatedTasksAdd, taskInput: "" };

    case REMOVE_TASK:
      const updatedTasksRemove = state.tasks.filter((task) => task.id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(updatedTasksRemove));
      return { ...state, tasks: updatedTasksRemove };

    case TOGGLE_TASK:
      const updatedTasksToggle = state.tasks.map((task) =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
      localStorage.setItem("tasks", JSON.stringify(updatedTasksToggle));
      return { ...state, tasks: updatedTasksToggle };

    case SET_TASK_INPUT:
      return { ...state, taskInput: action.payload };

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
      return { ...state, tasks: updatedTasksEdit, editingTaskId: null, taskInput: "" };

    case SET_SEARCH_QUERY:
      return { ...state, searchQuery: action.payload };

    default:
      return state;
  }
};

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => React.useContext(TodoContext);
