import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import Navbar from "./component/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App