
import "./App.css";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Home from "./Pages/Home";
import Navbar from "./component/Navbar";
import { BrowserRouter , Route } from "react-router-dom";
import { createBrowserRouter , createRoutesFromElements, RouterProvider } from "react-router-dom";
import Login from "./Pages/Login";
import SignupPage from "./Pages/SignupPage"
// import ProtectedRoutes from "./component/ProtectedRoute";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path="about" element={
        // <ProtectedRoutes>
          <AboutUs/>
        // {/* </ProtectedRoutes> */}
      } />

        <Route path="contact" element={<ContactUs />} />
        <Route path="signup" element={<SignupPage />} />
    
      <Route path="login" element={
        // <ProtectedRoutes>
           <Login />
        // </ProtectedRoutes>
        } />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}


export default App;
