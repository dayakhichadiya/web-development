import "./App.css";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Home from "./pages/Home";
import Navbar from "./component/Navbar";
import Ques from "./Pages/Ques";
// import AddCart from "./Pages/AddCart";
// import ShopNow from "./Pages/ShopNow";
// import { BrowserRouter , Routes , Route } from "react-router-dom";
// import { createBrowserRouter , RouterProvider } from "react-router-dom";

import { Route } from "react-router-dom";
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Help from "./Pages/Help";
import Career, {CareerLoader} from "./Pages/Career";
import CareerLayout from "./Pages/CareerLayout";
import ErrorPage from "./Pages/ErrorPage";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />} errorElement={<ErrorPage/>}>
    <Route index element = {<Home />} />
    <Route path="about" element={<AboutUs />} />
    <Route path="help" element={<Help />}>
    <Route path="Ques" element={<Ques />} />
    <Route path="contact" element={<ContactUs />} />
 </Route>
 <Route path="career" element={<CareerLayout/>}>
 <Route index element={<Career/>} loader={CareerLoader}/>
 
 </Route>
 </Route>
  )
)



{/* function App() {

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
      {/* <RouterProvider router = {Routes}/> */}
    {/* </> */}
  {/* ); */}
{/* }</Route>  */}

function App(){
  return (
    <>
    <RouterProvider router = {router} />
    </>
  )
}

export default App;

