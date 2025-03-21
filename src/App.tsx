import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import TermsAndConditions from "./pages/Terms";
import PrivacyPolicy from "./pages/Privacy";
function App() {
  const [cart, setCart] = useState({
    item_1: 0,
    item_2: 0
  });
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
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </>
  );
}

export default App;
