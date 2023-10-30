import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import "./shop.css";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { id, title, price, image, rating } = props.data;

  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];
  return (
    <div className="productx px-4 py-5 border rounded-md shadow-lg">
      <Link className="product" to={`/products/${id}`}>
        <div
          className={`productImg w-[300px] h-[600px] bg-contain bg-no-repeat bg-center mb-3`}
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          {/* <img src={image} alt="" /> */}
        </div>
        <div className="description">
          <div className="w-[300px] truncate">
            <b className="">{title}</b>
          </div>
          <p>Rating: {rating.rate}/5</p>
          <p>
            <span>Price: </span>${price}
          </p>
        </div>
      </Link>
      <div className="prodtbttn">
        <button className="addToCartBttn" onClick={() => addToCart(id)}>
          Add To Basket {cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button>
      </div>
    </div>
  );
};

export default Product;
