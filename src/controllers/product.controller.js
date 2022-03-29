const express = require("express");
const Product= require("../models/product.model");
const router = express.Router();




router.post("", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    return   res.send(product);
  } catch (e) {
      return res.send({ "message":e.message });
  }
});
router.get("", async (req, res) => {
  try {
      const products = await Product.find().lean().exec();
 return    res.send(products); 
  } catch (e) {
  return   res.send("error occured:", e.message);
  }
});
router.delete("/:id", async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
   return    res.send(product); 
    } catch (e) {
    return   res.send("error occured:", e.message);
    }
  });
module.exports = router;
