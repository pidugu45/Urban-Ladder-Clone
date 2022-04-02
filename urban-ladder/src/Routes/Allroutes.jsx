import { Routes, Route } from "react-router-dom"
import { Cart } from "../components/cart/cart"
import { Home } from "../components/home/Home"
import { Product_detail } from "../components/product-details-page/product-details"
import { Product_page } from "../components/productpage/product"
import  SignInSide  from "../components/sign-in/Login"
import SignUpSide from "../components/sign-up/SignUp"
export const AllRoutes = () => {
    return <>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/products" element={<Product_page/>} />
            <Route path="/products/:id" element={<Product_detail/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/signup" element={<SignUpSide/>} />
            <Route path="/signin" element={<SignInSide/>}/>
        </Routes>
    </>
}