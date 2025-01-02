// import "./App.css";
// import Navbar from "./component/Navbar";
// import Home from "./Pages/Home";
// import AboutUs from "./Pages/AboutUs";
// import ContactUs from "./Pages/ContactUs";
// // import { BrowserRouter, Routes, Route } from "react-router";
// import { createBrowserRouter, RouterProvider } from "react-router-dom"
// // import { Component } from "react";


// const Routes = createBrowserRouter([
//   {
//     path : '/',
//     element : <Navbar/>,
//     children : [
//       {
//         path: '/',
//         element : <Home/>
//       },
//       {
//         path: '/about',
//         element : <AboutUs/>
//       },
//       {
//         path: '/ContactUs',
//         element : <ContactUs/>
//       }
//     ]
//   }
// ])
// function App() {

//   return (
//     <>
//       {/* <BrowserRouter>
//       <Navbar/>
//       <Routes>
//         <Route path="/" element={<Home/>}/>
//         <Route path="/AboutUs" element={<AboutUs/>}/>
//         <Route path="/ContactUs" element={<ContactUs/>}/>
//       </Routes>
//       </BrowserRouter>       */}
//       <RouterProvider router = {Routes}/>
//     </>
//   );
// }

// export default App;

import "./App.css";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Navbar from "./component/Navbar";
// import { BrowserRouter , Routes , Route } from "react-router-dom";
import { createBrowserRouter , RouterProvider } from "react-router-dom";

const Routes = createBrowserRouter([
  {
    path:'/',
    element:<Navbar/>,
    children:[
      {
        path:'/',
        Component:Home
      },
      {
        path:'/about',
        Component:AboutUs
      },
      {
        path:'/contact',
        Component:ContactUs
      },
    ]
  },
 
])


function App() {

  return (
    <>
      {/* <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/contact" element={<ContectUs/>}/>
        </Routes>
      </BrowserRouter> */}
      <RouterProvider router = {Routes}/>
    </>
  );
}

export default App;
