import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const wishlistCount = useSelector((state) => state.wishlist.length);

  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <Link to="/" className="font-bold text-xl">
        MyShop
      </Link>
      <div>
        <Link to="/" className="mr-4">Shop</Link>
        <Link to="/wishlist">Wishlist ({wishlistCount})</Link>
      </div>
    </nav>
  );
};

export default Navbar;
