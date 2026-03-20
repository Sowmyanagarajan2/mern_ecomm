import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

// ✅ GET products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.log("GET error:", error.message);
    res.status(500).json({ message: "Error fetching products" });
  }
});

// ✅ ADD product (admin)
router.post("/", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const saved = await newProduct.save();
    res.status(201).json(saved);
  } catch (error) {
    console.log("POST error:", error.message);
    res.status(500).json({ message: "Error adding product" });
  }
});

export default router;