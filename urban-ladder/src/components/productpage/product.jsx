import { useEffect, useState } from "react"
import axios from "axios";
import { GetProducts } from "../../Redux/products/action";
import { useSelector, useDispatch } from "react-redux";
export const Product_page = () => {
    const products = useSelector((store) => store.products.products);
    const dispatch = useDispatch();
    function getProducts() {
        axios.get("http://localhost:8000/products").then(({ data }) => {
            console.log("data", data);
            dispatch(GetProducts(data));
        })
    }
    useEffect(() => {
        getProducts()
    }, [])
    return <>{
        products.map((e) => (
            <h1>product page</h1>
    ))
       
    }</>
}