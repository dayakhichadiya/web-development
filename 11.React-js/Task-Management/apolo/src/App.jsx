import "./App.css";
import Header from "./component/Header";
import TaskList from "./component/TaskList";
import TaskForm from "./component/TaskForm";
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import TaskCard from "./component/TaskCard";

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
    <RouterProvider router={router}></RouterProvider>
    </>
  )
  }

export default App;