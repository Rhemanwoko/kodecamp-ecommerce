import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Cart from "./pages/cart/cart";
import Shop from "./pages/shop/shop";
import { ShopContextProvider } from "./context/shop-context";
import SingleProductPage from "./pages/singleProduct";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products/:id" element={<SingleProductPage />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;