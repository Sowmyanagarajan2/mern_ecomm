import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

// ✅ GET all products (SAFE VERSION)
router.get("/", async (req, res) => {
  try {
    console.log("Products route hit");

    // Try fetching from DB
    const products = await Product.find();

    res.json(products);
  } catch (error) {
    console.log("Products API error:", error.message);

    // ✅ fallback data (so your demo still works)
    res.status(200).json([
      { _id: 1, name: "Demo Product 1", price: 100 },
      { _id: 2, name: "Demo Product 2", price: 200 }
    ]);
  }
});

export default router;