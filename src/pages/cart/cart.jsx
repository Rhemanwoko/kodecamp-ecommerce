import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import "./cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalCartAmount, products } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
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
  );
};

export default Cart;
