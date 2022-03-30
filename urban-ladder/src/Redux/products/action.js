export const GET_PRODUCTS = "GET_PRODUCTS";
export const  GetProducts = (products) => {
    return {
        type: GET_PRODUCTS,
        payload:products
    }
}