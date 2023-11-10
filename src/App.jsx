import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Cart from "./pages/cart/cart";
import Shop from "./pages/shop/shop";
import { ShopContextProvider } from "./context/shop-context";
import SingleProductPage from "./pages/singleProduct";
import Signup from "./pages/signup";
import Login from "./pages/login";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products/:id" element={<SingleProductPage />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
