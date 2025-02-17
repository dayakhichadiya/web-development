import { Link } from "react-router-dom";
import logo1 from "../assets/logo1.jpeg"
import logo2 from "../assets/logo2.png"


const Navbar = () => (
  <nav className="bg-blue-500 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
        <img src={logo2} alt="logo image" className="w-14 h-14 rounded-full" />
      <h1 className="text-xl font-bold">Expense Tracker</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/add-expense" className="hover:underline">Add Expense</Link>
        <Link to="/expense-list" className="hover:underline">Expense List</Link>
        <Link to="/expense-summary" className="hover:underline">Expense Summary</Link>
      </div>
    </div>
  </nav>
);


export default Navbar