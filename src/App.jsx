import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Overview from "./pages/product-tabs/Overview";
import Reviews from "./pages/product-tabs/Reviews";
import Specifications from "./pages/product-tabs/Specifications";
import ProtectedCheckout from "./components/ProtectedCheckout";


function App() {
  return (
    <>
    <Navbar />

    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/cart" element={<Cart />} />
      <Route element={<ProtectedCheckout />}>
        <Route path="/checkout" element={<Checkout />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/products" element={<Products />} />

      <Route path="/products/:id" element={<ProductDetails />}>
      <Route index element={<Overview />} />
      <Route path="reviews" element={<Reviews />} />
      <Route path="specifications" element={<Specifications />} />
     </Route>
      
    </Routes>
    </>
  )
}

export default App