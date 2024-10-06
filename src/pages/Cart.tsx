import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
function Cart() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="flex flex-col h-screen items-center justify-between">
      <Header
        scrollPosition={scrollPosition}
        setScrollPosition={setScrollPosition}
        setMobileMenuOpen={setMobileMenuOpen}
        mobileMenuOpen={mobileMenuOpen}
      />

      <div className="h-[80vh] pt-14 w-full border max-w-[1250px]">
        <div className="w-full flex px-7 pt-20 flex-col">
          <div><p>Item number 1</p></div>
        </div>
      </div>

      <Footer />
    </div>)
}

export default Cart;
