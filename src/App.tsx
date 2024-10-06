import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Maintenance from "./pages/Maintenance";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Header from "./components/Header";
function App() {
  const [cart, setCart] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <Header
        scrollPosition={scrollPosition}
        setScrollPosition={setScrollPosition}
        setMobileMenuOpen={setMobileMenuOpen}
        mobileMenuOpen={mobileMenuOpen}
        cart={cart}
        setCart={setCart}
      />

      <Routes>
        <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<Product />} />
      // <Route path="/" element={<Maintenance />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
    </>
  );
}

export default App;
