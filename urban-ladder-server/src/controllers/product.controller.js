const express = require("express");
const Product= require("../models/product.model");
const router = express.Router();




router.post("", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    return   res.status(200).send(product);
  } catch (e) {
      return res.status(500).send({ "message":e.message });
  }
});
router.get("", async (req, res) => {
  try {
      const products = await Product.find().lean().exec();
 return    res.status(200).send(products); 
  } catch (e) {
  return   res.status(500).send("error occured:", e.message);
  }
});
router.get("/:id", async (req, res) => {
  try {
      const product = await Product.findById(req.params.id).lean().exec();
 return    res.status(200).send(product); 
  } catch (e) {
  return   res.status(500).send("error occured:", e.message);
  }
});
router.delete("/:id", async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
   return    res.send(product); 
    } catch (e) {
    return   res.status(500).send("error occured:", e.message);
    }
  });
module.exports = router;
