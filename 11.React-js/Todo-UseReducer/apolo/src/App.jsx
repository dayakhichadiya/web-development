import { useState } from "react";
import { TodoProvider } from "./context/TodoContext";
import "./App.css";
import TodoApp from "./component/TodoApp";
import Login from "./component/Login";
import TaskInput from "./component/TaskInput";
import TaskList from "./component/TaskList";



function TaskPage() {
  return (
    <div className="task-page">
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
}

function App(){

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  }

  return (
    <>
    <TodoProvider>
      {isLoggedIn ? <TaskPage /> : <Login onLogin={handleLogin} />}
    </TodoProvider>
    </>
  )
}

export default App;
