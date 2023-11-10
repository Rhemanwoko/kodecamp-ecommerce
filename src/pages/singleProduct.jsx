import React, { useContext, useEffect, useState } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/shop-context";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, Bag } from "phosphor-react";
import "../components/navbar.css";

function SingleProductPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];

  useEffect(() => {
    Axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!product) {
    return <p>Product not found</p>;
  }

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
        <div className="links mr-2 md:mr-4 lg:mr-6">
          {/* <Link to="/signup" className="lg:mr-4">
            <p>Join Us</p>
          </Link>
          <Link className="lg:mr-4">
            <p>Log In</p>
          </Link> */}
          {/* <Link className="hidden md:" to="/">Shop</Link> */}
          <Link to="/cart">
            <ShoppingCart size={32} />
          </Link>
        </div>
      </div>
      <div className="productDetails">
        <h1 className="productTitle text-center  text-[18px] md:text-[24px] font-bold mb-6 mt-4">
          {product.title}
        </h1>
        <div className="w-[90%] md:w-[80%] mx-auto flex justify-between border rounded-md shadow-lg py-4 px-4">
          <div
            className="productImage basis-[40%] h-[400px] bg-contain bg-no-repeat bg-center items-center"
            style={{
              backgroundImage: `url(${product.image})`,
            }}
          >
            {/* <img src={product.image} alt={product.title} /> */}
          </div>
          <div className="productInfo basis-[58%] relative pt-4 md:pt-7 pl-3">
            <p className="mb-4">
              <span className="font-bold">Description : </span>
              {product.description}
            </p>
            <p className="mb-4">
              <span className="font-bold">Catergory : </span>
              {product.category}
            </p>
            <p>
              <span className="font-bold">Price:</span> ${product.price}
            </p>
            <div className="prodtbttn absolute inset-x-0 md:bottom-[24px] bottom-0">
              <button className="addToCartBttn" onClick={() => addToCart(id)}>
                Add To Basket {cartItemAmount > 0 && <>({cartItemAmount})</>}
              </button>
            </div>
          </div>
        </div>
        {/* Add more product details here */}
      </div>
    </div>
  );
}

export default SingleProductPage;
