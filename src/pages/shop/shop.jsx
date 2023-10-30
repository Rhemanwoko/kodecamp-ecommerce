import { useContext } from "react";
import { PRODUCTS } from "../../products";
import Product from "./product";
import "./shop.css";
import { ShopContext } from "../../context/shop-context";

const Shop = () => {
  const { products } = useContext(ShopContext);
  console.log(products);
  return (
    <div className="shop">
      {/* <div className="shopTitle">
        <h1>RhemaTech Market</h1>
      </div> */}
      <div className="products w-[90%] mx-auto">
        {products.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
