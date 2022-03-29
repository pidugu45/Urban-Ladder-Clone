const express = require("express");
const app = express();
const connect = require("./configs/db");
app.use(express.json());
const productController = require("./controllers/product.controller");
app.use("/products", productController);
app.listen(8000, async (req, res) => {
    try {
        await connect();
        console.log("listening on port 8000");
    }
    catch (e) {
        console.log("database connection failed", e.message);  
   }
})