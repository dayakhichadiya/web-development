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
import Home from "./ContextAPI/Home";
import Navbar from "./ContextAPI/Navbar";
import AboutPage from "./ContextAPI/AboutPage";



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
        
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutPage" element={<AboutPage />} />
            <Route path="/shoppage" element= {<ProductsProvider> <ShopPage /> </ProductsProvider>} />
            <Route path="/productview" element= {<ProductsProvider> <ProductView /> </ProductsProvider>} />
          </Routes>
        
      </Router>
    </>
  )
}

export default App;
