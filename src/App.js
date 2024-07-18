import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "remixicon/fonts/remixicon.css";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import Cart from "./components/Cart/Cart";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import { calculate } from "./components/redux1/cartSlice";

import { login } from "./components/redux1/authSlice";
import { retrieveItem } from "./components/utility/storage";

const SharedLayout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

function App() {
  const { products } = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculate());
  }, [products, dispatch]);

  useEffect(() => {
    const currentUser = retrieveItem("user");
    console.log("getting user", currentUser);
    if (currentUser) {
      dispatch(login(currentUser));
    }
  }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/products/" element={<Products />} />
            <Route path="products/:id" element={<Product />} />

            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
