import "./App.css";
import React from "react";
import UseRefExample from "./useRef/InputTask-1";
import ImageScroll from "./useRef/ImageScroll-2";
import VideoPlayer from "./useRef/VedioTask-3";
import ExposeRefExample from "./useRef/Exposing-ref-4";
import ClickCounter from "./useRef/Counter-5";
import Stopwatch from "./useRef/Stopwatch-6";
import { ProductsProvider } from "./ContextAPI/ProductContext";
import ShopPage from "./ContextAPI/ShopPage";
import ProductView from "./ContextAPI/ProductView";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <>
      {/* <UseRefExample/> */}
      {/* <ImageScroll/> */}
      {/* <VideoPlayer/> */}
      {/* <ExposeRefExample/> */}
      {/* <ClickCounter/> */}
      {/* <Stopwatch/> */}

      <Router>
        <ProductsProvider>
          <Routes>
            <Route path="/" element={<ShopPage />} />
            <Route path="/product/:productId" element={<ProductView />} />
          </Routes>
        </ProductsProvider>
      </Router>
    </>
  )
}

export default App;
