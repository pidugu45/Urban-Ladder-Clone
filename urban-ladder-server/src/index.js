const express = require("express");
const cors = require("cors")
const app = express();
app.use(cors());
const connect = require("./configs/db");
require("dotenv").config();
const PORT = process.env.PORT || 8000;
app.use(express.json());
const productController = require("./controllers/product.controller");
app.use("/products", productController);
app.listen(PORT, async (req, res) => {
    try {
        await connect();
        console.log("listening on port 8000");
    }
    catch (e) {
        console.log("database connection failed", e.message);  
   }
})