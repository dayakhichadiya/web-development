import "./App.css";
import Todo from "./component/Todo";
import { useCallback, useState } from "react";
import ReactDom from "react-dom/client"

function App(){

  const [count, setCount] = useState(0);
  const [todo, setTodo] = useState([]);
  
  const increment = () => {
    setCount((c) => c + 1);
  }

  const addTodo = useCallback(() => {
    setTodo((t) => [...t, "New todo"])
  }, [todo])
  return (
    <>
    <Todo todo={todo} addTodo={addTodo} />
    <hr />
    <div>
      Count : {count}
      <button onClick={increment}>+</button>
    </div>
    </>
  )
}

export default App;
