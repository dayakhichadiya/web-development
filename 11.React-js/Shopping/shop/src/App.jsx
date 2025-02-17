import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Shop from "./Cart/Shop";
import Wishlist from "./Cart/Wishlist";
import Navbar from "./Cart/Navbar";


const App = () => {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </Router>
  );
};

export default App;
