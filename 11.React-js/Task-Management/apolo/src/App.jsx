import "./App.css";
import Header from "./component/Header";
import TaskList from "./component/TaskList";
import TaskForm from "./component/TaskForm";
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import TaskCard from "./component/TaskCard";
import { TaskProvider } from "./component/TaskContext";
import ReactDOM from "react-dom/client"
import React from "react";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
    <Route path="/" element={<TaskForm/>}/>
    <Route path="Tasklist" element={<TaskList/>}/>
    <Route path="TaskCard" element={<TaskCard/>}/>
    </Route>
  )
)

function App (){
  
  return ( 
    <>
    <RouterProvider router={router}/>
    </>
  )
  }
//   const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <TaskProvider>
//       <App />
//     </TaskProvider>
//   </React.StrictMode>
// )

export default App;
