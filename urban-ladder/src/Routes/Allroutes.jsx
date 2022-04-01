import { Routes, Route } from "react-router-dom";
import { Address } from "../components/cart/Address/Address";
import { Cart } from "../components/cart/cart";
import { Payment } from "../components/cart/Payment/Payment";
import { Home } from "../components/home/Home";
import { Product_detail } from "../components/product-details-page/product-details";
import { Product_page } from "../components/productpage/product";
import { Sign_in } from "../components/sign-in/sign-in";
import { Sign_up } from "../components/sign-up/sign-up";
export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product_page />} />
        <Route path="/products/:id" element={<Product_detail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<Sign_up />} />
        <Route path="/signin" element={<Sign_in />} />
        <Route path="/checkout/address" element={<Address />} />
        <Route path="/checkout/address/payment" element={<Payment />} />
      </Routes>
    </>
  );
};
