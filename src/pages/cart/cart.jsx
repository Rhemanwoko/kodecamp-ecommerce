import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { Bag } from "phosphor-react";
import { CartItem } from "./cart-item";
import "./cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalCartAmount, products } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div>
      <div className="navbar mb-4 md:mb-5 lg:mb-7">
        <div
          className="header ml-2 md:ml-4 lg:ml-6 cursor-pointer text-2xl"
          onClick={() => navigate("/")}
        >
          <Bag className="text-white md:inline-block hidden" size={32} />
          <p className="text-white inline-block">rhayBrands</p>
        </div>
        {/* <div className="links mr-2 md:mr-4 lg:mr-6 text-[5px]">

          <Link to="/signup" className="">
            <p>New? Let's get to know you</p>
          </Link>
        </div> */}
      </div>
      <div className="cart">
        <div>
          <h1 className="font-bold">Basket Contents</h1>
        </div>
        <div className="cartItems">
          {products.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem data={product} />;
            }
          })}
        </div>

        {totalAmount > 0 ? (
          <div className="checkout">
            <p className="font-bold"> Subtotal: ${totalAmount} </p>
            <button onClick={() => navigate("/")}> Continue Shopping </button>
            <button> Checkout </button>
          </div>
        ) : (
          <h1> Your Basket is Empty </h1>
        )}
      </div>
    </div>
  );
};

export default Cart;
