import { Routes, Route } from "react-router-dom";
import { Address } from "../components/cart/Address/Address";
import { Cart } from "../components/cart/cart";
import { Payment } from "../components/cart/Payment/Payment";
import { PaySucces } from "../components/cart/Payment/PaySucces";
import { Home } from "../components/home/Home";
import { Product_detail } from "../components/product-details-page/product-details";
import { Product_page } from "../components/productpage/product";
import { SignInSide } from "../components/sign-in/Login";
import { SignUpSide } from "../components/sign-up/SignUp";
import {Forgotpass} from "../components/sign-in/Forgotpass"
export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product_page />} />
        <Route path="/products/:id" element={<Product_detail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<SignUpSide />} />
        <Route path="/signin" element={<SignInSide />} />
        <Route path="/checkout/address" element={<Address />} />
        <Route path="/checkout/address/payment" element={<Payment />} />
        <Route path="/forgotpass" element={<Forgotpass />} />
        <Route
          path="/checkout/address/payment/paySuccess"
          element={<PaySucces />}
        />
      </Routes>
    </>
  );
};
