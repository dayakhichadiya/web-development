import "./App.css";
import React from "react";
import CRUDTable from "./CrudTable";
import AddUser from "./component/AddUser";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App(){

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<CRUDTable/>} />
        <Route path="/adduser" element={<AddUser/>} />
        <Route path="/crudtable" element={<CRUDTable/>} />
      </Routes>
    </Router>
    </>
  )
} 

export default App;
