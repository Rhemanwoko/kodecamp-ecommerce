import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, Bag } from "phosphor-react";
import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar mb-4 md:mb-5 lg:mb-7">
      <div
        className="header ml-2 md:ml-4 lg:ml-6 cursor-pointer text-2xl"
        onClick={() => navigate("/")}
      >
        <Bag className="text-white md:inline-block hidden" size={32} />
        <p className="text-white inline-block">rhayBrands</p>
      </div>
      <div className="links mr-2 md:mr-4 lg:mr-6">
        <Link to="/signup" className="lg:mr-4">
          <p>Join Us</p>
        </Link>
        <Link to="/login" className="lg:mr-4">
          <p>Log In</p>
        </Link>
        {/* <Link className="hidden md:" to="/">Shop</Link> */}
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
