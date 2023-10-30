import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { Link } from "react-router-dom";

export const CartItem = (props) => {
  const { id, title, price, image } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div>
      <Link to={`/products/${id}`}>
        <div className="cartItem mx-auto">
          <img src={image} />
          <div className="description">
            <p className="mb-3">
              <b>{title}</b>
            </p>
            <p className="mb-3">${price}</p>
            <div className="countHandler">
              <button onClick={() => removeFromCart(id)}> - </button>
              <input
                value={cartItems[id]}
                onChange={(e) =>
                  updateCartItemCount(Number(e.target.value), id)
                }
              />
              <button onClick={() => addToCart(id)}> + </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
