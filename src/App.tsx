import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Maintenance from "./pages/Maintenance";

function App() {
  return (
    <Routes>
      <Route path="/test" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:productId" element={<Product />} />
      <Route path="/" element={<Maintenance />} />
    </Routes>
  );
}

export default App;
