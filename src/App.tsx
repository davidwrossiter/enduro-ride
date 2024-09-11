import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Maintenance from "./pages/Maintenance";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:productId" element={<Product />} />
      // <Route path="/" element={<Maintenance />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
